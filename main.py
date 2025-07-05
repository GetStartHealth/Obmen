import asyncio
import logging
import sys
from aiogram import Bot, Dispatcher
from aiogram.filters import CommandStart, StateFilter
from aiogram.types import (
    Message,
    InlineKeyboardMarkup,
    InlineKeyboardButton,
    WebAppInfo,
    CallbackQuery,
)
from aiogram.fsm.state import State, StatesGroup
from aiogram.fsm.context import FSMContext
from aiogram import F, Router

from generate import a_generate

router = Router()


class PleaseStop(StatesGroup):
    wait = State()


import os
from dotenv import load_dotenv

load_dotenv()

TOKEN = os.getenv("TOKEN")
TOKEN_DEEP_SEEK = os.getenv("TOKEN_DEEP_SEEK")

logging.basicConfig(level=logging.INFO, stream=sys.stdout)

bot = Bot(token=TOKEN)
dp = Dispatcher()
dp.include_router(router) #  Подключаем роутер к диспетчеру


@dp.message(CommandStart())
async def command_brone_handler(message: Message) -> None:
    markup = InlineKeyboardMarkup(
        inline_keyboard=[
            [
                InlineKeyboardButton(
                    text="Открыть МузЧат",
                    web_app=WebAppInfo(url="https://getstarthealth.github.io/Obmen/"),
                ),
                InlineKeyboardButton(text="Диалог с ИИ", callback_data="deepSeek"),
            ]
        ]
    )
    await message.answer(
        text=(
            "Приветствуем вас! Это музыкальное приложение предлагает вам треки и клипы."
            "Также вы можете заказать индивидуальное музыкальное произведение."
            "Для запросов используйте возможности искусственного интеллекта."
        ),
        reply_markup=markup,
    )


@dp.callback_query(lambda c: c.data == "deepSeek")
async def callback_deepSeek(call: CallbackQuery):
    await call.answer()
    await call.message.answer("Диалог открыт, задавайте запрос")


@router.message(StateFilter(PleaseStop.wait))
async def stop_flood_please(message: Message):
    await message.answer("Происходит обработка другого запроса... Пожалуйста, подождите.")


@router.message()
async def generating(message: Message, state: FSMContext):
    if message.text:
        await message.answer("Компиляция запроса...⏳")
        await state.set_state(PleaseStop.wait) 
        res = await a_generate(message.text)
        await message.answer(res)
        await state.clear()

async def main() -> None:
    # dp.include_router(router)  #  Роутер уже подключен выше
    await dp.start_polling(bot)


if __name__ == "__main__":
    asyncio.run(main())
