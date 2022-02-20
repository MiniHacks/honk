from fastapi import FastAPI
from random import choice, random
from typing import List
import yake

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/topics")
def topics(title: str, header: str, content: str):
    return list(set([choice(title), choice(header), choice(content), choice(content)]))

@app.get("/distracted")
def distracted(topics: List[str]):
    return random() > 0.3