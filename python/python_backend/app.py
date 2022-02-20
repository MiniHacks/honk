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

"""
from yake import KeywordExtractor
yake_params = {
    "lan": "en",
    "dedupLim": 0.9, # try 0.1 to distil sets?
    "top": 10
}
phrase_extractor = KeywordExtractor(n=3, **yake_params)
word_extractor = KeywordExtractor(n=1, **yake_params)

import spacy
nlp = spacy.load("en_core_web_trf")
"""

from sentence_transformers import SentenceTransformer
model = SentenceTransformer('sentence-transformers/all-MiniLM-L6-v2') # probably the strongest
"""
mpnet_model = SentenceTransformer('sentence-transformers/paraphrase-mpnet-base-v2')
mini_para_model = SentenceTransformer('sentence-transformers/paraphrase-MiniLM-L6-v2')
mini_all_model = SentenceTransformer('sentence-transformers/all-MiniLM-L6-v2') # probably the strongest
"""

app = FastAPI()

@app.get("/python/")
async def root():
    return {"message": "Hello World"}

@app.get("/python/embeddings")
@app.post("/python/embeddings")
def topics(element: Element, previous_embedding_str: str=""):
    title = element.title
    content = element.content
    header = element.header
    full_text = title + header + content
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
    title_embedding = model.encode(title)
    text_embedding = model.encode(full_text)

    new_embedding = np.hstack((title_embedding, text_embedding))
    embed_string = json.dumps(new_embedding.tolist())

    if not previous_embedding_str:
        return { "focused": True, "embed_string": embed_string }

    previous_embedding = np.array(json.loads(previous_embedding_str))
    similarity = np.dot(new_embedding, previous_embedding)
    focused = similarity > 0.5

    return { "focused": focused, "embed_string": embed_string }

@app.get("/python/distracted")
@app.post("/python/distracted")
def distracted(embedding_strs: List[(str, int)]):
    embeddings = map(lambda x: np.array(json.loads(x[0])), embedding_strs) 
    for a in embeddings:
        for b in embeddings:
            print(np.dot(a,b), end="")
        print()
    return random() > 0.3