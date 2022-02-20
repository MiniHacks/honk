from fastapi import FastAPI
from random import choice, random
from typing import List, Optional
from pydantic import BaseModel
import json
import numpy as np
from keybert import KeyBERT

class Element(BaseModel):
    title: str
    content: str
    header: Optional[str] = ""

class Body(BaseModel):
    element: Element
    previous_embedding_str: str = ""

from sentence_transformers import SentenceTransformer
model = SentenceTransformer('sentence-transformers/all-MiniLM-L6-v2')

from keybert import KeyBERT
kw_model = KeyBERT(model=model)
kw_params = {
    "stop_words": 'english',
    "top_n": 5,
    "use_mmr": True,
    "diversity": 0.4
}

app = FastAPI()

@app.get("/python/")
async def root():
    return {"message": "HONK!"}

@app.get("/python/embeddings")
@app.post("/python/embeddings")
def topics(body: Body):
    title = body.element.title
    content = body.element.content
    header = body.element.header
    full_text = title + header + content

    def is_valid_keyword(word):
        noise_words = [ "badge", "comment", "gold", "silver", "bronze", "upvote", "follow", "edited", "answer"]
        return not any([noise in word for noise in noise_words])

    keywords = kw_model.extract_keywords(full_text, keyphrase_ngram_range=(2,2), **kw_params)
    # model prefers to extract maximum length ngram, force shorter (keyword) ngrams
    keywords += kw_model.extract_keywords(full_text, keyphrase_ngram_range=(1,1), **kw_params)
    keywords = list(filter(is_valid_keyword, map(lambda x: x[0], keywords)))

    # create 384 length embeddings for the title and full text
    # prioritize title and header (only take 250 tokens)
    title_embedding = model.encode(title)
    text_embedding = model.encode(full_text)

    # concatenate vectors to form 768 length full embedding
    new_embedding = np.hstack((title_embedding, text_embedding))
    # prepare embedding for transfer
    embed_string = json.dumps(new_embedding.tolist())

    # focused by default if no previous topic exists
    if not body.previous_embedding_str or body.previous_embedding_str == "null":
        return { "focused": True, "embed_string": embed_string, "keywords": keywords }

    # load the previous embedding from the string
    previous_embedding = np.array(json.loads(body.previous_embedding_str), dtype='float32')
    # compare the current and previous topic via bootleg cosine similarity
    similarity = np.dot(new_embedding, previous_embedding)
    # the embedding is not normalized, we could divide by 2 but >1 is more fun
    focused = bool(similarity > 1)

    return { "focused": focused, "embed_string": embed_string, "keywords": keywords }
