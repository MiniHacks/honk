from fastapi import FastAPI
from random import choice, random
from typing import List

from yake import KeywordExtractor
yake_params = {
    "lan": "en",
    "dedupLim": 0.9, # try 0.1 to distil sets?
    "top": 10
}

import spacy
nlp = spacy.load("en_core_sci_lg")

app = FastAPI()
phrase_extractor = KeywordExtractor(max_ngram_size=3, **yake_params)
word_extractor = KeywordExtractor(max_ngram_size=1, **yake_params)

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/topics")
def topics(title: str, content: str, header: str = ""):
    full_text = title + header + content
    # ==== YAKE! ====
    print("==== YAKE! ====")
    yake_phrases = phrase_extractor.extract_keywords(full_text)
    yake_words = word_extractor.extract_keywords(full_text)
    print(f"{yake_phrases=}")
    print(f"{yake_words=}")

    # ==== SpaCy ====
    print("==== SpaCy =====")
    doc = nlp(full_text)
    ents = doc.ents
    print(f"{ents=}")

    # ==== Processing ====
    yake_phrases = list(map(lambda x: x[1], filter(lambda x: x[0] < 0.1, phrase_extractor.extract_keywords(full_text))))
    yake_words = list(map(lambda x: x[1], filter(lambda x: x[0] < 0.1, word_extractor.extract_keywords(full_text))))
    print(f"processed {yake_phrases=}")
    print(f"processed {yake_words=}")

    return list(set(yake_phrases + yake_words + ents))

@app.get("/distracted")
def distracted(topics: List[List[str]]):
    return random() > 0.3