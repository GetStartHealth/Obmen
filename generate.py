from openai import OpenAI
from openai import AsyncOpenAI

TOKEN_DEEP_SEEK = (
    "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"
)
client = AsyncOpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key=TOKEN_DEEP_SEEK,
)


async def a_generate(text: str):

    completion = await client.chat.completions.create(
        model="deepseek/deepseek-chat",
        messages=[{"role": "user", "content": text}],
    )
    print(completion)
    
    return completion.choices[0].message.content