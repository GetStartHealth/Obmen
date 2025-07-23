from openai import OpenAI
from openai import AsyncOpenAI
import os
from dotenv import load_dotenv

load_dotenv()

TOKEN = os.getenv("TOKEN")
TOKEN_DEEP_SEEK = os.getenv("TOKEN_DEEP_SEEK")

client = AsyncOpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key=TOKEN_DEEP_SEEK,
)


async def a_generate(text: str):

    completion = await client.chat.completions.create(
        model="deepseek/deepseek-r1-0528:free",
        messages=[{"role": "user", "content": text}],
    )
    print(completion)
    
    return completion.choices[0].message.content
