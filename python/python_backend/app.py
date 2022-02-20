from fastapi import FastAPI
from random import choice, random
from typing import List

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/topics")
def topics(el: List[str]):
    title, header, content = el
    return list(set([choice(title), choice(header), choice(content), choice(content)]))

@app.get("/distracted")
def distracted(topics: List[str]):
    return random() > 0.3