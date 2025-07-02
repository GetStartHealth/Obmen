from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
import httpx

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/search")
async def search(q: str = Query(..., min_length=3), limit: int = 10):
    url = f"https://api.deezer.com/search?q={q}&limit={limit}"
    async with httpx.AsyncClient() as client:
        resp = await client.get(url)
        resp.raise_for_status()
        return resp.json()
