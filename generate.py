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
