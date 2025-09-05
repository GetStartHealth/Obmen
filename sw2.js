const CACHE_NAME = 'audio-cache-v1';
  const AUDIO_URLS = [
  "https://nextjs-boilerplate-i6pd.vercel.app/Пионеры%20(1).mp3",
  "https://nextjs-boilerplate-i6pd.vercel.app/День%20библиотек.mp3",
  "https://nextjs-boilerplate-i6pd.vercel.app/Русская%20душа%20-%20Пограничники.mp3",
  "https://nextjs-boilerplate-i6pd.vercel.app/1%20июня%20(1).mp3",
  "https://nextjs-boilerplate-i6pd.vercel.app/Мой%20язык%20(2).mp3",
  "https://nextjs-boilerplate-i6pd.vercel.app/Славься,%20Троица-Святая,%20(Remix).mp3",
  "https://nextjs-boilerplate-i6pd-git-main-ds-projects-d772f088.vercel.app/День%20Рoссии%20готов%20.mp3",
  "https://nextjs-boilerplate-i6pd-git-main-ds-projects-d772f088.vercel.app/Черная%20дата%20(1).mp3",
  "https://nextjs-boilerplate-i6pd.vercel.app/Волны%20бьются%20о%20борт%20крутой.mp3",
  "https://nextjs-boilerplate-i6pd.vercel.app/Русская%20душа%20-%20Гимн%20славян%20.mp3",
  "https://nextjs-boilerplate-i6pd.vercel.app/День%20молодёжи.mp3",
  "https://nextjs-boilerplate-i6pd.vercel.app/Поэты%202.0%20(3).mp3",
  "https://nextjs-boilerplate-i6pd.vercel.app/1%20апрелч%20.mp3",
  "https://nextjs-boilerplate-i6pd.vercel.app/витя3и.mp3",
  "https://nextjs-boilerplate-i6pd.vercel.app/Гагарин%20(1).mp3",
  "https://nextjs-boilerplate-i6pd.vercel.app/Наш%20мирный%20сон%20оберегают%20во́ины,.mp3",
  "https://nextjs-boilerplate-i6pd.vercel.app/служителям%20искусства.mp3",
  "https://nextjs-boilerplate-i6pd.vercel.app/Чистый%20четверг.mp3",
  "https://nextjs-boilerplate-i6pd.vercel.app/русский.mp3",
  "https://nextjs-boilerplate-i6pd.vercel.app/Русская%20душа%20-%20Радоница.MP3.mp3",
  "https://nextjs-boilerplate-i6pd.vercel.app/Не%20важно%20им,%20кто%20там%20попал%20в%20беду.mp3",
  "https://nextjs-boilerplate-i6pd.vercel.app/Русская%20душа%20-%20Без%20труда%20ты%20земли%20не%20вскопаешь%20.mp3",
  "https://nextjs-boilerplate-i6pd.vercel.app/На%20поле%20боя,%20в%20вихре%20огня%20(1).mp3",
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
  "https://nextjs-boilerplate-lemon-pi-53.vercel.app/5.%20Русская%20душа%20-%20В%20чем%20сила,%20брат.mp3",
  "https://nextjs-boilerplate-lemon-pi-53.vercel.app/tagmp3_6.-Русская-душа---Дерзкий-вечер.mp3",
  "https://nextjs-boilerplate-lemon-pi-53.vercel.app/tagmp3_7.-Русская-душа---Пушкин.mp3",
  "https://nextjs-boilerplate-lemon-pi-53.vercel.app/tagmp3_8_Русская-душа_Новости_смотрю_и_плачу.mp3",
  "https://nextjs-boilerplate-lemon-pi-53.vercel.app/tagmp3_9.-Русская-душа---Здесь-лапы-у-ели.mp3",
  "https://nextjs-boilerplate-i6pd.vercel.app/2.%20Русская%20душа%20-%20Очень.wav--online-audio-convert.com%20(1).mp3",
  "https://nextjs-boilerplate-i6pd.vercel.app/воронье.mp3",
  "https://nextjs-boilerplate-i6pd.vercel.app/тишина.mp3",
  "https://nextjs-boilerplate-i6pd.vercel.app/5.%20Русская%20душа%20-%20Туман.wav--online-audio-convert.com.mp3",
  "https://nextjs-boilerplate-i6pd.vercel.app/6.%20Русская%20душа%20-%20Дети%2020-го%20века.wav--online-audio-convert.com.mp3",
  "https://nextjs-boilerplate-i6pd.vercel.app/7.%20Русская%20душа%20-%20Застава.wav--online-audio-convert.com.mp3",
  "https://nextjs-boil-delta.vercel.app/гафт.mp3",
  "https://nextjs-boil-delta.vercel.app/Читаю-строки-ветхого-завета_.mp3",
  "https://nextjs-boil-delta.vercel.app/женщина%20до%20утра.mp3",
  "https://nextjs-boil-delta.vercel.app/4.%20Русская%20душа%20-%20Одесса%20(1).mp3",
  "https://nextjs-boil-delta.vercel.app/5_Русская_душа_Трепещет_сердце_от_безумства.mp3",
  "https://nextjs-boilerplate-i6pd.vercel.app/мой-город.mp3",
  "https://nextjs-boilerplate-i6pd.vercel.app/за-деньги.mp3",
  "https://nextjs-boilerplate-i6pd.vercel.app/Не-стыдно.mp3",
  "https://nextjs-boil-delta.vercel.app/tagmp3_Блокада-Ленинграда-(2).mp3",
  "https://nextjs-boil-delta.vercel.app/tagmp3_РД-Вагнера.mp3",
  "https://nextjs-boil-delta.vercel.app/tagmp3_стрелок.mp3",
  "https://nextjs-boil-delta.vercel.app/tagmp3_Русская-душа---мать.mp3",
  "https://nextjs-boil-delta.vercel.app/3_Русская_Душа_Как_заставить_молчать.mp3",
  "https://nextjs-boil-delta.vercel.app/tagmp3_Свеча-(2).mp3",
  "https://nextjs-boil-delta.vercel.app/Русская%20душа%20-%20Женщинам%20(1).MP3",
  "https://nextjs-boil-delta.vercel.app/Русская%20душа%20-%20Романс%20.mp3",
  "https://nextjs-boil-delta.vercel.app/Венчание%20(4).mp3",
  "https://nextjs-boil-delta.vercel.app/tagmp3_Случайно-встретились-глазами.mp3",
  "https://nextjs-boil-delta.vercel.app/tagmp3_Русская-душа-–-Одни-и-те-же-имена.mp3",
  "https://nextjs-boil-delta.vercel.app/tagmp3_Брат-версия.mp3",
  "https://nextjs-boil-delta.vercel.app/tagmp3_Русская-душа---Путник.mp3",
  "https://nextjs-boil-delta.vercel.app/tagmp3_Русская_душа_Недописанный_стих_.mp3",
  "https://nextjs-boil-delta.vercel.app/tagmp3_Русская_душа_Испачканной_карандашом_.mp3",
  "https://nextjs-boil-delta.vercel.app/tagmp3_Русская-душа-–-Одни-и-те-же-имена.mp3",
  "https://nextjs-boil-delta.vercel.app/tagmp3_Русская-душа---Пройдусь-по-парку.mp3",
  "https://nextjs-boil-delta.vercel.app/Слезы%20кончились.mp3",
  "https://nextjs-boil-delta.vercel.app/Не прячь, мой друг слезу.mp3",
  "https://nextjs-boil-delta.vercel.app/Там_на_обычном_и_завьюженном_холме.mp3",
  "https://nextjs-boil-delta.vercel.app/Вечная%20память%20героям!%20(2).mp3",
  "https://nextjs-boil-delta.vercel.app/cromulentarrangements461%20–%20Вы%20слышите_.mp3",
  "https://nextjs-boil-delta.vercel.app/Уже%20не%20стало%20ветеранов.mp3",
  "https://nextjs-boil-delta.vercel.app/Мы%20часто%20о%20героях%20говорим%20(2).mp3",
  "https://nextjs-boil-delta.vercel.app/Война%20дошла%20до%20Сталинграда%20(2).mp3",
  "https://nextjs-boil-delta.vercel.app/На%20выжженной%20земле.mp3",
  "https://nextjs-boil-delta.vercel.app/Девятый_десяток_для_вечности_миг_1.mp3",
  "https://nextjs-boil-delta.vercel.app/Там,%20где%20маки%20лютуют.mp3",
  "https://nextjs-boilerplate-lemon-pi-53.vercel.app/Русская%20душа%20-%20Великая%20держава.mp3",
  "https://nextjs-boil-delta.vercel.app/Русская+душа+-+Уходят+на+войну++%281%29.mp3",
  "https://nextjs-boil-delta.vercel.app/Русская душа - Александр Блок.mp3",
  "https://nextjs-boil-delta.vercel.app/Русская душа - Ну что пришла.mp3",
  "https://nextjs-boil-delta.vercel.app/Русская душа - Остановите земле .mp3",
  "https://nextjs-boil-delta.vercel.app/Русская душа - Бродяга.mp3",
  "https://nextjs-boil-delta.vercel.app/Русская душа - Ну что застыл.mp3",
  "https://nextjs-boil-delta.vercel.app/Русская%20душа%20-%20Налетает%20грусть%20.mp3",
  "https://nextjs-boil-delta.vercel.app/Русская душа - Мой мир таков, каким он мне открылся .mp3",
  "https://nextjs-boil-delta.vercel.app/Русская душа - Плачу два счетчика.mp3 ",
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
  "https://nextjs-boil-delta.vercel.app/Русская душа - Эх, лето красное,.mp3",
  "https://nextjs-boil-delta.vercel.app/Спряталось_солнце,_в_дымке_заката.mp3",
  "https://nextjs-boil-delta.vercel.app/Не забывайте Рок (1).mp3",
  "https://nextjs-boil-delta.vercel.app/Не забывайте.mp3",
  "https://nextjs-boil-delta.vercel.app/Русская душа - Во славу русского солдата.mp3",
  "https://nextjs-boil-delta.vercel.app/Русская душа - Передай привет сентябрю.mp3",
  "https://nextjs-boil-delta.vercel.app/Русская душа - С днем рождения!.mp3",
  "https://nextjs-boil-delta.vercel.app/Русская_душа_Тридцать_девять,_ещё_не_дата.mp3",
  "https://nextjs-boil-delta.vercel.app/Четвероногому другу.mp3",
  "https://nextjs-boil-delta.vercel.app/Русская душа - Читаю строки ветхого завета.mp3",
  "https://nextjs-boil-delta.vercel.app/Русская душа - Честь пацана.mp3",
  "https://nextjs-boil-delta.vercel.app/Русская душа - Пять лет учился я на инженера.mp3",
  "https://nextjs-boil-delta.vercel.app/Русская душа - Одесса.mp3",
  "https://nextjs-boil-delta.vercel.app/Русская душа - Новости смотрю и плачу (частушки).mp3",
  "https://nextjs-boil-delta.vercel.app/Русская душа - Врач от Бога.MP3",
  "https://nextjs-boil-delta.vercel.app/Над Курском взрывы.mp3",
  "https://nextjs-boil-delta.vercel.app/Русская душа - Приснился адвокату сон.mp3",
  "https://nextjs-boil-delta.vercel.app/Русская душа - Пришел домой.mp3",
  "https://nextjs-boil-delta.vercel.app/Русская душа - Строителям.mp3",
  "https://nextjs-boil-delta.vercel.app/Русская душа - Эх, от тюрьмы и от сумы не зарекайся (1).mp3",
  "https://nextjs-boil-delta.vercel.app/Русская душа - Я не ханжа.MP3",
];


const STATIC_ASSETS = [
  '/Obmen/index.html',
  '/Obmen/script.js',
  '/Obmen/izbran.html',
  '/Obmen/cash.html',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      for (const url of AUDIO_URLS) {
        try {
          await cache.add(url);
          console.log('Cached audio:', url);
        } catch (err) {
          console.error('Failed to cache audio:', url, err);
        }
      }
      for (const url of STATIC_ASSETS) {
        try {
          await cache.add(url);
          console.log('Cached static asset:', url);
        } catch (err) {
          console.error('Failed to cache static asset:', url, err);
        }
      }
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
      )
    )
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      return cachedResponse || fetch(event.request);
    })
  );
});



