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
def topics(element: Element):
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
    title_embeds = model.encode(title)
    text_embeds = model.encode(full_text)
    embeds = np.hstack((title_embeds, text_embeds))
    return json.dumps(embeds.tolist())


@app.get("/python/distracted")
def distracted(topics: List[List[str]]):
    return random() > 0.3