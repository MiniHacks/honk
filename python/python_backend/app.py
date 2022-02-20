from fastapi import FastAPI
from random import choice, random
from typing import List, Optional
from pydantic import BaseModel
import json
import numpy as np

class Element(BaseModel):
    title: str
    content: str
    header: Optional[str] = ""

class Body(BaseModel):
    element: Element
    previous_embedding_str: str = ""

from yake import KeywordExtractor
yake_params = {
    "lan": "en",
    "dedupLim": 0.3, # try 0.1 to distil sets?
    "top": 20,
    "n": 3
}
extractor = KeywordExtractor(**yake_params)
"""
phrase_extractor = KeywordExtractor(n=3, **yake_params)

import spacy
nlp = spacy.load("en_core_web_trf")
"""

from sentence_transformers import SentenceTransformer
model = SentenceTransformer('sentence-transformers/all-MiniLM-L6-v2')
"""
mpnet_model = SentenceTransformer('sentence-transformers/paraphrase-mpnet-base-v2')
mini_para_model = SentenceTransformer('sentence-transformers/paraphrase-MiniLM-L6-v2')
mini_all_model = SentenceTransformer('sentence-transformers/all-MiniLM-L6-v2') # probably the strongest
"""

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

    keywords = extractor.extract_keywords(full_text)
    keywords = list(filter(is_valid_keyword, keywords))
    print(f"{keywords=}")
    """
    # ==== YAKE! ====
    print("==== YAKE! ====")
    yake_phrases = phrase_extractor.extract_keywords(full_text)
    yake_words = word_extractor.extract_keywords(full_text)
    print(f"{yake_phrases=}")
    print(f"{yake_words=}")

    # ==== SpaCy ====
    print("==== SpaCy =====")
    doc = nlp(full_text)
    entities = doc.ents
    print(f"{entities=}")

    # ==== HuggingFace ====
    print("==== HuggingFace ====")
    mpnet_title_embeds = mpnet_model.encode(title)
    mpnet_text_embeds = mpnet_model.encode(full_text)
    mini_all_title_embeds = mini_all_model.encode(title)
    mini_all_text_embeds = mini_all_model.encode(full_text)
    mini_para_title_embeds = mini_para_model.encode(title)
    mini_para_text_embeds = mini_para_model.encode(full_text)

    # ==== Processing ====
    print("==== Processing =====")
    yake_phrases = list(map(lambda x: x[0], filter(lambda x: x[1] < 0.1, phrase_extractor.extract_keywords(full_text))))
    yake_words = list(map(lambda x: x[0], filter(lambda x: x[1] < 0.1, word_extractor.extract_keywords(full_text))))
    print(f"processed {yake_phrases=}")
    print(f"processed {yake_words=}")

    return list(set(yake_phrases + yake_words))#+ ents))
    """

    # create 384 length embeddings for the title and full text
    # prioritize title and header (only take 250 tokens)
    title_embedding = model.encode(title)
    text_embedding = model.encode(full_text)

    # concatenate vectors to form 768 length full embedding
    new_embedding = np.hstack((title_embedding, text_embedding))
    # prepare embedding for transfer
    embed_string = json.dumps(new_embedding.tolist())

    # focused by default if no previous topic exists
    if not body.previous_embedding_str:
        return { "focused": True, "embed_string": embed_string, "keywords": keywords }

    # load the previous embedding from the string
    previous_embedding = np.array(json.loads(body.previous_embedding_str))
    # compare the current and previous topic via bootleg cosine similarity
    similarity = np.dot(new_embedding, previous_embedding)
    # the embedding is not normalized, we could divide by 2 but >1 is more fun
    focused = bool(similarity > 1)

    return { "focused": focused, "embed_string": embed_string, "keywords": keywords }