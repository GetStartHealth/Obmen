const CACHE_NAME = 'music-player-cache-v1';
const urlsToCache = [
  "https://nextjs-boilerplate-i6pd.vercel.app/Русская душа - Богеме Ивлеевой (5).mp3",
"https://nextjs-boilerplate-i6pd.vercel.app/Русская_душа_Я_музыкант,_я_делаю_рок,.mp3",
"https://nextjs-boilerplate-i6pd.vercel.app/В_голове_с_утра_забота__едит_повар_на_ра-_1_-_1_.mp3",
"https://nextjs-boilerplate-i6pd.vercel.app/Кем_был_Есенин__мечтатель_иль_повеса__1.mp3",
"https://nextjs-boilerplate-i6pd.vercel.app/tagmp3_Русская-душа---Крестов-молчания (1).mp3",
"https://nextjs-boilerplate-i6pd.vercel.app/Русская душа - Богата Русская природа.mp3",
"https://nextjs-boilerplate-i6pd.vercel.app/Жизнь_прекрасна,_словно_светлый_день,_1.mp3",
"https://nextjs-boilerplate-i6pd.vercel.app/Кружит снег.mp3",
"https://nextjs-boilerplate-i6pd.vercel.app/Если б не пришла зима.mp3",
"https://nextjs-boilerplate-i6pd.vercel.app/На дворе снежинки кружат.mp3",
"https://nextjs-boilerplate-i6pd.vercel.app/Русская душа Новый год.mp3",
"https://nextjs-boilerplate-i6pd.vercel.app/рождeство (1).mp3",
"https://nextjs-boilerplate-i6pd-git-main-ds-projects-d772f088.vercel.app/DALNOBOY_03-_1_-_1_.mp3",
"https://nextjs-boilerplate-i6pd.vercel.app/Русская душа Старый новый год.mp3",
"https://nextjs-boilerplate-i6pd.vercel.app/Русская душа - Крещение.mp3",
"https://nextjs-boilerplate-i6pd.vercel.app/Бау-Выпускной.mp3",
"https://nextjs-boilerplate-i6pd.vercel.app/Русская душа - Высоцкий.mp3",
"https://nextjs-boilerplate-i6pd.vercel.app/венеры.mp3",
"https://nextjs-boilerplate-i6pd.vercel.app/Русская душа - Женщинам.MP3",
"https://nextjs-boilerplate-i6pd.vercel.app/Русская душа - Слова.mp3",
"https://nextjs-boilerplate-i6pd.vercel.app/1941-1945 гг..MP3",
"https://nextjs-boilerplate-i6pd.vercel.app/Семья.mp3",
"https://nextjs-boilerplate-i6pd.vercel.app/Пионеры (1).mp3",
"https://nextjs-boilerplate-i6pd.vercel.app/День библиотек.mp3",
"https://nextjs-boilerplate-i6pd.vercel.app/Русская душа - Пограничники.mp3",
"https://nextjs-boilerplate-i6pd.vercel.app/1 июня (1).mp3",
"https://nextjs-boilerplate-i6pd.vercel.app/Мой язык (2).mp3",
"https://nextjs-boilerplate-i6pd.vercel.app/Славься, Троица-Святая, (Remix).mp3",
"https://nextjs-boilerplate-i6pd-git-main-ds-projects-d772f088.vercel.app/День Рoссии готов .mp3",
"https://nextjs-boilerplate-i6pd-git-main-ds-projects-d772f088.vercel.app/Черная дата (1).mp3",
"https://nextjs-boilerplate-i6pd.vercel.app/Волны бьются о борт крутой.mp3",
"https://nextjs-boilerplate-i6pd.vercel.app/Русская душа - Гимн славян .mp3",
"https://nextjs-boilerplate-i6pd.vercel.app/День молодёжи.mp3",
"https://nextjs-boilerplate-i6pd.vercel.app/Поэты 2.0 (3).mp3",
"https://nextjs-boilerplate-i6pd.vercel.app/1 апрелч .mp3",
"https://nextjs-boilerplate-i6pd.vercel.app/витя3и.mp3",
"https://nextjs-boilerplate-i6pd.vercel.app/Гагарин (1).mp3",
"https://nextjs-boilerplate-i6pd.vercel.app/Наш мирный сон оберегают во́ины,.mp3",
"https://nextjs-boilerplate-i6pd.vercel.app/служителям искусства.mp3",
"https://nextjs-boilerplate-i6pd.vercel.app/Чистый четверг.mp3",
"https://nextjs-boilerplate-i6pd.vercel.app/русский.mp3",
"https://nextjs-boilerplate-i6pd.vercel.app/Русская душа - Радоница.MP3.mp3",
"https://nextjs-boilerplate-i6pd.vercel.app/Не важно им, кто там попал в беду.mp3",
"https://nextjs-boilerplate-i6pd.vercel.app/Русская душа - Без труда ты земли не вскопаешь .mp3",
"https://nextjs-boilerplate-i6pd.vercel.app/На поле боя, в вихре огня (1).mp3",
"https://nextjs-boilerplate-i6pd.vercel.app/Русская душа - Ивана Купала (1).mp3",
"https://nextjs-boilerplate-i6pd.vercel.app/Ну, здравствуй, мама!.mp3",
"https://nextjs-boilerplate-i6pd.vercel.app/Русская душа - Романс .mp3",
"https://nextjs-boilerplate-i6pd.vercel.app/Русская душа - Не оставляй меня весной .mp3",
"https://nextjs-boilerplate-i6pd.vercel.app/Русская душа - Встало солнце на рассвете.mp3",
"https://nextjs-boilerplate-i6pd.vercel.app/Русская душа - Пасха.mp3",
"https://nextjs-boilerplate-i6pd.vercel.app/Русская душа - Городской маршрут.mp3",
"https://nextjs-boilerplate-lemon-pi-53.vercel.app/tagmp3_2.-Русская-душа---Неважно.mp3",
"https://nextjs-boilerplate-lemon-pi-53.vercel.app/tagmp3_3.-Русская-душа---Здесь-лапы-у-ели.mp3",
"https://nextjs-boilerplate-lemon-pi-53.vercel.app/tagmp3_4.-Русская-душа---Булгаков.mp3",
"https://nextjs-boilerplate-lemon-pi-53.vercel.app/5. Русская душа - В чем сила, брат.mp3",
"https://nextjs-boilerplate-lemon-pi-53.vercel.app/tagmp3_6.-Русская-душа---Дерзкий-вечер.mp3",
"https://nextjs-boilerplate-lemon-pi-53.vercel.app/tagmp3_7.-Русская-душа---Пушкин.mp3",
"https://nextjs-boilerplate-lemon-pi-53.vercel.app/tagmp3_8_Русская-душа_Новости_смотрю_и_плачу.mp3",
"https://nextjs-boilerplate-lemon-pi-53.vercel.app/tagmp3_9.-Русская-душа---Здесь-лапы-у-ели.mp3",
"https://nextjs-boilerplate-i6pd.vercel.app/2. Русская душа - Очень.wav--online-audio-convert.com (1).mp3",
"https://nextjs-boilerplate-i6pd.vercel.app/воронье.mp3",
"https://nextjs-boilerplate-i6pd.vercel.app/тишина.mp3",
"https://nextjs-boilerplate-i6pd.vercel.app/5. Русская душа - Туман.wav--online-audio-convert.com.mp3",
"https://nextjs-boilerplate-i6pd.vercel.app/6. Русская душа - Дети 20-го века.wav--online-audio-convert.com.mp3",
"https://nextjs-boilerplate-i6pd.vercel.app/7. Русская душа - Застава.wav--online-audio-convert.com.mp3",
"https://nextjs-boilerplate-lemon-pi-53.vercel.app/Русская душа - Великая держава.mp3",
"https://nextjs-boil-delta.vercel.app/гафт.mp3",
"https://nextjs-boil-delta.vercel.app/Читаю-строки-ветхого-завета_.mp3",
"https://nextjs-boil-delta.vercel.app/женщина до утра.mp3",
"https://nextjs-boil-delta.vercel.app/4. Русская душа - Одесса (1).mp3",
"https://nextjs-boil-delta.vercel.app/5_Русская_душа_Трепещет_сердце_от_безумства.mp3",
"https://nextjs-boilerplate-i6pd.vercel.app/мой-город.mp3",
"https://nextjs-boilerplate-i6pd.vercel.app/за-деньги.mp3",
"https://nextjs-boilerplate-i6pd.vercel.app/Не-стыдно.mp3",
"https://nextjs-boil-delta.vercel.app/tagmp3_Блокада-Ленинграда-(2).mp3",
"https://nextjs-boil-delta.vercel.app/tagmp3_РД-Вагнера.mp3",
"https://nextjs-boil-delta.vercel.app/tagmp3_стрелок.mp3",
"https://nextjs-boil-delta.vercel.app/tagmp3_Русская-душа---мать.mp3",
"https://nextjs-boil-delta.vercel.app/Там, где маки лютуют.mp3",
"https://nextjs-boil-delta.vercel.app/3_Русская_Душа_Как_заставить_молчать.mp3",
"https://nextjs-boil-delta.vercel.app/tagmp3_Свеча-(2).mp3",
"https://nextjs-boil-delta.vercel.app/Русская душа - Женщинам (1).MP3",
"https://nextjs-boil-delta.vercel.app/Русская душа - Романс .mp3",
"https://nextjs-boil-delta.vercel.app/Венчание (4).mp3",
"https://nextjs-boil-delta.vercel.app/tagmp3_Случайно-встретились-глазами.mp3",
"https://nextjs-boil-delta.vercel.app/tagmp3_Русская-душа-–-Одни-и-те-же-имена.mp3",
"https://nextjs-boil-delta.vercel.app/tagmp3_Брат-версия.mp3",
"https://nextjs-boil-delta.vercel.app/tagmp3_Русская-душа---Путник.mp3",
"https://nextjs-boil-delta.vercel.app/tagmp3_Русская_душа_Недописанный_стих_.mp3",
"https://nextjs-boil-delta.vercel.app/tagmp3_Русская_душа_Испачканной_карандашом_.mp3",
"https://nextjs-boil-delta.vercel.app/tagmp3_Русская-душа-–-Одни-и-те-же-имена.mp3",
"https://nextjs-boil-delta.vercel.app/tagmp3_Русская-душа---Пройдусь-по-парку.mp3",
"https://nextjs-boil-delta.vercel.app/Слезы кончились.mp3",
"https://nextjs-boil-delta.vercel.app/Не прячь, мой друг слезу.mp3",
"https://nextjs-boil-delta.vercel.app/Там_на_обычном_и_завьюженном_холме.mp3",
"https://nextjs-boil-delta.vercel.app/Вечная память героям! (2).mp3",
"https://nextjs-boil-delta.vercel.app/cromulentarrangements461 – Вы слышите_.mp3",
"https://nextjs-boil-delta.vercel.app/Уже не стало ветеранов.mp3",
"https://nextjs-boil-delta.vercel.app/Мы часто о героях говорим (2).mp3",
"https://nextjs-boil-delta.vercel.app/Война дошла до Сталинграда (2).mp3",
"https://nextjs-boil-delta.vercel.app/На выжженной земле.mp3",
"https://nextjs-boil-delta.vercel.app/Девятый_десяток_для_вечности_миг_1.mp3",
"https://nextjs-boil-delta.vercel.app/Там, где маки лютуют.mp3",
"https://nextjs-boilerplate-lemon-pi-53.vercel.app/Русская душа - Великая держава.mp3",
"https://nextjs-boil-delta.vercel.app/Русская+душа+-+Уходят+на+войну++(1).mp3",
"https://nextjs-boil-delta.vercel.app/Русская душа - Александр Блок.mp3",
"https://nextjs-boil-delta.vercel.app/Русская душа - Ну что пришла.mp3",
"https://nextjs-boil-delta.vercel.app/Русская душа - Остановите земле .mp3",
"https://nextjs-boil-delta.vercel.app/Русская душа - Бродяга.mp3",
"https://nextjs-boil-delta.vercel.app/Русская душа - Ну что застыл.mp3",
"https://nextjs-boil-delta.vercel.app/Русская душа - Налетает грусть .mp3",
"https://nextjs-boil-delta.vercel.app/Русская душа - Мой мир таков, каким он мне открылся .mp3",
"https://nextjs-boil-delta.vercel.app/Русская душа - Плачу два счетчика.mp3",
"https://nextjs-boil-delta.vercel.app/Русская душа - Про СВО.mp3",
"https://nextjs-boil-delta.vercel.app/Русская душа - Пять лет назад.mp3",
"https://nextjs-boil-delta.vercel.app/Русская душа - Русский язык .mp3",
"https://nextjs-boil-delta.vercel.app/Русская душа - Скрипач .mp3",
"https://nextjs-boil-delta.vercel.app/Русская душа - Я же вам говорил .mp3",
"https://nextjs-boil-delta.vercel.app/Русская душа - Я уже не спешу .mp3",
"https://nextjs-boil-delta.vercel.app/Русская душа - Крещение Руси.mp3",
"https://nextjs-boil-delta.vercel.app/Июль зеленый.mp3",
"https://nextjs-boil-delta.vercel.app/Русская душа - Жизнь это опыт, но никак не бремя.mp3",
"https://nextjs-boil-delta.vercel.app/Русская душа - Лермонтов.mp3",
"https://nextjs-boil-delta.vercel.app/Русская душа - Когда уходит гений.mp3",
"https://nextjs-boil-delta.vercel.app/Русская душа - Море не ответит.mp3",
"https://nextjs-boil-delta.vercel.app/Русская душа - Наш русский флаг.mp3",
"https://nextjs-boil-delta.vercel.app/Русская душа - Под куполом неба.mp3",
"https://nextjs-boil-delta.vercel.app/Русская душа - Хочу я жить в глуши.mp3",
"https://nextjs-boil-delta.vercel.app/Русская душа - Эх, от тюрьмы и от сумы не зарекайся (1).mp3",
"https://nextjs-boil-delta.vercel.app/Русская душа - Я не ханжа.MP3"
];


async function cacheUrlsSequentially(cache, urls) {
  for (const url of urls) {
    try {
      await cache.add(url);
      console.log(`Успешно закэширован: ${url}`);
    } catch (error) {
      console.error(`Ошибка при кэшировании ${url}:`, error);
    }
  }
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Начинаю последовательное кэширование...');
      return cacheUrlsSequentially(cache, urlsToCache);
    }).then(() => self.skipWaiting())
  );
});



self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          console.log('Ресурс найден в кэше:', event.request.url);
          return response;  
        }
        return fetch(event.request);  
      })
  );
});


self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Удаление старого кэша:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
