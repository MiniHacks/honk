from fastapi import FastAPI
from random import choice
from typing import List

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/api/topics")
def topics(el):
    title = el.title
    header = el.header
    content = el.content
    return list(set([choice(title), choice(header), choice(content), choice(content)]))


