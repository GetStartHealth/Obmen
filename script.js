   let shuffledFavorites = [];
let shuffledAlbums = [];
let shuffledAlbumTracks = {}
   
    const albomsT = [
      {
      titleDate: '09.12.2025',title: '1 ТГК МУЗ-ЧАТ',
      album: [
          { titleDate: '09.12.2011', title: 'Городской маршрут.', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/Русская%20душа%20-%20Городской%20маршрут.mp3' },
          { titleDate: '09.12.2012', title: 'Неважно', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/tagmp3_2.-Русская-душа---Неважно.mp3' },
          { titleDate: '09.12.2012', title: 'Здесь лапы у eли', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/tagmp3_3.-Русская-душа---Здесь-лапы-у-ели.mp3' },
          { titleDate: '09.12.2023', title: 'Булгаков', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/tagmp3_4.-Русская-душа---Булгаков.mp3' },
          { titleDate: '09.12.2012', title: 'В чем сила, брат', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/5.%20Русская%20душа%20-%20В%20чем%20сила,%20брат.mp3' },
          { titleDate: '09.12.2012', title: 'Дерзкий вечер', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/tagmp3_6.-Русская-душа---Дерзкий-вечер.mp3' },
          { titleDate: '09.12.2012', title: 'Пушкин', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/tagmp3_7.-Русская-душа---Пушкин.mp3' },
          { titleDate: '09.12.2024', title: 'Санкции', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/tagmp3_8_Русская-душа_Новости_смотрю_и_плачу.mp3' },
          { titleDate: '09.12.2012', title: 'Здесь лапы у ели', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/tagmp3_9.-Русская-душа---Здесь-лапы-у-ели.mp3' },
        ]
      },
      {
      titleDate: '09.12.2024', title: '2 ТГК МУЗ-ЧАТ',
      album: [
        { titleDate: '09.12.2024',title: 'Очень', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/2.%20Русская%20душа%20-%20Очень.wav--online-audio-convert.com%20(1).mp3' },
        { titleDate: '09.12.2024',title: 'Воронье', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/воронье.mp3' },
        { titleDate: '09.12.2024',title: 'Тишина', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/тишина.mp3' },
        { titleDate: '09.12.2024',title: 'Туман', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/5.%20Русская%20душа%20-%20Туман.wav--online-audio-convert.com.mp3' },
        { titleDate: '09.12.2024',title: 'Дети 20-го века', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/6.%20Русская%20душа%20-%20Дети%2020-го%20века.wav--online-audio-convert.com.mp3' },
        { titleDate: '09.12.2024',title: 'Застава', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/7.%20Русская%20душа%20-%20Застава.wav--online-audio-convert.com.mp3' },
        { titleDate: '09.12.2024',title: 'Великая держава', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/Русская душа - Великая держава.mp3' },
      ]
      },
      {
      titleDate: '09.12.2012',title: '3 ТГК МУЗ-ЧАТ',
      album: [
        { titleDate: '09.12.2024',title: 'Гафт', url: 'https://nextjs-boil-delta.vercel.app/гафт.mp3' },
        { titleDate: '09.12.2024',title: 'Читаю строки ветхого завета', url: 'https://nextjs-boil-delta.vercel.app/Читаю-строки-ветхого-завета_.mp3' },
        { titleDate: '09.12.2024',title: 'Женщина до утра', url: 'https://nextjs-boil-delta.vercel.app/женщина%20до%20утра.mp3' },
        { titleDate: '09.12.2024',title: 'Одесса', url: 'https://nextjs-boil-delta.vercel.app/4.%20Русская%20душа%20-%20Одесса%20(1).mp3' },
        { titleDate: '09.12.2024',title: 'Трепещет сердце от безумства', url: 'https://nextjs-boil-delta.vercel.app/5_Русская_душа_Трепещет_сердце_от_безумства.mp3' },
        { titleDate: '09.12.2024',title: 'Мой город', url: 'https://nextjs-boil-delta.vercel.app/мой-город.mp3' },
        { titleDate: '09.12.2024',title: 'За деньги', url: 'https://nextjs-boil-delta.vercel.app/за-деньги.mp3' },
        { titleDate: '09.12.2024',title: 'Не стыдно', url: 'https://nextjs-boil-delta.vercel.app/Не-стыдно.mp3' },
      ]
      },
      {
      titleDate: '09.12.2014',title: 'ГЕРОИ В МУЗЫКЕ',
      album: [
        { titleDate: '09.12.2024',title: 'Блокада Ленинграда', url: 'https://nextjs-boil-delta.vercel.app/tagmp3_Блокада-Ленинграда-(2).mp3' },
        { titleDate: '09.12.2024',title: 'Вагнера', url: 'https://nextjs-boil-delta.vercel.app/tagmp3_РД-Вагнера.mp3' },
        { titleDate: '09.12.2024',title: 'Стрелок', url: 'https://nextjs-boil-delta.vercel.app/tagmp3_стрелок.mp3' },
        { titleDate: '09.12.2024',title: 'Ну, здравствуй, мама!', url: 'https://nextjs-boil-delta.vercel.app/Ну,%20здравствуй,%20мама!.mp3' },
        { titleDate: '09.12.2024',title: 'Мать', url: 'https://nextjs-boil-delta.vercel.app/tagmp3_Русская-душа---мать.mp3' },
        { titleDate: '09.12.2024',title: 'Там, где маки лютуют', url: 'https://nextjs-boil-delta.vercel.app/Там, где маки лютуют.mp3' },
        { titleDate: '09.12.2024',title: 'Как заставить молчать', url: 'https://nextjs-boil-delta.vercel.app/3_Русская_Душа_Как_заставить_молчать.mp3' },
        { titleDate: '09.12.2024',title: 'Горит свеча', url: 'https://nextjs-boil-delta.vercel.app/tagmp3_Свеча-(2).mp3' },
      ]

      },
      {
        titleDate: '09.12.2004',title: 'ЛИРИКА ДУШИ',
        album: [
          { titleDate: '09.12.2024',title: 'Романс', url: 'https://nextjs-boil-delta.vercel.app/Русская%20душа%20-%20Романс%20.mp3' },
          { titleDate: '09.12.2024',title: 'Венчание', url: 'https://nextjs-boil-delta.vercel.app/Венчание%20(4).mp3' },
          { titleDate: '09.12.2024',title: 'Случайно встретились глазами', url: 'https://nextjs-boil-delta.vercel.app/tagmp3_Случайно-встретились-глазами.mp3' },
          { titleDate: '09.12.2024',title: 'Люди бывают разными', url: 'https://nextjs-boil-delta.vercel.app/tagmp3_Русская-душа-–-Одни-и-те-же-имена.mp3' },
          { titleDate: '09.12.2024',title: 'Брат', url: 'https://nextjs-boil-delta.vercel.app/tagmp3_Брат-версия.mp3' },
          { titleDate: '09.12.2024',title: 'Недописанный стих', url: 'https://nextjs-boil-delta.vercel.app/tagmp3_Русская_душа_Недописанный_стих_.mp3' },
          { titleDate: '09.12.2024',title: 'Испачканной карандашом', url: 'https://nextjs-boil-delta.vercel.app/tagmp3_Русская_душа_Испачканной_карандашом_.mp3' },
          { titleDate: '09.12.2024',title: 'Одни и те же имена', url: 'https://nextjs-boil-delta.vercel.app/tagmp3_Русская-душа-–-Одни-и-те-же-имена.mp3' },
          { titleDate: '09.12.2024',title: 'Пройдусь по парку', url: 'https://nextjs-boil-delta.vercel.app/tagmp3_Русская-душа---Пройдусь-по-парку.mp3' },
        ]
      },
      {
      titleDate: '09.12.2024',title: 'ПОБЕДНЫЙ МАЙ',
      album: [
        { titleDate: '09.12.2024',title: 'Слезы кончились', url: 'https://nextjs-boil-delta.vercel.app/Слезы%20кончились.mp3' },
        { titleDate: '09.12.2024',title: 'Не прячь, слезу мой друг', url: 'https://nextjs-boil-delta.vercel.app/Не прячь, мой друг слезу.mp3' },
        { titleDate: '09.12.2024',title: 'Там на обычном и завьюженном холме', url: 'https://nextjs-boil-delta.vercel.app/Там_на_обычном_и_завьюженном_холме.mp3' },
        { titleDate: '09.12.2024',title: 'Вечная память героям', url: 'https://nextjs-boil-delta.vercel.app/Вечная%20память%20героям!%20(2).mp3' },
        { titleDate: '09.12.2024',title: 'Вы слышите?', url: 'https://nextjs-boil-delta.vercel.app/cromulentarrangements461%20–%20Вы%20слышите_.mp3' },
        { titleDate: '09.12.2024',title: 'Уже не стало ветеранов', url: 'https://nextjs-boil-delta.vercel.app/Уже%20не%20стало%20ветеранов.mp3' },
        { titleDate: '09.12.2024',title: 'Мы часто о героях говорим', url: 'https://nextjs-boil-delta.vercel.app/Мы%20часто%20о%20героях%20говорим%20(2).mp3' },
        { titleDate: '09.12.2024',title: 'Война дошла до Сталинграда', url: 'https://nextjs-boil-delta.vercel.app/Война%20дошла%20до%20Сталинграда%20(2).mp3' },
        { titleDate: '09.12.2024',title: 'На выжженой земле', url: 'https://nextjs-boil-delta.vercel.app/На выжженной земле.mp3' },
        { titleDate: '09.12.2024',title: 'Девятый десяток', url: 'https://nextjs-boil-delta.vercel.app/Девятый_десяток_для_вечности_миг_1.mp3' },        
      ]
      },
      {
      titleDate: '09.12.2024',title: 'ШАНСОНЬЕ',
      album: [
        { titleDate: '09.01.2024', title: 'Путник', url: 'https://nextjs-boil-delta.vercel.app/tagmp3_Русская-душа---Путник.mp3' },
          { titleDate: '09.01.2024', titleNumber: '105', title: 'Ну что пришла', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Ну что пришла.mp3' },
        { titleDate: '09.01.2024', titleNumber: '106', title: 'Остановите земле', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Остановите земле .mp3' },
        { titleDate: '09.01.2024', titleNumber: '107', title: 'Бродяге', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Бродяга.mp3' },
    { titleDate: '09.01.2024', titleNumber: '108', title: 'Ну что застыл', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Ну что застыл.mp3' },
    { titleDate: '09.01.2024', titleNumber: '109', title: 'Налетает грусть', url: 'https://nextjs-boil-delta.vercel.app/' },
    { titleDate: '09.01.2024', titleNumber: '110', title: 'Мой мир таков, каким он мне открылся', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Мой мир таков, каким он мне открылся .mp3' },
    { titleDate: '09.01.2024', titleNumber: '111', title: 'Плачу два счетчика', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Плачу два счетчика.mp3 '},
    { titleDate: '09.01.2024', titleNumber: '112', title: 'Про СВО', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Про СВО.mp3' },
    { titleDate: '09.01.2024', titleNumber: '113', title: 'Пять лет назад', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Пять лет назад.mp3' },
    { titleDate: '09.01.2024', titleNumber: '114', title: 'Русский язызк', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Русский язык .mp3' },
    { titleDate: '09.01.2024', titleNumber: '115', title: 'Скрипач', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Скрипач .mp3' },
    { titleDate: '09.01.2024', titleNumber: '116', title: 'Я же вам говорил', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Я же вам говорил .mp3' },
    { titleDate: '09.01.2024', titleNumber: '117', title: 'Я уже не спешу', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Я уже не спешу .mp3'},
      ]
      },
      {
     titleDate: '09.12.2024', title: 'МОЯ РОССИЯ',
      album: [
        { titleDate: '09.01.2024', title: 'Над Курском взрывы', url: 'https://nextjs-boil-delta.vercel.app/Над Курском взрывы.mp3' },
        ]
      }, 
      {
     titleDate: '08.2014.2009',title: 'ПЛЯШЕМ ПО-НАШЕМУ',
      album: [
        { titleDate: '09.01.2024', titleNumber: '137', title: 'Читаю строки ветхого завета', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Читаю строки ветхого завета.mp3'},
        { titleDate: '09.01.2024', titleNumber: '138', title: 'Чеcть пацана', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Честь пацана.mp3'},
        { titleDate: '09.01.2024', titleNumber: '139', title: 'Пять лет я учился на инженера', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Пять лет учился я на инженера.mp3'},
        { titleDate: '09.01.2024', titleNumber: '140', title: 'Одесса', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Одесса.mp3'},
        { titleDate: '09.01.2024', titleNumber: '141', title: 'Новости смотрю и плачу Частушки', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Новости смотрю и плачу (частушки).mp3'},
        { titleDate: '09.01.2024', titleNumber: '142', title: 'Врач от Бога', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Врач от Бога.MP3'},
        { titleDate: '09.01.2024', titleNumber: '144', title: 'Приснился адвокату сон', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Приснился адвокату сон.mp3'},
        { titleDate: '09.01.2024', titleNumber: '145', title: 'Пришел домой', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Пришел домой.mp3'},
        { titleDate: '09.01.2024', titleNumber: '148', title: 'Я не ханжа', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Я не ханжа.MP3'},

        ]
      }
      ];















      const albomsBaze = [
      {
      titleDate: '09.12.2025',title: '1 ТГК МУЗ-ЧАТ',
      album: [
          { titleDate: '09.12.2012', title: 'Городской маршрут', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/Русская%20душа%20-%20Городской%20маршрут.mp3' },
          { titleDate: '09.12.2012', title: 'Неважно', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/tagmp3_2.-Русская-душа---Неважно.mp3' },
          { titleDate: '09.12.2012', title: 'Здесь лaпы у eли', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/tagmp3_3.-Русская-душа---Здесь-лапы-у-ели.mp3' },
          { titleDate: '09.12.2023', title: 'Булгаков', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/tagmp3_4.-Русская-душа---Булгаков.mp3' },
          { titleDate: '09.12.2012', title: 'В чем сила, брат', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/5.%20Русская%20душа%20-%20В%20чем%20сила,%20брат.mp3' },
          { titleDate: '09.12.2012', title: 'Дерзкий вечер', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/tagmp3_6.-Русская-душа---Дерзкий-вечер.mp3' },
          { titleDate: '09.12.2012', title: 'Пушкин', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/tagmp3_7.-Русская-душа---Пушкин.mp3' },
          { titleDate: '09.12.2024', title: 'Санкции', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/tagmp3_8_Русская-душа_Новости_смотрю_и_плачу.mp3' },
          { titleDate: '09.12.2012', title: 'Здесь лaпы у ели', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/tagmp3_9.-Русская-душа---Здесь-лапы-у-ели.mp3' },
        ]
      },
      {
      titleDate: '09.12.2024', title: '2 ТГК МУЗ-ЧАТ',
      album: [
        { titleDate: '09.12.2024',title: 'Очень', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/2.%20Русская%20душа%20-%20Очень.wav--online-audio-convert.com%20(1).mp3' },
        { titleDate: '09.12.2024',title: 'Воронье', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/воронье.mp3' },
        { titleDate: '09.12.2024',title: 'Тишина', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/тишина.mp3' },
        { titleDate: '09.12.2024',title: 'Туман', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/5.%20Русская%20душа%20-%20Туман.wav--online-audio-convert.com.mp3' },
        { titleDate: '09.12.2024',title: 'Дети 20-го века', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/6.%20Русская%20душа%20-%20Дети%2020-го%20века.wav--online-audio-convert.com.mp3' },
        { titleDate: '09.12.2024',title: 'Застава', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/7.%20Русская%20душа%20-%20Застава.wav--online-audio-convert.com.mp3' },
        { titleDate: '09.12.2024',title: 'Великая держава', url: 'https://nextjs-boilerplate-lemon-pi-53.vercel.app/Русская душа - Великая держава.mp3' },
      ]
      },
      {
      titleDate: '09.12.2012',title: '3 ТГК МУЗ-ЧАТ',
      album: [
        { titleDate: '09.12.2024',title: 'Гафт', url: 'https://nextjs-boil-delta.vercel.app/гафт.mp3' },
        { titleDate: '09.12.2024',title: 'Читаю строки ветхого завета', url: 'https://nextjs-boil-delta.vercel.app/Читаю-строки-ветхого-завета_.mp3' },
        { titleDate: '09.12.2024',title: 'Женщина до утра', url: 'https://nextjs-boil-delta.vercel.app/женщина%20до%20утра.mp3' },
        { titleDate: '09.12.2024',title: 'Одесса', url: 'https://nextjs-boil-delta.vercel.app/4.%20Русская%20душа%20-%20Одесса%20(1).mp3' },
        { titleDate: '09.12.2024',title: 'Трепещет сердце от безумства', url: 'https://nextjs-boil-delta.vercel.app/5_Русская_душа_Трепещет_сердце_от_безумства.mp3' },
        { titleDate: '09.12.2024',title: 'Мой город', url: 'https://nextjs-boil-delta.vercel.app/мой-город.mp3' },
        { titleDate: '09.12.2024',title: 'За деньги', url: 'https://nextjs-boil-delta.vercel.app/за-деньги.mp3' },
        { titleDate: '09.12.2024',title: 'Не стыдно', url: 'https://nextjs-boil-delta.vercel.app/Не-стыдно.mp3' },
      ]
      },
      {
      titleDate: '09.12.2014',title: 'ГЕРОИ В МУЗЫКЕ',
      album: [
        { titleDate: '09.12.2024',title: 'Блокада Ленинграда', url: 'https://nextjs-boil-delta.vercel.app/tagmp3_Блокада-Ленинграда-(2).mp3' },
        { titleDate: '09.12.2024',title: 'Вагнера', url: 'https://nextjs-boil-delta.vercel.app/tagmp3_РД-Вагнера.mp3' },
        { titleDate: '09.12.2024',title: 'Стрелок', url: 'https://nextjs-boil-delta.vercel.app/tagmp3_стрелок.mp3' },
        { titleDate: '09.12.2024',title: 'Ну, здравствуй, мама!', url: 'https://nextjs-boil-delta.vercel.app/Ну,%20здравствуй,%20мама!.mp3' },
        { titleDate: '09.12.2024',title: 'Мать', url: 'https://nextjs-boil-delta.vercel.app/tagmp3_Русская-душа---мать.mp3' },
        { titleDate: '09.12.2024',title: 'Там, где маки лютуют', url: 'https://nextjs-boil-delta.vercel.app/Там, где маки лютуют.mp3' },
        { titleDate: '09.12.2024',title: 'Как заставить молчать', url: 'https://nextjs-boil-delta.vercel.app/3_Русская_Душа_Как_заставить_молчать.mp3' },
        { titleDate: '09.12.2024',title: 'Горит свеча', url: 'https://nextjs-boil-delta.vercel.app/tagmp3_Свеча-(2).mp3' },
      ]

      },
      {
        titleDate: '09.12.2004',title: 'ЛИРИКА ДУШИ',
        album: [
          { titleDate: '09.12.2024',title: 'Романс', url: 'https://nextjs-boil-delta.vercel.app/Русская%20душа%20-%20Романс%20.mp3' },
          { titleDate: '09.12.2024',title: 'Венчание', url: 'https://nextjs-boil-delta.vercel.app/Венчание%20(4).mp3' },
          { titleDate: '09.12.2024',title: 'Случайно встретились глазами', url: 'https://nextjs-boil-delta.vercel.app/tagmp3_Случайно-встретились-глазами.mp3' },
          { titleDate: '09.12.2024',title: 'Люди бывают разными', url: 'https://nextjs-boil-delta.vercel.app/tagmp3_Русская-душа-–-Одни-и-те-же-имена.mp3' },
          { titleDate: '09.12.2024',title: 'Брат', url: 'https://nextjs-boil-delta.vercel.app/tagmp3_Брат-версия.mp3' },
          { titleDate: '09.12.2024',title: 'Недописанный стих', url: 'https://nextjs-boil-delta.vercel.app/tagmp3_Русская_душа_Недописанный_стих_.mp3' },
          { titleDate: '09.12.2024',title: 'Испачканной карандашом', url: 'https://nextjs-boil-delta.vercel.app/tagmp3_Русская_душа_Испачканной_карандашом_.mp3' },
          { titleDate: '09.12.2024',title: 'Одни и те же имена', url: 'https://nextjs-boil-delta.vercel.app/tagmp3_Русская-душа-–-Одни-и-те-же-имена.mp3' },
          { titleDate: '09.12.2024',title: 'Пройдусь по парку', url: 'https://nextjs-boil-delta.vercel.app/tagmp3_Русская-душа---Пройдусь-по-парку.mp3' },
        ]
      },
      {
      titleDate: '09.12.2024',title: 'ПОБЕДНЫЙ МАЙ',
      album: [
        { titleDate: '09.12.2024',title: 'Слезы кончились', url: 'https://nextjs-boil-delta.vercel.app/Слезы%20кончились.mp3' },
        { titleDate: '09.12.2024',title: 'Не прячь, слезу мой друг', url: 'https://nextjs-boil-delta.vercel.app/Не прячь, мой друг слезу.mp3' },
        { titleDate: '09.12.2024',title: 'Там на обычном и завьюженном холме', url: 'https://nextjs-boil-delta.vercel.app/Там_на_обычном_и_завьюженном_холме.mp3' },
        { titleDate: '09.12.2024',title: 'Вечная память героям', url: 'https://nextjs-boil-delta.vercel.app/Вечная%20память%20героям!%20(2).mp3' },
        { titleDate: '09.12.2024',title: 'Вы слышите?', url: 'https://nextjs-boil-delta.vercel.app/cromulentarrangements461%20–%20Вы%20слышите_.mp3' },
        { titleDate: '09.12.2024',title: 'Уже не стало ветеранов', url: 'https://nextjs-boil-delta.vercel.app/Уже%20не%20стало%20ветеранов.mp3' },
        { titleDate: '09.12.2024',title: 'Мы часто о героях говорим', url: 'https://nextjs-boil-delta.vercel.app/Мы%20часто%20о%20героях%20говорим%20(2).mp3' },
        { titleDate: '09.12.2024',title: 'Война дошла до Сталинграда', url: 'https://nextjs-boil-delta.vercel.app/Война%20дошла%20до%20Сталинграда%20(2).mp3' },
        { titleDate: '09.12.2024',title: 'На выжженой земле', url: 'https://nextjs-boil-delta.vercel.app/На выжженной земле.mp3' },
        { titleDate: '09.12.2024',title: 'Девятый десяток', url: 'https://nextjs-boil-delta.vercel.app/Девятый_десяток_для_вечности_миг_1.mp3' },        
      ]
      },
      {
      titleDate: '09.12.2024',title: 'ШАНСОНЬЕ',
      album: [
        { titleDate: '09.01.2024', title: 'Путник', url: 'https://nextjs-boil-delta.vercel.app/tagmp3_Русская-душа---Путник.mp3' },
              { titleDate: '09.01.2024', titleNumber: '105', title: 'Ну что пришла', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Ну что пришла.mp3' },
        { titleDate: '09.01.2024', titleNumber: '106', title: 'Остановите земле', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Остановите земле .mp3' },
        { titleDate: '09.01.2024', titleNumber: '107', title: 'Бродяге', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Бродяга.mp3' },
    { titleDate: '09.01.2024', titleNumber: '108', title: 'Ну что застыл', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Ну что застыл.mp3' },
    { titleDate: '09.01.2024', titleNumber: '109', title: 'Налетает грусть', url: 'https://nextjs-boil-delta.vercel.app/Русская%20душа%20-%20Налетает%20грусть%20.mp3' },
    { titleDate: '09.01.2024', titleNumber: '110', title: 'Мой мир таков, каким он мне открылся', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Мой мир таков, каким он мне открылся .mp3' },
    { titleDate: '09.01.2024', titleNumber: '111', title: 'Плачу два счетчика', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Плачу два счетчика.mp3 '},
    { titleDate: '09.01.2024', titleNumber: '112', title: 'Про СВО', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Про СВО.mp3' },
    { titleDate: '09.01.2024', titleNumber: '113', title: 'Пять лет назад', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Пять лет назад.mp3' },
    { titleDate: '09.01.2024', titleNumber: '114', title: 'Русский язызк', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Русский язык .mp3' },
    { titleDate: '09.01.2024', titleNumber: '115', title: 'Скрипач', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Скрипач .mp3' },
    { titleDate: '09.01.2024', titleNumber: '116', title: 'Я же вам говорил', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Я же вам говорил .mp3' },
    { titleDate: '09.01.2024', titleNumber: '117', title: 'Я уже не спешу', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Я уже не спешу .mp3'},
      ]
      },
         {
     titleDate: '08.20.2009',title: 'ПЛЯШЕМ ПО-НАШЕМУ',
      album: [
        { titleDate: '09.01.2024', titleNumber: '137', title: 'Читаю строки ветхого завета', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Читаю строки ветхого завета.mp3'},
        { titleDate: '09.01.2024', titleNumber: '138', title: 'Чеcть пацана', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Честь пацана.mp3'},
        { titleDate: '09.01.2024', titleNumber: '139', title: 'Пять лет я учился на инженера', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Пять лет учился я на инженера.mp3'},
        { titleDate: '09.01.2024', titleNumber: '140', title: 'Одесса', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Одесса.mp3'},
        { titleDate: '09.01.2024', titleNumber: '141', title: 'Новости смотрю и плачу Частушки', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Новости смотрю и плачу (частушки).mp3'},
        { titleDate: '09.01.2024', titleNumber: '142', title: 'Врач от Бога', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Врач от Бога.MP3'},
        { titleDate: '09.01.2024', titleNumber: '144', title: 'Приснился адвокату сон', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Приснился адвокату сон.mp3'},
        { titleDate: '09.01.2024', titleNumber: '145', title: 'Пришел домой', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Пришел домой.mp3'},
        { titleDate: '09.01.2024', titleNumber: '148', title: 'Я не ханжа', url: 'https://nextjs-boil-delta.vercel.app/Русская душа - Я не ханжа.MP3'},

        ]
      }
      ];

let tracks = [
  {
    date: "09.09.2014",
    titleNumber: 1,
    title: "Богеме Ивлеевой",
    url: "https://nextjs-boilerplate-i6pd.vercel.app/Русская душа - Богеме Ивлеевой (5).mp3"
  },
  {
    date: "09.02.2025",
    titleNumber: 2,
    title: "Я музыкант, я делаю рок",
    url: "https://nextjs-boilerplate-i6pd.vercel.app/Русская_душа_Я_музыкант,_я_делаю_рок,.mp3"
  },
  {
    date: "09.04.2024",
    titleNumber: 3,
    title: "В голове с утра забота",
    url: "https://nextjs-boilerplate-i6pd.vercel.app/В_голове_с_утра_забота__едит_повар_на_ра-_1_-_1_.mp3"
  },
  {
    date: "09.11.2004",
    titleNumber: 4,
    title: "Есенин",
    url: "https://nextjs-boilerplate-i6pd.vercel.app/Кем_был_Есенин__мечтатель_иль_повеса__1.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 5,
    title: "Крестов молчания",
    url: "https://nextjs-boilerplate-i6pd.vercel.app/tagmp3_Русская-душа---Крестов-молчания (1).mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 6,
    title: "Богата русская природа",
    url: "https://nextjs-boilerplate-i6pd.vercel.app/Русская душа - Богата Русская природа.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 7,
    title: "Жизнь прекрасна",
    url: "https://nextjs-boilerplate-i6pd.vercel.app/Жизнь_прекрасна,_словно_светлый_день,_1.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 8,
    title: "Кружит снег",
    url: "https://nextjs-boilerplate-i6pd.vercel.app/Кружит снег.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 9,
    title: "Если б не пришла зима",
    url: "https://nextjs-boilerplate-i6pd.vercel.app/Если б не пришла зима.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 10,
    title: "На дворе снежинки кружат",
    url: "https://nextjs-boilerplate-i6pd.vercel.app/На дворе снежинки кружат.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 11,
    title: "Новый год",
    url: "https://nextjs-boilerplate-i6pd.vercel.app/Русская душа Новый год.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 12,
    title: "Рождество",
    url: "https://nextjs-boilerplate-i6pd.vercel.app/рождeство (1).mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 13,
    title: "Дальнобой",
    url: "https://nextjs-boilerplate-i6pd-git-main-ds-projects-d772f088.vercel.app/DALNOBOY_03-_1_-_1_.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 14,
    title: "Старый Новый Год",
    url: "https://nextjs-boilerplate-i6pd.vercel.app/Русская душа Старый новый год.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 15,
    title: "Крещение",
    url: "https://nextjs-boilerplate-i6pd.vercel.app/Русская душа - Крещение.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 16,
    title: "Выпускной",
    url: "https://nextjs-boilerplate-i6pd.vercel.app/Бау-Выпускной.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 17,
    title: "Высоцкий",
    url: "https://nextjs-boilerplate-i6pd.vercel.app/Русская душа - Высоцкий.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 18,
    title: "Венеры",
    url: "https://nextjs-boilerplate-i6pd.vercel.app/венеры.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 19,
    title: "Женщинам",
    url: "https://nextjs-boilerplate-i6pd.vercel.app/Русская душа - Женщинам.MP3"
  },
  {
    date: "09.01.2024",
    titleNumber: 20,
    title: "Слова",
    url: "https://nextjs-boilerplate-i6pd.vercel.app/Русская душа - Слова.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 21,
    title: "1941-1945",
    url: "https://nextjs-boilerplate-i6pd.vercel.app/1941-1945 гг..MP3"
  },
  {
    date: "09.01.2024",
    titleNumber: 22,
    title: "Семья",
    url: "https://nextjs-boilerplate-i6pd.vercel.app/Семья.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 23,
    title: "Пионеры",
    url: "https://nextjs-boilerplate-i6pd.vercel.app/Пионеры (1).mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 24,
    title: "День библиотек",
    url: "https://nextjs-boilerplate-i6pd.vercel.app/День библиотек.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 25,
    title: "Пограничники",
    url: "https://nextjs-boilerplate-i6pd.vercel.app/Русская душа - Пограничники.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 26,
    title: "Первое июня",
    url: "https://nextjs-boilerplate-i6pd.vercel.app/1 июня (1).mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 27,
    title: "Русский язык",
    url: "https://nextjs-boilerplate-i6pd.vercel.app/Мой язык (2).mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 28,
    title: "Троица",
    url: "https://nextjs-boilerplate-i6pd.vercel.app/Славься, Троица-Святая, (Remix).mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 29,
    title: "День России",
    url: "https://nextjs-boilerplate-i6pd-git-main-ds-projects-d772f088.vercel.app/День Рoссии готов .mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 30,
    title: "Чёрная дата",
    url: "https://nextjs-boilerplate-i6pd-git-main-ds-projects-d772f088.vercel.app/Черная дата (1).mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 31,
    title: "Волны бьются о борт крутой",
    url: "https://nextjs-boilerplate-i6pd.vercel.app/Волны бьются о борт крутой.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 32,
    title: "Гимн славян",
    url: "https://nextjs-boilerplate-i6pd.vercel.app/Русская душа - Гимн славян .mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 33,
    title: "День молодежи",
    url: "https://nextjs-boilerplate-i6pd.vercel.app/День молодёжи.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 34,
    title: "Поэты",
    url: "https://nextjs-boilerplate-i6pd.vercel.app/Поэты 2.0 (3).mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 35,
    title: "Первое апреля",
    url: "https://nextjs-boilerplate-i6pd.vercel.app/1 апрелч .mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 36,
    title: "Витязи",
    url: "https://nextjs-boilerplate-i6pd.vercel.app/витя3и.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 37,
    title: "Юрий Гагарин",
    url: "https://nextjs-boilerplate-i6pd.vercel.app/Гагарин (1).mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 38,
    title: "ПВО",
    url: "https://nextjs-boilerplate-i6pd.vercel.app/Наш мирный сон оберегают во́ины,.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 39,
    title: "Служителям искусства",
    url: "https://nextjs-boilerplate-i6pd.vercel.app/служителям искусства.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 40,
    title: "Чистый четверг",
    url: "https://nextjs-boilerplate-i6pd.vercel.app/Чистый четверг.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 41,
    title: "Русская земля",
    url: "https://nextjs-boilerplate-i6pd.vercel.app/русский.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 42,
    title: "Радоница",
    url: "https://nextjs-boilerplate-i6pd.vercel.app/Русская душа - Радоница.MP3.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 43,
    title: "Пожарным",
    url: "https://nextjs-boilerplate-i6pd.vercel.app/Не важно им, кто там попал в беду.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 44,
    title: "Первое мая",
    url: "https://nextjs-boilerplate-i6pd.vercel.app/Русская душа - Без труда ты земли не вскопаешь .mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 45,
    title: "Красный крест",
    url: "https://nextjs-boilerplate-i6pd.vercel.app/На поле боя, в вихре огня (1).mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 46,
    title: "Ивана Купала",
    url: "https://nextjs-boilerplate-i6pd.vercel.app/Русская душа - Ивана Купала (1).mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 47,
    title: "Ну, здравствуй, мама",
    url: "https://nextjs-boilerplate-i6pd.vercel.app/Ну, здравствуй, мама!.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 48,
    title: "Романс",
    url: "https://nextjs-boilerplate-i6pd.vercel.app/Русская душа - Романс .mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 49,
    title: "Не оставляй меня весной",
    url: "https://nextjs-boilerplate-i6pd.vercel.app/Русская душа - Не оставляй меня весной .mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 50,
    title: "Встало солнце на рассвете",
    url: "https://nextjs-boilerplate-i6pd.vercel.app/Русская душа - Встало солнце на рассвете.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 51,
    title: "Пасха",
    url: "https://nextjs-boilerplate-i6pd.vercel.app/Русская душа - Пасха.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 52,
    title: "Городской маршрут",
    url: "https://nextjs-boilerplate-i6pd.vercel.app/Русская душа - Городской маршрут.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 53,
    title: "Неважно",
    url: "https://nextjs-boilerplate-lemon-pi-53.vercel.app/tagmp3_2.-Русская-душа---Неважно.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 54,
    title: "Здесь лапы у ели",
    url: "https://nextjs-boilerplate-lemon-pi-53.vercel.app/tagmp3_3.-Русская-душа---Здесь-лапы-у-ели.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 55,
    title: "Булгаков",
    url: "https://nextjs-boilerplate-lemon-pi-53.vercel.app/tagmp3_4.-Русская-душа---Булгаков.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 56,
    title: "В чем сила, брат",
    url: "https://nextjs-boilerplate-lemon-pi-53.vercel.app/5. Русская душа - В чем сила, брат.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 57,
    title: "Дерзкий вечер",
    url: "https://nextjs-boilerplate-lemon-pi-53.vercel.app/tagmp3_6.-Русская-душа---Дерзкий-вечер.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 58,
    title: "Пушкин",
    url: "https://nextjs-boilerplate-lemon-pi-53.vercel.app/tagmp3_7.-Русская-душа---Пушкин.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 59,
    title: "Санкции",
    url: "https://nextjs-boilerplate-lemon-pi-53.vercel.app/tagmp3_8_Русская-душа_Новости_смотрю_и_плачу.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 60,
    title: "Здeсь лапы у ели",
    url: "https://nextjs-boilerplate-lemon-pi-53.vercel.app/tagmp3_9.-Русская-душа---Здесь-лапы-у-ели.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 61,
    title: "Очень",
    url: "https://nextjs-boilerplate-i6pd.vercel.app/2. Русская душа - Очень.wav--online-audio-convert.com (1).mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 62,
    title: "Воронье",
    url: "https://nextjs-boilerplate-i6pd.vercel.app/воронье.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 63,
    title: "Тишина",
    url: "https://nextjs-boilerplate-i6pd.vercel.app/тишина.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 64,
    title: "Туман",
    url: "https://nextjs-boilerplate-i6pd.vercel.app/5. Русская душа - Туман.wav--online-audio-convert.com.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 65,
    title: "Дети 20-го века",
    url: "https://nextjs-boilerplate-i6pd.vercel.app/6. Русская душа - Дети 20-го века.wav--online-audio-convert.com.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 66,
    title: "Застава",
    url: "https://nextjs-boilerplate-i6pd.vercel.app/7. Русская душа - Застава.wav--online-audio-convert.com.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 67,
    title: "Гафт",
    url: "https://nextjs-boil-delta.vercel.app/гафт.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 68,
    title: "Читаю строки ветхого завета",
    url: "https://nextjs-boil-delta.vercel.app/Читаю-строки-ветхого-завета_.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 69,
    title: "Женщина до утра",
    url: "https://nextjs-boil-delta.vercel.app/женщина до утра.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 70,
    title: "Одесса",
    url: "https://nextjs-boil-delta.vercel.app/4. Русская душа - Одесса (1).mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 71,
    title: "Трепещет сердце от безумства",
    url: "https://nextjs-boil-delta.vercel.app/5_Русская_душа_Трепещет_сердце_от_безумства.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 72,
    title: "Мой город",
    url: "https://nextjs-boilerplate-i6pd.vercel.app/мой-город.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 73,
    title: "За деньги",
    url: "https://nextjs-boilerplate-i6pd.vercel.app/за-деньги.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 74,
    title: "Не стыдно",
    url: "https://nextjs-boilerplate-i6pd.vercel.app/Не-стыдно.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 75,
    title: "Блокада Ленинграда",
    url: "https://nextjs-boil-delta.vercel.app/tagmp3_Блокада-Ленинграда-(2).mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 76,
    title: "Вагнера",
    url: "https://nextjs-boil-delta.vercel.app/tagmp3_РД-Вагнера.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 77,
    title: "Стрелок",
    url: "https://nextjs-boil-delta.vercel.app/tagmp3_стрелок.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 78,
    title: "Мать",
    url: "https://nextjs-boil-delta.vercel.app/tagmp3_Русская-душа---мать.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 79,
    title: "Как заставить молчать",
    url: "https://nextjs-boil-delta.vercel.app/3_Русская_Душа_Как_заставить_молчать.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 80,
    title: "Горит свеча",
    url: "https://nextjs-boil-delta.vercel.app/tagmp3_Свеча-(2).mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 81,
    title: "Женщинам",
    url: "https://nextjs-boil-delta.vercel.app/Русская душа - Женщинам (1).MP3"
  },
  {
    date: "09.01.2024",
    titleNumber: 82,
    title: "Романс",
    url: "https://nextjs-boil-delta.vercel.app/Русская душа - Романс .mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 83,
    title: "Венчание",
    url: "https://nextjs-boil-delta.vercel.app/Венчание (4).mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 84,
    title: "Случайно встретились глазами",
    url: "https://nextjs-boil-delta.vercel.app/tagmp3_Случайно-встретились-глазами.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 85,
    title: "Люди бывают разными",
    url: "https://nextjs-boil-delta.vercel.app/tagmp3_Русская-душа-–-Одни-и-те-же-имена.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 86,
    title: "Брат",
    url: "https://nextjs-boil-delta.vercel.app/tagmp3_Брат-версия.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 87,
    title: "Путник",
    url: "https://nextjs-boil-delta.vercel.app/tagmp3_Русская-душа---Путник.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 88,
    title: "Недописанный стих",
    url: "https://nextjs-boil-delta.vercel.app/tagmp3_Русская_душа_Недописанный_стих_.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 89,
    title: "Испачканной карандашом",
    url: "https://nextjs-boil-delta.vercel.app/tagmp3_Русская_душа_Испачканной_карандашом_.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 90,
    title: "Одни и те же имена",
    url: "https://nextjs-boil-delta.vercel.app/tagmp3_Русская-душа-–-Одни-и-те-же-имена.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 91,
    title: "Пройдусь по парку",
    url: "https://nextjs-boil-delta.vercel.app/tagmp3_Русская-душа---Пройдусь-по-парку.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 92,
    title: "Слезы кончились",
    url: "https://nextjs-boil-delta.vercel.app/Слезы кончились.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 93,
    title: "Не прячь, слезу мой друг",
    url: "https://nextjs-boil-delta.vercel.app/Не прячь, мой друг слезу.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 94,
    title: "Там на обычном и завьюженном холме",
    url: "https://nextjs-boil-delta.vercel.app/Там_на_обычном_и_завьюженном_холме.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 95,
    title: "Вечная память героям",
    url: "https://nextjs-boil-delta.vercel.app/Вечная память героям! (2).mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 96,
    title: "Вы слышите?",
    url: "https://nextjs-boil-delta.vercel.app/cromulentarrangements461 – Вы слышите_.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 97,
    title: "Уже не стало ветеранов",
    url: "https://nextjs-boil-delta.vercel.app/Уже не стало ветеранов.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 98,
    title: "Мы часто о героях говорим",
    url: "https://nextjs-boil-delta.vercel.app/Мы часто о героях говорим (2).mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 99,
    title: "Война дошла до Сталинграда",
    url: "https://nextjs-boil-delta.vercel.app/Война дошла до Сталинграда (2).mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 100,
    title: "На выжженой земле",
    url: "https://nextjs-boil-delta.vercel.app/На выжженной земле.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 101,
    title: "Девятый десяток",
    url: "https://nextjs-boil-delta.vercel.app/Девятый_десяток_для_вечности_миг_1.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 102,
    title: "Там где маки лютуют",
    url: "https://nextjs-boil-delta.vercel.app/Там, где маки лютуют.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 103,
    title: "Великая держава",
    url: "https://nextjs-boilerplate-lemon-pi-53.vercel.app/Русская душа - Великая держава.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 104,
    title: "Уходят на войну",
    url: "https://nextjs-boil-delta.vercel.app/Русская+душа+-+Уходят+на+войну++(1).mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 105,
    title: "Александр Блок",
    url: "https://nextjs-boil-delta.vercel.app/Русская душа - Александр Блок.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 105,
    title: "Ну что пришла",
    url: "https://nextjs-boil-delta.vercel.app/Русская душа - Ну что пришла.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 106,
    title: "Остановите земле",
    url: "https://nextjs-boil-delta.vercel.app/Русская душа - Остановите земле .mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 107,
    title: "Бродяге",
    url: "https://nextjs-boil-delta.vercel.app/Русская душа - Бродяга.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 108,
    title: "Ну что застыл",
    url: "https://nextjs-boil-delta.vercel.app/Русская душа - Ну что застыл.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 109,
    title: "Налетает грусть",
    url: "https://nextjs-boil-delta.vercel.app/Русская душа - Налетает грусть .mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 110,
    title: "Мой мир таков, каким он мне открылся",
    url: "https://nextjs-boil-delta.vercel.app/Русская душа - Мой мир таков, каким он мне открылся .mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 111,
    title: "Плачу два счетчика",
    url: "https://nextjs-boil-delta.vercel.app/Русская душа - Плачу два счетчика.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 112,
    title: "Про СВО",
    url: "https://nextjs-boil-delta.vercel.app/Русская душа - Про СВО.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 113,
    title: "Пять лет назад",
    url: "https://nextjs-boil-delta.vercel.app/Русская душа - Пять лет назад.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 114,
    title: "Русский язызк",
    url: "https://nextjs-boil-delta.vercel.app/Русская душа - Русский язык .mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 115,
    title: "Скрипач",
    url: "https://nextjs-boil-delta.vercel.app/Русская душа - Скрипач .mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 116,
    title: "Я же вам говорил",
    url: "https://nextjs-boil-delta.vercel.app/Русская душа - Я же вам говорил .mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 117,
    title: "Я уже не спешу",
    url: "https://nextjs-boil-delta.vercel.app/Русская душа - Я уже не спешу .mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 118,
    title: "Крещение руси",
    url: "https://nextjs-boil-delta.vercel.app/Русская душа - Крещение Руси.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 119,
    title: "Июнь зеленый",
    url: "https://nextjs-boil-delta.vercel.app/Июль зеленый.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 120,
    title: "Жизнь это опыт, но никак не бремя",
    url: "https://nextjs-boil-delta.vercel.app/Русская душа - Жизнь это опыт, но никак не бремя.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 121,
    title: "Лермонтов",
    url: "https://nextjs-boil-delta.vercel.app/Русская душа - Лермонтов.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 122,
    title: "Когда уходит гений",
    url: "https://nextjs-boil-delta.vercel.app/Русская душа - Когда уходит гений.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 123,
    title: "Море не ответит",
    url: "https://nextjs-boil-delta.vercel.app/Русская душа - Море не ответит.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 124,
    title: "Наш русский флаг",
    url: "https://nextjs-boil-delta.vercel.app/Русская душа - Наш русский флаг.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 125,
    title: "Под куполом неба",
    url: "https://nextjs-boil-delta.vercel.app/Русская душа - Под куполом неба.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 126,
    title: "Хочу я жить в глуши",
    url: "https://nextjs-boil-delta.vercel.app/Русская душа - Хочу я жить в глуши.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 127,
    title: "Эх лето красное",
    url: "https://nextjs-boil-delta.vercel.app/Русская душа - Эх, лето красное,.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 128,
    title: "Спряталось солнце в дымке заката",
    url: "https://nextjs-boil-delta.vercel.app/Спряталось_солнце,_в_дымке_заката.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 129,
    title: "Не забывайте Рок",
    url: "https://nextjs-boil-delta.vercel.app/Не забывайте Рок (1).mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 130,
    title: "Не забывайте",
    url: "https://nextjs-boil-delta.vercel.app/Не забывайте.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 131,
    title: "Во славу русского соладата",
    url: "https://nextjs-boil-delta.vercel.app/Русская душа - Во славу русского солдата.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 132,
    title: "Дaльнобой",
    url: "https://nextjs-boil-delta.vercel.app/Русская душа - Дальнобой.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 133,
    title: "Передавай привет сентябрю",
    url: "https://nextjs-boil-delta.vercel.app/Русская душа - Передай привет сентябрю.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 134,
    title: "С дем рождения!",
    url: "https://nextjs-boil-delta.vercel.app/Русская душа - С днем рождения!.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 135,
    title: "Тридцать девять еще не дата",
    url: "https://nextjs-boil-delta.vercel.app/Русская_душа_Тридцать_девять,_ещё_не_дата.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 136,
    title: "Четвероногому другу",
    url: "https://nextjs-boil-delta.vercel.app/Четвероногому другу.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 137,
    title: "Читаю строки ветхого завета",
    url: "https://nextjs-boil-delta.vercel.app/Русская душа - Читаю строки ветхого завета.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 138,
    title: "Чеcть пацана",
    url: "https://nextjs-boil-delta.vercel.app/Русская душа - Честь пацана.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 139,
    title: "Пять лет я учился на инженера",
    url: "https://nextjs-boil-delta.vercel.app/Русская душа - Пять лет учился я на инженера.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 140,
    title: "Одесса",
    url: "https://nextjs-boil-delta.vercel.app/Русская душа - Одесса.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 141,
    title: "Новости смотрю и плачу Частушки",
    url: "https://nextjs-boil-delta.vercel.app/Русская душа - Новости смотрю и плачу (частушки).mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 142,
    title: "Врач от Бога",
    url: "https://nextjs-boil-delta.vercel.app/Русская душа - Врач от Бога.MP3"
  },
  {
    date: "09.01.2024",
    titleNumber: 143,
    title: "Над Курском Взрывы",
    url: "https://nextjs-boil-delta.vercel.app/Над Курском взрывы.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 144,
    title: "Приснился адвокату сон",
    url: "https://nextjs-boil-delta.vercel.app/Русская душа - Приснился адвокату сон.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 145,
    title: "Пришел домой",
    url: "https://nextjs-boil-delta.vercel.app/Русская душа - Пришел домой.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 146,
    title: "Cтроителям",
    url: "https://nextjs-boil-delta.vercel.app/Русская душа - Строителям.mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 147,
    title: "Эх, от тюрьмы и от сумы не зарекайся",
    url: "https://nextjs-boil-delta.vercel.app/Русская душа - Эх, от тюрьмы и от сумы не зарекайся (1).mp3"
  },
  {
    date: "09.01.2024",
    titleNumber: 148,
    title: "Я не ханжа",
    url: "https://nextjs-boil-delta.vercel.app/Русская душа - Я не ханжа.MP3"
  }
];






if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw7.js') 
      .then((registration) => {
        alert('SW зарегистрирован:', registration);
      })
      .catch((error) => {
        console.log('Ошибка регистрации SW:', error);
      });
  });
} else {
   alert('не потдерживается SW')
}








let peremesh = false;

let isSortedAlphabetically = false;
let isSortedByDate = false;

AboutTrackIndex = -1;

let currentHighlightedElement = null;





function playTrack(index) {



   

  if (currentHighlightedElement) {
        currentHighlightedElement.classList.remove('highlight');
    }


    




        AboutTrackIndex = index;
        const track = tracks[index];
       audioPlayer.src = track.url;

        audioPlayer.play().catch(error => {
        console.error("Ошибка воспроизведения:", error);
        if (error.name === 'NotAllowedError') {
            console.log('Автопроигрывание заблокировано браузером. Нажмите на плеер для воспроизведения.');
        }
    });

        if (peremesh && shuffledFavorites.length > 0) {
            const currentTitle = track.title;
            currentShuffledIndex = shuffledFavorites.indexOf(currentTitle);
        }

        currentTrackIndex = { albumIndex: -1, trackIndex: index }

        const trackElements = Array.from(favoritesContainer.children);
        const currentTrackElement = trackElements.find(el => 
            el.querySelector('.track-button').textContent === track.title
        );

        if (currentTrackElement) {
          currentTrackElement.classList.add('highlight');
          currentHighlightedElement = currentTrackElement;
        }

    }


let currentTrackIndex = { albumIndex: -1, trackIndex: -1 };


 function playAlbomTrack(albumIndex, trackIndex) {
    const album = albomsBaze[albumIndex];

    if (!album || !album.album) {
        console.error("Альбом не найден или не содержит треков.");
        return;
    }

    let trackList = album.album;
    if (peremesh && shuffledAlbumTracks[album.title]) {
        trackList = shuffledAlbumTracks[album.title];
    } else if (isSortedAlphabetically) {
        trackList = [...album.album].sort((a, b) => a.title.localeCompare(b.title));
    } else if (isSortedByDate) {
        trackList = [...album.album].sort((a, b) => new Date(b.titleDate) - new Date(a.titleDate));
    }

    let track = trackList[trackIndex];

    const disabledTitlesRaw = localStorage.getItem('disabled') || '';
    const disabledTitles = disabledTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);

    while (track && disabledTitles.map(title => title.toLowerCase()).includes(track.title.toLowerCase())) {
        trackIndex++;

        if (trackIndex >= trackList.length) {
            trackIndex = 0; 
        }

        track = trackList[trackIndex];
    }

    if (track) {
        if (currentHighlightedElement) {
            currentHighlightedElement.classList.remove('highlight');
        }

        currentTrackIndex = { albumIndex, trackIndex };
        audioPlayer.src = track.url;
        audioPlayer.play().catch(error => {
            console.error("Ошибка воспроизведения:", error);
        });

        const albumElements = Array.from(albomContainer.querySelectorAll('.album-title'));
        let albumElement = null;
        
        for (let i = 0; i < albumElements.length; i++) {
            const titleElement = albumElements[i].querySelector('.title-text');
            if (titleElement && titleElement.textContent === album.title) {
                albumElement = albumElements[i];
                break;
            }
        }

        if (albumElement) {

            const tracksContainer = albumElement.nextElementSibling;
            if (tracksContainer && (tracksContainer.style.maxHeight === '0px' || tracksContainer.style.maxHeight === '')) {
                albumElement.click();
            }

            const trackButtons = Array.from(tracksContainer.querySelectorAll('.track-button'));
            let trackButton = null;
            
            for (let i = 0; i < trackButtons.length; i++) {
                if (trackButtons[i].textContent === track.title) {
                    trackButton = trackButtons[i];
                    break;
                }
            }

            if (trackButton) {
                trackButton.classList.add('highlight');
                currentHighlightedElement = trackButton;
                trackButton.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    } else {
        console.error("Трек не найден для воспроизведения.");
    }
}




const favoritesContainer = document.getElementById('favorites-container');
const albomContainer = document.getElementById('albom-container');
const audioPlayer = document.getElementById('audio-player');
function createAlbumToggleHandler(albumButton, tracksContainer) {
    return function() {

        const allAlbums = document.querySelectorAll('.album-title');
        allAlbums.forEach(element => {
            if (element !== albumButton) {
                const otherTracksContainer = element.nextElementSibling;
                if (otherTracksContainer && otherTracksContainer.classList.contains('tracks-container')) {
                    otherTracksContainer.style.maxHeight = '0px';
                    element.setAttribute('aria-expanded', 'false');
                }
            }
        });

        const isHidden = tracksContainer.style.maxHeight === '0px' || tracksContainer.style.maxHeight === '';
        tracksContainer.style.maxHeight = isHidden ? '1000px' : '0px';
        tracksContainer.style.transition = 'max-height 0.3s ease';
        albumButton.setAttribute('aria-expanded', isHidden ? 'true' : 'false');
    };
}

function UpdateFunction() {
    favoritesContainer.innerHTML = '';
    albomContainer.innerHTML = '';
    
    let GLOABALS = 0

    const favoriteTitlesRaw = localStorage.getItem('trek') || '';
    const favoriteTitles = favoriteTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);

    

    const favoriteTracks = favoriteTitles
        .map(title => tracks.find(t => t.title === title))
        .filter(t => t && t.url);

    const albomTitlesRaw = localStorage.getItem('trekA') || '';
    const AlbomTitles = albomTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0)


let favoriteIndex = favoriteTracks.length;
let albumIndex = AlbomTitles.length;







AlbomTitles.forEach((albom, index) => {
        const albomMass = albomsBaze.find(a => a.title === albom);
        if (!albomMass) return;

        const albumDiv = document.createElement('div');
        albumDiv.style.marginBottom = '16px';
        albumDiv.style.display = 'flex';
        albumDiv.style.flexDirection = 'column';

        const titleText = document.createElement('span');
        titleText.className = 'title-text';
        titleText.textContent = albomMass.title;

        const albumNumber = document.createElement('span');
  albumNumber.textContent = `${albumIndex--}`;
  albumNumber.style.fontWeight = 'bold';
  albumNumber.className = 'num-btn09'
  albumNumber.style.marginRight = '10px'; 

        const deleteBtn2 = document.createElement('button');
        deleteBtn2.textContent = '-';
        deleteBtn2.className = 'delete-button';
        deleteBtn2.setAttribute('aria-label', `Удалить ${albomMass.title}`);

        deleteBtn2.addEventListener('click', () => {
            const rawFilter = albomTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);
            const updatedFavorites = rawFilter.filter(fav => fav !== albomMass.title);
            localStorage.setItem('trekA', updatedFavorites.join('\n'));
            console.log(`Альбом "${albomMass.title}" удален из избранного.`);
            UpdateFunction();
        });

        const albumButton = document.createElement('button');
        albumButton.className = 'album-title';
        albumButton.setAttribute('aria-expanded', 'false');
        albumButton.style.width = '100%';
        albumButton.style.textAlign = 'left';

        albumButton.appendChild(albumNumber)

        albumButton.appendChild(deleteBtn2);
        albumButton.appendChild(titleText);

        const tracksContainer = document.createElement('div');
        tracksContainer.className = 'tracks-container';
        tracksContainer.style.maxHeight = '0';
        tracksContainer.style.overflow = 'hidden';



let trackIndex = albomMass.album.length;

        albomMass.album.forEach(vf => {

            const trackContainer = document.createElement('div');
            trackContainer.style.display = 'flex';
            trackContainer.style.alignItems = 'center';
            trackContainer.style.justifyContent = 'space-between';
            trackContainer.style.marginBottom = '10px';

            const trackNumberBtn = document.createElement('span');
trackNumberBtn.textContent = `${trackIndex--}`;
trackNumberBtn.className = 'num-btn';
trackNumberBtn.style.marginRight = '10px';
trackContainer.appendChild(trackNumberBtn);
 

            const btnf = document.createElement('button');
            btnf.textContent = vf.title;
            btnf.className = 'track-button';
            btnf.title = `Воспроизвести ${vf.title}`;
            btnf.setAttribute('aria-label', `Воспроизвести ${vf.title}`);

            btnf.onclick = () => {
              console.log(albomMass)
    const albumIndex = albomsBaze.indexOf(albomMass);
    const trackIndex = albomMass.album.indexOf(vf);
    console.log("Album", albumIndex);
    console.log("Track", trackIndex);
    playAlbomTrack(albumIndex, trackIndex);
};

            const deleteBtn22 = document.createElement('button');
            deleteBtn22.textContent = '-';
            deleteBtn22.className = 'delete-button12';
            deleteBtn22.setAttribute('aria-label', `Удалить ${vf.title}`);

              const buttonContainer = document.createElement('div');
            buttonContainer.style.display = 'flex';
            buttonContainer.style.gap = '10px';

            const btnfDisabled = btnf.textContent;
            const disabledTitlesRaw = localStorage.getItem('disabled') || '';
            const disabledTitles = disabledTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);

            if (disabledTitles.map(title => title.toLowerCase()).includes(vf.title.toLowerCase())) {
              trackContainer.appendChild(trackNumberBtn);
              trackContainer.appendChild(btnf);
              deleteBtn22.remove()

              btnf.disabled = true;
              console.log("Сработало")

              const restoreBtn89 = document.createElement('button');
              restoreBtn89.textContent = '+';
              restoreBtn89.className = 'restore-button';
              restoreBtn89.setAttribute('aria-label', `Восстановить ${vf.title}`);
              restoreBtn89.disabled = false; 

              restoreBtn89.addEventListener('click', (event) => {
                  event.preventDefault();
                  const disabledTitlesRaw09 = localStorage.getItem('disabled') || '';
            const disabledTitles09 = disabledTitlesRaw09.split('\n').map(s => s.trim()).filter(s => s.length > 0);
                  const updatedDisabledTitles = disabledTitles09.filter(title => title.toLowerCase() !== vf.title.toLowerCase());
                  localStorage.setItem('disabled', updatedDisabledTitles.join('\n'));
                  btnf.disabled = false; 
                  restoreBtn89.remove(); 
                  console.log(`Трек "${vf.title}" восстановлен.`); 
                  const disabledTitlesRaw3 = localStorage.getItem('disabled') || '';
                  const disabledTitles3 = disabledTitlesRaw3.split('\n').map(s => s.trim()).filter(s => s.length > 0);
                  console.log(disabledTitles3); 
                  buttonContainer.appendChild(deleteBtn22)

          
                
              } );

             trackContainer.appendChild(trackNumberBtn);
              trackContainer.appendChild(btnf);
              buttonContainer.appendChild(restoreBtn89);
      } else {
    
              buttonContainer.appendChild(deleteBtn22);

    trackContainer.appendChild(trackNumberBtn);
    trackContainer.appendChild(btnf);
}
 

            deleteBtn22.addEventListener('click', (event) => {
                event.stopPropagation();
                btnf.disabled = true; 
                const btnfDisabled = btnf.textContent;
                const disabledTitlesRaw = localStorage.getItem('disabled') || '';
                const disabledTitles = disabledTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);
                localStorage.setItem('disabled', btnfDisabled + '\n' + disabledTitles.join('\n'));
                console.log(`Трек "${btnfDisabled}" отключен.`);
              deleteBtn22.remove();

                const restoreBtn89 = document.createElement('button');
              restoreBtn89.textContent = '+';
              restoreBtn89.className = 'restore-button';
              restoreBtn89.setAttribute('aria-label', `Восстановить ${vf.title}`);
              restoreBtn89.disabled = false; 

              restoreBtn89.addEventListener('click', (event) => {
                  event.preventDefault();
                  const disabledTitlesRaw09 = localStorage.getItem('disabled') || '';
            const disabledTitles09 = disabledTitlesRaw09.split('\n').map(s => s.trim()).filter(s => s.length > 0);
                  const updatedDisabledTitles = disabledTitles09.filter(title => title.toLowerCase() !== vf.title.toLowerCase());
                  localStorage.setItem('disabled', updatedDisabledTitles.join('\n'));
                  btnf.disabled = false; 
                  buttonContainer.appendChild(deleteBtn22)
                  restoreBtn89.remove(); 

      
                
              })
              
              buttonContainer.appendChild(restoreBtn89);
            });




            
            if (disabledTitles.map(title => title.toLowerCase()).includes(vf.title.toLowerCase())) {
              deleteBtn22.remove();
            } 
            
            trackContainer.appendChild(btnf);
            trackContainer.appendChild(buttonContainer);
            tracksContainer.appendChild(trackContainer);
        });


albumButton.addEventListener('click', createAlbumToggleHandler(albumButton, tracksContainer));


        
        albumDiv.appendChild(albumButton);
        albumDiv.appendChild(tracksContainer);
        albomContainer.appendChild(albumDiv);
    });






    if (favoriteTracks.length === 0) {
        favoritesContainer.style.color = '#363E6B';
        favoritesContainer.style.padding = '10px';
        favoritesContainer.style.fontWeight = '600';
        favoritesContainer.style.userSelect = 'none';
    } else {
        favoriteTracks.forEach((track, index) => {
            const trackContainer = document.createElement('div');
            trackContainer.style.display = 'flex';
            trackContainer.style.alignItems = 'center';
            trackContainer.style.justifyContent = 'space-between';

            const btn = document.createElement('button');
            btn.textContent = track.title;
            btn.className = 'track-button';
            btn.disabled = !track.url;
            btn.title = `Воспроизвести ${track.title}`;
            btn.setAttribute('aria-label', `Воспроизвести ${track.title}`);

            const numberBtn = document.createElement('button');
            numberBtn.className = 'num-btn';
            numberBtn.textContent = favoriteIndex--;
            numberBtn.style.marginRight = '5px'

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = '-';
            deleteBtn.className = 'delete-button';
            deleteBtn.setAttribute('aria-label', `Удалить ${track.title}`);



            deleteBtn.addEventListener('click', (event) => {
                event.stopPropagation();
                const rawFilter = favoriteTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);
                const updatedFavorites = rawFilter.filter(fav => fav !== track.title);
                localStorage.setItem('trek', updatedFavorites.join('\n'));
                console.log(`Трек "${track.title}" удален из избранного.`);
                UpdateFunction();
            });

            btn.onclick = () => {
               playTrack(tracks.indexOf(track));
            };


            const buttonContainer = document.createElement('div');
            buttonContainer.style.display = 'flex';
            buttonContainer.style.gap = '10px';
            buttonContainer.appendChild(deleteBtn);

            trackContainer.appendChild(numberBtn)

            trackContainer.appendChild(btn);
            trackContainer.appendChild(buttonContainer);
            favoritesContainer.appendChild(trackContainer);
      }); 
    }

    

  console.log(AlbomTitles)


}



function ABCUpdateFunction() {
  favoritesContainer.innerHTML = '';
  albomContainer.innerHTML = '';

  const favoriteTitlesRaw = localStorage.getItem('trek') || '';
  const favoriteTitles = favoriteTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);

  const favoriteTracks = favoriteTitles
    .map(title => tracks.find(t => t.title === title))
    .filter(t => t && t.url);

  console.log(favoriteTracks)
  favoriteTracks.sort((a, b) => a.title.localeCompare(b.title));
  console.log(favoriteTracks)

  let favoriteIndex = favoriteTracks.length;



  if (favoriteTracks.length === 0) {
    favoritesContainer.style.color = '#363E6B';
    favoritesContainer.style.padding = '10px';
    favoritesContainer.style.fontWeight = '600';
    favoritesContainer.style.userSelect = 'none';
  } else {
    favoriteTracks.forEach((track, index) => {
      const trackContainer = document.createElement('div');
      trackContainer.style.display = 'flex';
      trackContainer.style.alignItems = 'center';
      trackContainer.style.justifyContent = 'space-between';

      const btn = document.createElement('button');
      btn.textContent = track.title;
      btn.className = 'track-button';
      btn.disabled = !track.url;
      btn.title = `Воспроизвести ${track.title}`;
      btn.setAttribute('aria-label', `Воспроизвести ${track.title}`);

      const numberBtn = document.createElement('button');
            numberBtn.className = 'num-btn';
            numberBtn.textContent = favoriteTracks.length - index;
            numberBtn.style.marginRight = '5px'

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = '-';
      deleteBtn.className = 'delete-button';
      deleteBtn.setAttribute('aria-label', `Удалить ${track.title}`);

      deleteBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        const rawFilter = favoriteTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);
        const updatedFavorites = rawFilter.filter(fav => fav !== track.title);
        localStorage.setItem('trek', updatedFavorites.join('\n'));
        console.log(`Трек "${track.title}" удален из избранного.`); 
        ABCUpdateFunction();
      });

      btn.onclick = () => {
               playTrack(tracks.indexOf(track));
            };

      trackContainer.appendChild(numberBtn)

      trackContainer.appendChild(deleteBtn);
      trackContainer.appendChild(btn);
      favoritesContainer.appendChild(trackContainer);
    });
  }

  const albomTitlesRaw = localStorage.getItem('trekA') || '';
  const AlbomTitles = albomTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);
  get = []
  AlbomTitles.forEach(trackBearReat => {
    const derA = albomsBaze.find(a => a.title === trackBearReat);
    get.push(derA)
  })
  const getUpdate = get.sort((a, b) => a.title.localeCompare(b.title))
  console.log(getUpdate)
  console.log('стоп')

  let albumIndex = AlbomTitles.length;





  AlbomTitles.forEach((albom, index) => {

    console.log(getUpdate[index])
    console.log('стоп')
    const albomMass = getUpdate[index].album.sort((a, b) => a.title.localeCompare(b.title))

    console.log(albomMass)

    if (getUpdate.length > index) {
      console.log(getUpdate.length)
      console.log('Конец')
    }


    if (!albomMass) return;


           const albumNumber = document.createElement('span');
            albumNumber.textContent = `${albumIndex--}.`;
            albumNumber.style.fontWeight = 'bold';
            albumNumber.className = 'num-btn09'
            albumNumber.style.marginRight = '10px'; 

     const trackContainer = document.createElement('div');
        trackContainer.style.display = 'flex'; 
        trackContainer.style.alignItems = 'center';
        trackContainer.style.justifyContent = 'space-between';
        trackContainer.style.width = '100%'; 
        trackContainer.style.marginBottom = '8px';

    const albumDiv = document.createElement('div');
    albumDiv.style.marginBottom = '16px';
    albumDiv.style.display = 'flex';
    albumDiv.style.flexDirection = 'column';

    const titleText = document.createElement('span');
    titleText.className = 'title-text';
    titleText.textContent = getUpdate[index].title;

    const deleteBtn2 = document.createElement('button');
    deleteBtn2.textContent = '-';
    deleteBtn2.className = 'delete-button';
    deleteBtn2.setAttribute('aria-label', `Удалить ${albomMass.title}`);

    deleteBtn2.addEventListener('click', () => {
      const rawFilter = albomTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);
      const updatedFavorites = rawFilter.filter(fav => fav !== getUpdate[index].title);
      localStorage.setItem('trekA', updatedFavorites.join('\n'));
      ABCUpdateFunction();
    });

    const albumButton = document.createElement('button');
    albumButton.className = 'album-title';
    albumButton.setAttribute('aria-expanded', 'false');
    albumButton.style.width = '100%';
    albumButton.style.textAlign = 'left';
    albumButton.appendChild(albumNumber)

    albumButton.appendChild(deleteBtn2);
    albumButton.appendChild(titleText);

    const tracksContainer = document.createElement('div');
    tracksContainer.className = 'tracks-container'; 
    tracksContainer.style.maxHeight = '0'; 
    tracksContainer.style.overflow = 'hidden';
    tracksContainer.style.display = 'flex'; 
    tracksContainer.style.flexDirection = 'column';

    let trackIndexA = albomMass.length;

    albomMass.forEach(vf => {
      
      const btnf = document.createElement('button');
      btnf.textContent = vf.title;
      btnf.className = 'track-button';
      btnf.title = `Воспроизвести ${vf.title}`;
      btnf.setAttribute('aria-label', `Воспроизвести ${vf.title}`);

       const trackContainer = document.createElement('div');
        trackContainer.style.display = 'flex'; 
        trackContainer.style.alignItems = 'center';
        trackContainer.style.justifyContent = 'space-between';
        trackContainer.style.width = '100%'; 
        trackContainer.style.marginBottom = '8px';

      const buttonContainer = document.createElement('div');
     buttonContainer.style.display = 'flex';
     buttonContainer.style.gap = '10px';

     const trackNumberBtn = document.createElement('span');
      trackNumberBtn.textContent = `${trackIndexA--}`;
      trackNumberBtn.className = 'num-btn';
      trackNumberBtn.style.marginRight = '10px';
      trackContainer.appendChild(trackNumberBtn);

      const disabledTitlesRaw = localStorage.getItem('disabled') || '';
      const disabledTitles = disabledTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);
      console.log(disabledTitles)
      if (disabledTitles.map(title => title.toLowerCase()).includes(vf.title.toLowerCase())) {
        btnf.disabled = true;
        console.log("Сработало")

        const restoreBtn = document.createElement('button');
        restoreBtn.textContent = '+';
        restoreBtn.className = 'restore-button';
        restoreBtn.setAttribute('aria-label', `Восстановить ${vf.title}`);
        restoreBtn.disabled = false; 

        restoreBtn.addEventListener('click', (event) => {
            event.preventDefault();
            const disabledTitlesRaw09 = localStorage.getItem('disabled') || '';
      const disabledTitles09 = disabledTitlesRaw09.split('\n').map(s => s.trim()).filter(s => s.length > 0);
            const updatedDisabledTitles = disabledTitles09.filter(title => title.toLowerCase() !== vf.title.toLowerCase());
            localStorage.setItem('disabled', updatedDisabledTitles.join('\n'));
            btnf.disabled = false; 
            restoreBtn.remove(); 
            console.log(`Трек "${vf.title}" восстановлен.`); 
            const disabledTitlesRaw3 = localStorage.getItem('disabled') || '';
            const disabledTitles3 = disabledTitlesRaw3.split('\n').map(s => s.trim()).filter(s => s.length > 0);
            console.log(disabledTitles3); 
        });

        buttonContainer.appendChild(restoreBtn);
      }

      btnf.onclick = () => {
        const albumIndex = albomsBaze.indexOf(getUpdate[index]);
        const trackIndex = getUpdate[index].album.indexOf(vf);
        console.log("Album", albumIndex);
        console.log("Track", trackIndex);
        playAlbomTrack(albumIndex, trackIndex);
      };

      const deleteBtn22 = document.createElement('button');
      deleteBtn22.textContent = '-';
      deleteBtn22.className = 'delete-button';
      deleteBtn22.setAttribute('aria-label', `Удалить ${albomMass.title}`);

      deleteBtn22.addEventListener('click', (event) => {
        event.stopPropagation(); 
        btnf.disabled = true;
        const btnfDisabled = btnf.textContent;
        const disabledTitlesRaw = localStorage.getItem('disabled') || '';
        const disabledTitles = disabledTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);
        localStorage.setItem('disabled', btnfDisabled + '\n' + disabledTitles.join('\n'));
        console.log(`Трек "${btnfDisabled}" отключен.`); 



        const restoreBtn = document.createElement('button');
        restoreBtn.textContent = '+';
        restoreBtn.className = 'restore-button';
        restoreBtn.setAttribute('aria-label', `Восстановить ${vf.title}`);
        restoreBtn.disabled = false; 

        restoreBtn.addEventListener('click', () => {
          event.stopPropagation(); 
          const disabledTitlesRaw091 = localStorage.getItem('disabled') || '';
      const disabledTitles091 = disabledTitlesRaw091.split('\n').map(s => s.trim()).filter(s => s.length > 0);
            const updatedDisabledTitles1 = disabledTitles091.filter(title => title.toLowerCase() !== vf.title.toLowerCase());
            localStorage.setItem('disabled', updatedDisabledTitles1.join('\n'));
            btnf.disabled = false; 
            restoreBtn.remove(); 
            console.log(`Трек "${vf.title}" восстановлен.`); 
            const disabledTitlesRaw3 = localStorage.getItem('disabled') || '';
            const disabledTitles3 = disabledTitlesRaw3.split('\n').map(s => s.trim()).filter(s => s.length > 0);
            console.log(disabledTitles3); 

    
          
        });

        buttonContainer.appendChild(restoreBtn);


      });
       buttonContainer.appendChild(deleteBtn22);

       trackContainer.appendChild(btnf);
       trackContainer.appendChild(buttonContainer);
       tracksContainer.appendChild(trackContainer);
   } 
);


albumButton.addEventListener('click', createAlbumToggleHandler(albumButton, tracksContainer));


    albumDiv.appendChild(albumButton);
    albumDiv.appendChild(tracksContainer);
    albomContainer.appendChild(albumDiv);
  });
}

function DateUpdateFunction() {
  favoritesContainer.innerHTML = '';
  albomContainer.innerHTML = '';

  const favoriteTitlesRaw = localStorage.getItem('trek') || '';
  const favoriteTitles = favoriteTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);

  const favoriteTracks = favoriteTitles
    .map(title => tracks.find(t => t.title === title))
    .filter(t => t && t.url);


  console.log(favoriteTracks)
  favoriteTracks.sort((a, b) => new Date(b.date) - new Date(a.date));

  if (favoriteTracks.length === 0) {
    favoritesContainer.style.color = '#363E6B';
    favoritesContainer.style.padding = '10px';
    favoritesContainer.style.fontWeight = '600';
    favoritesContainer.style.userSelect = 'none';
  } else {
    favoriteTracks.forEach((track, index) => {
      const trackContainer = document.createElement('div');
      trackContainer.style.display = 'flex';
      trackContainer.style.alignItems = 'center';
      trackContainer.style.justifyContent = 'space-between';

      const btn = document.createElement('button');
      btn.textContent = track.title;
      btn.className = 'track-button';
      btn.disabled = !track.url;
      btn.title = `Воспроизвести ${track.title}`;
      btn.setAttribute('aria-label', `Воспроизвести ${track.title}`);

      const numberBtn = document.createElement('button');
            numberBtn.className = 'num-btn';
            numberBtn.textContent = favoriteTracks.length - index;
            numberBtn.style.marginRight = '5px'



      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = '-';
      deleteBtn.className = 'delete-button';
      deleteBtn.setAttribute('aria-label', `Удалить ${track.title}`);

      

      deleteBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        const rawFilter = favoriteTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);
        const updatedFavorites = rawFilter.filter(fav => fav !== track.title);
        localStorage.setItem('trek', updatedFavorites.join('\n'));
        console.log(`Трек "${track.title}" удален из избранного.`); 
        DateUpdateFunction();
      });

     btn.onclick = () => {
          playTrack(tracks.indexOf(track));
      };
      trackContainer.appendChild(numberBtn)

      trackContainer.appendChild(btn);
      trackContainer.appendChild(deleteBtn);
      favoritesContainer.appendChild(trackContainer);
    });
  }

  const albomTitlesRaw = localStorage.getItem('trekA') || '';
  const AlbomTitles = albomTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);

   AlbomTitles.sort((titleA, titleB) => {
  const albomA = albomsBaze.find(album => album.title === titleA);
  const albomB = albomsBaze.find(album => album.title === titleB);
  if (!albomA || !albomB) return 0;
  return new Date(albomB.titleDate) - new Date(albomA.titleDate);
});


albumIndex = AlbomTitles.length
  AlbomTitles.forEach(albom => {
    const albumNumber = document.createElement('span');
            albumNumber.textContent = `${albumIndex--}`;
            albumNumber.style.fontWeight = 'bold';
            albumNumber.className = 'num-btn09'
            albumNumber.style.marginRight = '10px'; 
          

    
    const albomMass = albomsBaze.find(a => a.title === albom);
     albomMass.album.sort((a, b) => new Date(b.titleDate) - new Date(a.titleDate));
    if (!albomMass) return;
    

    const albumDiv = document.createElement('div');
    albumDiv.style.marginBottom = '16px';
    albumDiv.style.display = 'flex';
    albumDiv.style.flexDirection = 'column';

     const albomRowDate = document.createElement('div');
    albomRowDate.style.display = 'flex';
    albomRowDate.style.gap = '16px';

    const titleText = document.createElement('span');
    titleText.className = 'title-text';
    titleText.textContent = albomMass.title;

    const deleteBtn2 = document.createElement('button');
    deleteBtn2.textContent = '-';
    deleteBtn2.className = 'delete-button';
    deleteBtn2.setAttribute('aria-label', `Удалить ${albomMass.title}`);

    deleteBtn2.addEventListener('click', () => {
      const rawFilter = albomTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);
      const updatedFavorites = rawFilter.filter(fav => fav !== albomMass.title);
      localStorage.setItem('trekA', updatedFavorites.join('\n'));
      console.log(`Альбом "${albomMass.title}" удален из избранного.`); 
      DateUpdateFunction();
    });

    const albumButton = document.createElement('button');
    albumButton.className = 'album-title';
    albumButton.setAttribute('aria-expanded', 'false');
    albumButton.style.width = '100%';
    albumButton.style.textAlign = 'left';
    albumButton.appendChild(albumNumber)



    albumButton.appendChild(deleteBtn2);
    albumButton.appendChild(titleText);

     const tracksContainer = document.createElement('div');
    tracksContainer.className = 'tracks-container'; 
    tracksContainer.style.maxHeight = '0'; 
    tracksContainer.style.overflow = 'hidden';
    tracksContainer.style.display = 'flex'; 
    tracksContainer.style.flexDirection = 'column';

    const trackContainer = document.createElement('div');
        trackContainer.style.display = 'flex'; 
        trackContainer.style.alignItems = 'center';
        trackContainer.style.justifyContent = 'space-between';
        trackContainer.style.width = '100%'; 
        trackContainer.style.marginBottom = '8px';

    albomMass.album.forEach((vf, index) => {

      const trackContainer = document.createElement('div');
  trackContainer.style.display = 'flex'; 
  trackContainer.style.alignItems = 'center';
  trackContainer.style.justifyContent = 'space-between';
  trackContainer.style.width = '100%'; 
  trackContainer.style.marginBottom = '8px';

      const trackNumberBtn = document.createElement('span');
trackNumberBtn.textContent = `${albomMass.album.length - index}`;
trackNumberBtn.className = 'num-btn';
trackNumberBtn.style.marginRight = '10px';
trackContainer.appendChild(trackNumberBtn);

  



  const btnf = document.createElement('button');
  btnf.textContent = vf.title;
  btnf.className = 'track-button';
  btnf.title = `Воспроизвести ${vf.title}`;
  btnf.setAttribute('aria-label', `Воспроизвести ${vf.title}`);

   const buttonContainer = document.createElement('div');
  buttonContainer.style.display = 'flex';
  buttonContainer.style.gap = '10px';


  trackContainer.appendChild(btnf);



      

      const disabledTitlesRaw = localStorage.getItem('disabled') || '';
      const disabledTitles = disabledTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);
      console.log(disabledTitles)
      if (disabledTitles.map(title => title.toLowerCase()).includes(vf.title.toLowerCase())) {
        btnf.disabled = true;
        console.log("Сработало")

        const restoreBtn = document.createElement('button');
        restoreBtn.textContent = '+';
        restoreBtn.className = 'restore-button';
        restoreBtn.setAttribute('aria-label', `Восстановить ${vf.title}`);
        restoreBtn.disabled = false; 

        restoreBtn.addEventListener('click', (event) => {
            event.preventDefault();
            const disabledTitlesRaw09 = localStorage.getItem('disabled') || '';
      const disabledTitles09 = disabledTitlesRaw09.split('\n').map(s => s.trim()).filter(s => s.length > 0);
            const updatedDisabledTitles = disabledTitles09.filter(title => title.toLowerCase() !== vf.title.toLowerCase());
            localStorage.setItem('disabled', updatedDisabledTitles.join('\n'));
            btnf.disabled = false; 
            restoreBtn.remove(); 
            console.log(`Трек "${vf.title}" восстановлен.`); 
            const disabledTitlesRaw3 = localStorage.getItem('disabled') || '';
            const disabledTitles3 = disabledTitlesRaw3.split('\n').map(s => s.trim()).filter(s => s.length > 0);
            console.log(disabledTitles3); 

        
          
        });

        buttonContainer.appendChild(restoreBtn);
      }

      btnf.onclick = () => {
    
    const albumIndex = albomsBaze.indexOf(albomMass);
    const trackIndex = albomMass.album.indexOf(vf);
    console.log("Album", albumIndex);
    console.log("Track", trackIndex);
    playAlbomTrack(albumIndex, trackIndex);
};

      const deleteBtn22 = document.createElement('button');
      deleteBtn22.textContent = '-';
      deleteBtn22.className = 'delete-button';
      deleteBtn22.setAttribute('aria-label', `Удалить ${albomMass.title}`);


      deleteBtn22.addEventListener('click', (event) => {
        event.stopPropagation(); 
        btnf.disabled = true;
        const btnfDisabled = btnf.textContent;
        const disabledTitlesRaw = localStorage.getItem('disabled') || '';
        const disabledTitles = disabledTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);
        localStorage.setItem('disabled', btnfDisabled + '\n' + disabledTitles.join('\n'));
        console.log(`Трек "${btnfDisabled}" отключен.`); 



        const restoreBtn = document.createElement('button');
        restoreBtn.textContent = '+';
        restoreBtn.className = 'restore-button';
        restoreBtn.setAttribute('aria-label', `Восстановить ${vf.title}`);
        restoreBtn.disabled = false; 

        restoreBtn.addEventListener('click', () => {
          event.stopPropagation(); 
          const disabledTitlesRaw091 = localStorage.getItem('disabled') || '';
      const disabledTitles091 = disabledTitlesRaw091.split('\n').map(s => s.trim()).filter(s => s.length > 0);
            const updatedDisabledTitles1 = disabledTitles091.filter(title => title.toLowerCase() !== vf.title.toLowerCase());
            localStorage.setItem('disabled', updatedDisabledTitles1.join('\n'));
            btnf.disabled = false; 
            restoreBtn.remove(); 
            console.log(`Трек "${vf.title}" восстановлен.`); 
            const disabledTitlesRaw3 = localStorage.getItem('disabled') || '';
            const disabledTitles3 = disabledTitlesRaw3.split('\n').map(s => s.trim()).filter(s => s.length > 0);
            console.log(disabledTitles3); 
        });

        buttonContainer.appendChild(restoreBtn);


      });
      buttonContainer.appendChild(deleteBtn22);

       trackContainer.appendChild(btnf);
       trackContainer.appendChild(buttonContainer);
       tracksContainer.appendChild(trackContainer);
   } 
);


albumButton.addEventListener('click', createAlbumToggleHandler(albumButton, tracksContainer));

    albumDiv.appendChild(albumButton);
    albumDiv.appendChild(tracksContainer);
    albomContainer.appendChild(albumDiv);
  });
}

const searchInput = document.querySelector('.searchL input[type="text"]');
const searchForm = document.querySelector('.searchL');

searchForm.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const query = searchInput.value.toLowerCase();

  const favoriteTitlesRaw = localStorage.getItem('trek') || '';
  const favoriteTitles = favoriteTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);

  const albomTitlesRaw = localStorage.getItem('trekA') || '';
  const albomTitles = albomTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);

  const albomToScrollTo = albomTitles.find(title => title.toLowerCase().includes(query));
  const trackToScrollTo = favoriteTitles.find(title => title.toLowerCase().includes(query));

  const ver = Array.from(favoritesContainer.children);
  const verA = Array.from(albomContainer.children);

  if (trackToScrollTo) {
    const Element = ver.find(child => child.textContent.includes(trackToScrollTo));
    if (Element) {
      Element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      Element.classList.add('highlight');
      setTimeout(() => {
        Element.classList.remove('highlight');
      }, 2000);
    }
  }

  if (albomToScrollTo) {
    const ElementA = verA.find(child => child.querySelector('.title-text').textContent.includes(albomToScrollTo));
    if (ElementA) {
      ElementA.scrollIntoView({ behavior: 'smooth', block: 'center' });
      ElementA.classList.add('highlight');
      setTimeout(() => {
        ElementA.classList.remove('highlight');
      }, 2000);
    }
  } 
  else {
    let trackFound = false; 
    albomsT.forEach(titleTracks => {
      const filteredAlbomTitle = titleTracks.album;
      const FeAlbomTitle = filteredAlbomTitle.find(title12 => title12.title.toLowerCase().includes(query));

      if (FeAlbomTitle) {
        const albumElement = verA.find(child => child.querySelector(".title-text").textContent.includes(titleTracks.title));
        if (albumElement) {
          const TC = Array.from(albumElement.querySelectorAll(".tracks-container button"));
          const lement = TC.find(child => child.textContent.includes(FeAlbomTitle.title));
          const allAlbums = document.querySelectorAll('.tracks-container');
          allAlbums.forEach(container => {
            if (container !== albumElement.querySelector('.tracks-container')) {
              container.style.maxHeight = '0'; 
              container.parentElement.querySelector('.album-title').setAttribute('aria-expanded', 'false');
            }
          });
          albumElement.querySelector('.album-title').click();
          if (lement) { 
            albumElement.scrollIntoView({behavior: 'smooth', block: 'center'})
            setTimeout(() => {
              lement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 500)

            setTimeout(() => {
              lement.classList.add('highlight');
              setTimeout(() => {
                lement.classList.remove('highlight');
                lement.classList.add('fade-out'); 
                setTimeout(() => {
                  lement.classList.remove('fade-out'); 
                }, 750);
              }, 3000);
            }, 300); 

            trackFound = true;
          }
        }
      }
    });
  }



});

  function NumbercreateTrackRow(track, index, totalTrack) {
      const row = document.createElement('div');
      row.className = 'track-row';
      const favoriteTitlesRaw = localStorage.getItem('trek') || '';

      const trackBtn = document.createElement('button');
      trackBtn.className = 'track-button';
      trackBtn.textContent = track.title;
      trackBtn.title = `Воспроизвести ${track.title}`;
      trackBtn.disabled = !track.url;
      trackBtn.onclick = () => {
               playTrack(tracks.indexOf(track));
            };

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = '-';
      deleteBtn.className = 'delete-button';
      deleteBtn.setAttribute('aria-label', `Удалить ${track.title}`);

      deleteBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        const rawFilter = favoriteTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);
        const updatedFavorites = rawFilter.filter(fav => fav !== track.title);
        localStorage.setItem('trek', updatedFavorites.join('\n'));
        console.log(`Трек "${track.title}" удален из избранного.`); 
        ABCUpdateFunction();
      });

      const numberBtn = document.createElement('button');
            numberBtn.className = 'num-btn';
            numberBtn.textContent = totalTrack.length - index;
            numberBtn.style.marginRight = '5px'


      row.appendChild(numberBtn);
      row.appendChild(trackBtn);
row.appendChild(deleteBtn);

      return row;
    }

  function ANumbercreateTrackRow(track ,index, totalTrack) {
    const AlbomTitlesRaw = localStorage.getItem('trekA') || '';
    



    const albumDiv = document.createElement('div');
    albumDiv.style.marginBottom = '16px';
    albumDiv.style.display = 'flex';
    albumDiv.style.flexDirection = 'column';

    const titleText = document.createElement('span');
    titleText.className = 'title-text';
    titleText.textContent = track.title;

    const albumButton = document.createElement('button');
    albumButton.className = 'album-title';
    albumButton.setAttribute('aria-expanded', 'false');
    albumButton.style.width = '100%';
    albumButton.style.textAlign = 'left';

    const deleteBtn212 = document.createElement('button');
    deleteBtn212.textContent = '-';
    deleteBtn212.className = 'delete-button';
    deleteBtn212.setAttribute('aria-label', `Удалить ${track.title}`);

    deleteBtn212.addEventListener('click', () => {
        const rawFilter = AlbomTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);
        const updatedFavorites = rawFilter.filter(fav => fav !== track.title);
        localStorage.setItem('trekA', updatedFavorites.join('\n'));
        console.log(`Альбом "${track.title}" удален из избранного.`); 
        ABCUpdateFunction();
    });

    const numberBtn = document.createElement('button');
            numberBtn.className = 'num-btn09';
            numberBtn.textContent = totalTrack.length - index;
            numberBtn.style.marginRight = '5px'

    albumButton.appendChild(numberBtn)
    albumButton.appendChild(titleText);
    albumButton.appendChild(deleteBtn212);

    const tracksContainer = document.createElement('div');
    tracksContainer.className = 'tracks-container'; 
    tracksContainer.style.maxHeight = '0'; 
    tracksContainer.style.overflow = 'hidden';
    tracksContainer.style.display = 'flex'; 
    tracksContainer.style.flexDirection = 'column'; 

    const der = track.album.sort((a, b) => a.title.localeCompare(b.title));

    let trackIndex9 = track.album.length;
    der.forEach(albom => {
        const trackContainer = document.createElement('div');
        trackContainer.style.display = 'flex'; 
        trackContainer.style.alignItems = 'center';
        trackContainer.style.justifyContent = 'space-between';
        trackContainer.style.width = '100%'; 
        trackContainer.style.marginBottom = '8px';

        const buttonContainer = document.createElement('div');
    buttonContainer.style.display = 'flex';
    buttonContainer.style.gap = '10px';

                const trackNumberBtn = document.createElement('span');
trackNumberBtn.textContent = `${trackIndex9--}`;
trackNumberBtn.className = 'num-btn';
trackNumberBtn.style.marginRight = '10px';
trackContainer.appendChild(trackNumberBtn);



      const deleteBtn221 = document.createElement('button');
        deleteBtn221.textContent = '-';
        deleteBtn221.className = 'delete-button';
        deleteBtn221.setAttribute('aria-label', `Удалить ${albom.title}`);

        const restoreBtn0 = document.createElement('button');
        restoreBtn0.className = 'restore-button';
        restoreBtn0.setAttribute('aria-label', `Восстановить ${albom.title}`);
        restoreBtn0.disabled = false; 
        restoreBtn0.textContent = '+'; 

        restoreBtn0.addEventListener('click', (event) => {
            event.stopPropagation(); 
            const disabledTitlesRaw0911 = localStorage.getItem('disabled') || '';
            const disabledTitles0911 = disabledTitlesRaw0911.split('\n').map(s => s.trim()).filter(s => s.length > 0);
            const updatedDisabledTitles13 = disabledTitles0911.filter(title => title.toLowerCase() !== albom.title.toLowerCase());
            localStorage.setItem('disabled', updatedDisabledTitles13.join('\n'));
            btnf2.disabled = false;
            restoreBtn0.remove();
          buttonContainer.appendChild(deleteBtn221);

            

         
          
        });

        const btnf2 = document.createElement('button');
        btnf2.textContent = albom.title;
        btnf2.className = 'track-button';
        btnf2.title = `Воспроизвести ${albom.title}`;
        btnf2.setAttribute('aria-label', `Воспроизвести ${albom.title}`);
        btnf2.onclick = () => {
          console.log(albomsBaze.indexOf(track))
          console.log(track.album.indexOf(albom))
          playAlbomTrack(albomsBaze.indexOf(track), track.album.indexOf(albom));
       };

        

        const disabledTitlesRaw67 = localStorage.getItem('disabled') || '';
        const disabledTitles67 = disabledTitlesRaw67.split('\n').map(s => s.trim()).filter(s => s.length > 0);
        if (disabledTitles67.map(title => title.toLowerCase()).includes(albom.title.toLowerCase())) {
            btnf2.disabled = true;
            buttonContainer.appendChild(restoreBtn0);
        }

        

        
        deleteBtn221.addEventListener('click', (event) => {
            event.stopPropagation(); 
            btnf2.disabled = true;
            const btnfDisabled = btnf2.textContent;
            const disabledTitlesRaw = localStorage.getItem('disabled') || '';
            const disabledTitles = disabledTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);
            localStorage.setItem('disabled', btnfDisabled + '\n' + disabledTitles.join('\n'));
            console.log(`Трек "${btnfDisabled}" отключен.`); 
            buttonContainer.appendChild(restoreBtn0);
            deleteBtn221.remove()
        });


      buttonContainer.appendChild(deleteBtn221);
        trackContainer.appendChild(btnf2);
        trackContainer.appendChild(buttonContainer);
        tracksContainer.appendChild(trackContainer);
    });

albumButton.addEventListener('click', createAlbumToggleHandler(albumButton, tracksContainer));

    albumDiv.append(albumButton);
    albumDiv.appendChild(tracksContainer);

    return albumDiv;
}

  document.getElementById('sort-button').addEventListener('click', (event) => {
   event.preventDefault();  
   favoritesContainer.innerHTML = '';
   const favoriteTitlesRaw = localStorage.getItem('trek') || '';
   const favoriteTitles = favoriteTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);

   favoriteTitles.sort((a, b) => a.localeCompare(b));
   console.log(favoriteTitles)

   favoriteTitles.forEach((trackSort, index) => {
     console.log(trackSort)
       const track = tracks.find(t => t.title === trackSort);
       console.log(track)
       const clearTrackRowToSort = NumbercreateTrackRow(track, index, favoriteTitles);
       favoritesContainer.appendChild(clearTrackRowToSort);
   });

   albomContainer.innerHTML = '';

   const albomTitlesRaw = localStorage.getItem('trekA') || '';
   const AlbomTitles = albomTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);

   AlbomTitles.sort((a, b) => a.localeCompare(b));
   console.log(AlbomTitles)

    const albumObjects = AlbomTitles.map(title => albomsBaze.find(a => a.title === title)).filter(a => a);

   albumObjects.sort((a, b) => a.title.localeCompare(b.title));

   AlbomTitles.forEach((AlbomSort, index) => {
       console.log(AlbomSort)
       const AlbomTrack = albomsT.find(t => t.title === AlbomSort);
       console.log(AlbomTrack)
       const AclearTrackRowToSort = ANumbercreateTrackRow(AlbomTrack , index, albumObjects);
       console.log(AclearTrackRowToSort)
       albomContainer.appendChild(AclearTrackRowToSort);
   });

  })

    function DateNumbercreateTrackRow(track, index, totalTrack) {
      const row = document.createElement('div');
      row.className = 'track-row';

      const albomTitlesRaw = localStorage.getItem('trekA') || '';
   const AlbomTitles = albomTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);




      

      const trackBtn = document.createElement('button');
      trackBtn.className = 'track-button';
      trackBtn.textContent = track.title;
      trackBtn.title = `Воспроизвести ${track.title}`;
      trackBtn.disabled = !track.url;
      trackBtn.onclick = () => {
          playTrack(tracks.indexOf(track));
      };
      const deleteBtn56 = document.createElement('button');
      deleteBtn56.textContent = '-';
      deleteBtn56.className = 'delete-button';
      deleteBtn56.setAttribute('aria-label', `Удалить ${track.title}`);

      deleteBtn56.addEventListener('click', (event) => {
        event.stopPropagation();
        const favoriteTitlesRawUpdate = localStorage.getItem('trek') || '';
        const rawFilterDate = favoriteTitlesRawUpdate.split('\n').map(s => s.trim()).filter(s => s.length > 0);
        const updatedFavorites = rawFilterDate.filter(fav => fav !== track.title);
        localStorage.setItem('trek', updatedFavorites.join('\n'));
        console.log(`Трек "${track.title}" удален из избранного.`); 
        DateUpdateFunction();
      });

      const numberBtn = document.createElement('button');
            numberBtn.className = 'num-btn';
            numberBtn.textContent = totalTrack.length - index;
            numberBtn.style.marginRight = '5px'




      row.appendChild(numberBtn)
      row.appendChild(trackBtn);
      row.appendChild(deleteBtn56);

      return row;

    }




    function DateAlbom(track, index, trackFull) {
      const albomTitlesRaw = localStorage.getItem('trekA') || '';
   const AlbomTitles = albomTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);
  console.log('стоп')





      monthDay = {
        '01': 'янв',
        '02': 'фев',
        '03': 'мар',
        '04': 'апр',
        '05': 'май',
        '06': 'июн',
        '07': 'июл',
        '08': 'авг',
        '09': 'сен',
        '10': 'окт',
        '11': 'нояб',
        '12': 'дек',


      }

       const albumDiv = document.createElement('div');
    albumDiv.style.marginBottom = '16px';
    albumDiv.style.display = 'flex';
    albumDiv.style.flexDirection = 'column';


      const numberBtn = document.createElement('button');
            numberBtn.className = 'num-btn09';
            numberBtn.textContent = trackFull.length - index;
            numberBtn.style.marginRight = '5px'


      const titleText = document.createElement('span');
    titleText.className = 'title-text';
    titleText.textContent = track.title;

    const albomRowDate = document.createElement('div');
    albomRowDate.style.display = 'flex';
    albomRowDate.style.gap = '16px';

    const albumButton = document.createElement('button');
    albumButton.className = 'album-title';
    albumButton.setAttribute('aria-expanded', 'false');
    albumButton.style.width = '100%';
    albumButton.style.textAlign = 'left';
    albumButton.appendChild(numberBtn)




const deleteBtn2124 = document.createElement('button');
    deleteBtn2124.textContent = '-';
    deleteBtn2124.className = 'delete-button';
    deleteBtn2124.setAttribute('aria-label', `Удалить ${track.title}`);

    deleteBtn2124.addEventListener('click', () => {
        const updatedFavorites = AlbomTitles.filter(fav => fav !== track.title);
        localStorage.setItem('trekA', updatedFavorites.join('\n'));
        console.log(`Альбом "${track.title}" удален из избранного.`); 
        DateUpdateFunction();
    });

    albumButton.appendChild(deleteBtn2124)





    const tracksContainer = document.createElement('div');
    tracksContainer.className = 'tracks-container'; 
    tracksContainer.style.maxHeight = '0'; 
    tracksContainer.style.overflow = 'hidden';

    track.album.sort((a, b) => new Date(b.titleDate) - new Date(a.titleDate));

    track.album.forEach((albom, albomIndex) => {
      const albomRow = document.createElement('div');
    albomRow.style.display = 'flex';
    albomRow.style.gap = '16px'




    const trackNumberBtn = document.createElement('span');
trackNumberBtn.textContent = `${track.album.length - albomIndex}`;
trackNumberBtn.className = 'num-btn';
trackNumberBtn.style.marginRight = '10px';
albomRow.appendChild(trackNumberBtn);

    





     

      const btnf290 = document.createElement('button');
      btnf290.textContent = albom.title;
      btnf290.className = 'track-button';
      btnf290.title = `Воспроизвести ${albom.title}`;
      btnf290.setAttribute('aria-label', `Воспроизвести ${albom.title}`);
       btnf290.onclick = () => {
    
    const albumIndex = albomsBaze.indexOf(track);
    const trackIndex = track.album.indexOf(albom);
    console.log("Album", albumIndex);
    console.log("Track", trackIndex);
    playAlbomTrack(albumIndex, trackIndex);
};



      const restoreBtn0 = document.createElement('button');
        restoreBtn0.className = 'restore-button';
        restoreBtn0.setAttribute('aria-label', `Восстановить ${albom.title}`);
        restoreBtn0.disabled = false; 
        restoreBtn0.textContent = '+'; 

        const deleteBtn2210 = document.createElement('button');
      deleteBtn2210.textContent = '-';
      deleteBtn2210.className = 'delete-button';
      deleteBtn2210.setAttribute('aria-label', `Удалить ${albom.title}`);

      deleteBtn2210.addEventListener('click', (event) => {
        event.stopPropagation(); 
        btnf290.disabled = true;
        const btnfDisabled = btnf290.textContent;
        const disabledTitlesRaw = localStorage.getItem('disabled') || '';
        const disabledTitles = disabledTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);
        localStorage.setItem('disabled', btnfDisabled + '\n' + disabledTitles.join('\n'));
        console.log(`Трек "${btnfDisabled}" отключен.`); 
        deleteBtn2210.remove()
        albomRow.appendChild(restoreBtn0)


      });

        restoreBtn0.addEventListener('click', (event) => {
          event.stopPropagation(); 
          const disabledTitlesRaw0911 = localStorage.getItem('disabled') || '';
      const disabledTitles0911 = disabledTitlesRaw0911.split('\n').map(s => s.trim()).filter(s => s.length > 0);
            const updatedDisabledTitles13 = disabledTitles0911.filter(title => title.toLowerCase() !== albom.title.toLowerCase());
            localStorage.setItem('disabled', updatedDisabledTitles13.join('\n'));
            btnf290.disabled = false;
            albomRow.appendChild(deleteBtn2210)
            restoreBtn0.remove()

    
        })



        const disabledTitlesRaw67 = localStorage.getItem('disabled') || '';
      const disabledTitles67 = disabledTitlesRaw67.split('\n').map(s => s.trim()).filter(s => s.length > 0);
      console.log(disabledTitles67)

      
      albomRow.appendChild(btnf290)

      tracksContainer.appendChild(albomRow)

      if (disabledTitles67.map(title => title.toLowerCase()).includes(albom.title.toLowerCase())) {
        btnf290.disabled = true;
        console.log("Сработало")
        deleteBtn2210.remove()
        albomRow.appendChild(restoreBtn0)
      } else {
        albomRow.appendChild(deleteBtn2210)
      }

    })
    albomRowDate.appendChild(titleText)
    albumButton.appendChild(albomRowDate)


albumButton.addEventListener('click', createAlbumToggleHandler(albumButton, tracksContainer));


      albumDiv.appendChild(albumButton)
      albumDiv.appendChild(tracksContainer)

      return albumDiv
    }




  document.getElementById('sort-button').addEventListener('click', (event) => {
   event.preventDefault();  

   isSortedAlphabetically = true;
  isSortedByDate = false;
    peremesh = false;

   favoritesContainer.innerHTML = '';
   const favoriteTitlesRaw = localStorage.getItem('trek') || '';
   const favoriteTitles = favoriteTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);

   favoriteTitles.sort((a, b) => a.localeCompare(b));
   console.log(favoriteTitles)

   favoriteTitles.forEach((trackSort, index) => {
     console.log(trackSort)
       const track = tracks.find(t => t.title === trackSort);
       console.log(track)
       const clearTrackRowToSort = NumbercreateTrackRow(track, index, favoriteTitles);
       favoritesContainer.appendChild(clearTrackRowToSort);
   });

   albomContainer.innerHTML = '';

   const albomTitlesRaw = localStorage.getItem('trekA') || '';
   const AlbomTitles = albomTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);

   AlbomTitles.sort((a, b) => a.localeCompare(b));
   console.log(AlbomTitles)

   AlbomTitles.forEach((AlbomSort, index) => {
       console.log(AlbomSort)
       const AlbomTrack = albomsBaze.find(t => t.title === AlbomSort);
       console.log(AlbomTrack)
       const AclearTrackRowToSort = ANumbercreateTrackRow(AlbomTrack, index, AlbomTitles);
       console.log(AclearTrackRowToSort)
       albomContainer.appendChild(AclearTrackRowToSort);
   });

});

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}





document.getElementById('sort-button-baze').addEventListener('click', () => {
    peremesh = true;
  isSortedAlphabetically = false;
  isSortedByDate = false;

    favoritesContainer.innerHTML = '';
    albomContainer.innerHTML = '';
    
    const favoriteTitlesRaw = localStorage.getItem('trek') || '';
    const favoriteTitles = favoriteTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);

    // Проверяем, что favoriteTitles является массивом и перемешиваем
    if (Array.isArray(favoriteTitles)) {
        shuffledFavorites = shuffleArray(favoriteTitles);
    } else {
        console.error("favoriteTitles не является массивом:", favoriteTitles);
        shuffledFavorites = []; // Устанавливаем пустой массив
    }

    const favoriteTracks = shuffledFavorites
        .map(title => tracks.find(t => t.title === title))
        .filter(t => t && t.url);

    const albomTitlesRaw = localStorage.getItem('trekA') || '';
    const AlbomTitles = albomTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);

    shuffledAlbums = shuffleArray(AlbomTitles);
    shuffledAlbumTracks = {};
  
    let favoriteIndex = favoriteTracks.length;
    let albumIndex = AlbomTitles.length;

    shuffledAlbums.forEach((albom) => {
        const albomMass = albomsBaze.find(a => a.title === albom);
        if (!albomMass) return;

        // Перемешиваем треки альбома
        const shuffledAlbumTracksList = shuffleArray([...albomMass.album]);
        shuffledAlbumTracks[albom] = shuffledAlbumTracksList;

        const albumDiv = document.createElement('div');
        albumDiv.style.marginBottom = '16px';
        albumDiv.style.display = 'flex';
        albumDiv.style.flexDirection = 'column';

        const titleText = document.createElement('span');
        titleText.className = 'title-text';
        titleText.textContent = albomMass.title;

        const albumNumber = document.createElement('span');
        albumNumber.textContent = `${albumIndex--}`;
        albumNumber.style.fontWeight = 'bold';
        albumNumber.className = 'num-btn09';
        albumNumber.style.marginRight = '10px';

        const deleteBtn2 = document.createElement('button');
        deleteBtn2.textContent = '-';
        deleteBtn2.className = 'delete-button';
        deleteBtn2.setAttribute('aria-label', `Удалить ${albomMass.title}`);

        deleteBtn2.addEventListener('click', () => {
            const rawFilter = albomTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);
            const updatedFavorites = rawFilter.filter(fav => fav !== albomMass.title);
            localStorage.setItem('trekA', updatedFavorites.join('\n'));
            console.log(`Альбом "${albomMass.title}" удален из избранного.`);
            UpdateFunction();
        });

        const albumButton = document.createElement('button');
        albumButton.className = 'album-title';
        albumButton.setAttribute('aria-expanded', 'false');
        albumButton.style.width = '100%';
        albumButton.style.textAlign = 'left';
        albumButton.appendChild(albumNumber);
        albumButton.appendChild(deleteBtn2);
        albumButton.appendChild(titleText);

        const tracksContainer = document.createElement('div');
        tracksContainer.className = 'tracks-container';
        tracksContainer.style.maxHeight = '0';
        tracksContainer.style.overflow = 'hidden';

        let trackIndex = shuffledAlbumTracksList.length;

        shuffledAlbumTracksList.forEach(vf => {
            const trackContainer = document.createElement('div');
            trackContainer.style.display = 'flex';
            trackContainer.style.alignItems = 'center';
            trackContainer.style.justifyContent = 'space-between';
            trackContainer.style.marginBottom = '10px';

            const trackNumberBtn = document.createElement('span');
            trackNumberBtn.textContent = `${trackIndex--}`;
            trackNumberBtn.className = 'num-btn';
            trackNumberBtn.style.marginRight = '10px';
            trackContainer.appendChild(trackNumberBtn);

            const btnf = document.createElement('button');
            btnf.textContent = vf.title;
            btnf.className = 'track-button';
            btnf.title = `Воспроизвести ${vf.title}`;
            btnf.setAttribute('aria-label', `Воспроизвести ${vf.title}`);

            btnf.onclick = () => {
                const albumIndex = albomsBaze.indexOf(albomMass);
                const trackIndex = shuffledAlbumTracksList.indexOf(vf);
                playAlbomTrack(albumIndex, trackIndex);
            };

            const deleteBtn22 = document.createElement('button');
            deleteBtn22.textContent = '-';
            deleteBtn22.className = 'delete-button12';
            deleteBtn22.setAttribute('aria-label', `Удалить ${vf.title}`);

            const buttonContainer = document.createElement('div');
            buttonContainer.style.display = 'flex';
            buttonContainer.style.gap = '10px';

            const disabledTitlesRaw = localStorage.getItem('disabled') || '';
            const disabledTitles = disabledTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);

            if (disabledTitles.map(title => title.toLowerCase()).includes(vf.title.toLowerCase())) {
                btnf.disabled = true;
                
                const restoreBtn89 = document.createElement('button');
                restoreBtn89.textContent = '+';
                restoreBtn89.className = 'restore-button';
                restoreBtn89.setAttribute('aria-label', `Восстановить ${vf.title}`);
                
                restoreBtn89.addEventListener('click', (event) => {
                    event.preventDefault();
                    const disabledTitlesRaw09 = localStorage.getItem('disabled') || '';
                    const disabledTitles09 = disabledTitlesRaw09.split('\n').map(s => s.trim()).filter(s => s.length > 0);
                    const updatedDisabledTitles = disabledTitles09.filter(title => title.toLowerCase() !== vf.title.toLowerCase());
                    localStorage.setItem('disabled', updatedDisabledTitles.join('\n'));
                    btnf.disabled = false;
                    restoreBtn89.remove();
                    buttonContainer.appendChild(deleteBtn22);
                });

                buttonContainer.appendChild(restoreBtn89);
            } else {
                buttonContainer.appendChild(deleteBtn22);
            }

            deleteBtn22.addEventListener('click', (event) => {
                event.stopPropagation();
                btnf.disabled = true;
                const btnfDisabled = btnf.textContent;
                const disabledTitlesRaw = localStorage.getItem('disabled') || '';
                const disabledTitles = disabledTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);
                localStorage.setItem('disabled', btnfDisabled + '\n' + disabledTitles.join('\n'));
                
                const restoreBtn89 = document.createElement('button');
                restoreBtn89.textContent = '+';
                restoreBtn89.className = 'restore-button';
                restoreBtn89.setAttribute('aria-label', `Восстановить ${vf.title}`);
                
                restoreBtn89.addEventListener('click', (event) => {
                    event.preventDefault();
                    const disabledTitlesRaw09 = localStorage.getItem('disabled') || '';
                    const disabledTitles09 = disabledTitlesRaw09.split('\n').map(s => s.trim()).filter(s => s.length > 0);
                    const updatedDisabledTitles = disabledTitles09.filter(title => title.toLowerCase() !== vf.title.toLowerCase());
                    localStorage.setItem('disabled', updatedDisabledTitles.join('\n'));
                    btnf.disabled = false;
                    restoreBtn89.remove();
                });
                
                buttonContainer.appendChild(restoreBtn89);
            });

            trackContainer.appendChild(btnf);
            trackContainer.appendChild(buttonContainer);
            tracksContainer.appendChild(trackContainer);
        });

        albumButton.addEventListener('click', createAlbumToggleHandler(albumButton, tracksContainer));
        albumDiv.appendChild(albumButton);
        albumDiv.appendChild(tracksContainer);
        albomContainer.appendChild(albumDiv);
    });

    // Отображаем перемешанные треки
    if (favoriteTracks.length === 0) {
        favoritesContainer.style.color = '#363E6B';
        favoritesContainer.style.padding = '10px';
        favoritesContainer.style.fontWeight = '600';
        favoritesContainer.style.userSelect = 'none';
    } else {
        favoriteTracks.forEach((track, index) => {
            const trackContainer = document.createElement('div');
            trackContainer.style.display = 'flex';
            trackContainer.style.alignItems = 'center';
            trackContainer.style.justifyContent = 'space-between';

            const btn = document.createElement('button');
            btn.textContent = track.title;
            btn.className = 'track-button';
            btn.disabled = !track.url;
            btn.title = `Воспроизвести ${track.title}`;
            btn.setAttribute('aria-label', `Воспроизвести ${track.title}`);

            const numberBtn = document.createElement('button');
            numberBtn.className = 'num-btn';
            numberBtn.textContent = favoriteIndex--;
            numberBtn.style.marginRight = '5px';

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = '-';
            deleteBtn.className = 'delete-button';
            deleteBtn.setAttribute('aria-label', `Удалить ${track.title}`);

            deleteBtn.addEventListener('click', (event) => {
                event.stopPropagation();
                const rawFilter = favoriteTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);
                const updatedFavorites = rawFilter.filter(fav => fav !== track.title);
                localStorage.setItem('trek', updatedFavorites.join('\n'));
                console.log(`Трек "${track.title}" удален из избранного.`);
                UpdateFunction();
            });

            btn.onclick = () => {
                const trackIndex = tracks.findIndex(t => t.title === track.title);
                playTrack(trackIndex);
            };

            const buttonContainer = document.createElement('div');
            buttonContainer.style.display = 'flex';
            buttonContainer.style.gap = '10px';
            buttonContainer.appendChild(deleteBtn);

            trackContainer.appendChild(numberBtn);
            trackContainer.appendChild(btn);
            trackContainer.appendChild(buttonContainer);
            favoritesContainer.appendChild(trackContainer);
        });
    }
});





window.addEventListener('load', function() {
    UpdateFunction();
});



document.getElementById('sort-button-data').addEventListener('click', (event) => {
   event.preventDefault();
   favoritesContainer.innerHTML = '';
   albomContainer.innerHTML = '';

   isSortedAlphabetically = false;
  isSortedByDate = true;
  peremesh = false;

   const filteredUpdatedFavorites = [];
   const aTitlesRaw = localStorage.getItem('trek') || '';
   const ATitles = aTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);
   ATitles.forEach(trackBear => {
      const foundTrack = tracks.find(t => t.title === trackBear);
      if (foundTrack) {
          filteredUpdatedFavorites.push(foundTrack);
      }
   });

   console.log(filteredUpdatedFavorites)

   filteredUpdatedFavorites.sort((a, b) => new Date(b.date) - new Date(a.date));

   filteredUpdatedFavorites.forEach((favoritesTrek, index) => {
      console.log(favoritesTrek)
      veu = DateNumbercreateTrackRow(favoritesTrek, index, filteredUpdatedFavorites)
      favoritesContainer.appendChild(veu)

   })

   albomContainer.innerHTML = '';

   const AlbomfilteredUpdatedFavorites = [];
   const AlbomTitlesRaw = localStorage.getItem('trekA') || '';
   const AlbomTitles = AlbomTitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);

   AlbomTitles.forEach(trackBearA => {
      const foundAlbom = albomsBaze.find(t => t.title === trackBearA);
      if (foundAlbom) {
          AlbomfilteredUpdatedFavorites.push(foundAlbom);
      }
   });

   AlbomfilteredUpdatedFavorites.sort((a, b) => new Date(b.titleDate) - new Date(a.titleDate));

   AlbomfilteredUpdatedFavorites.forEach((filteredAlbom, index) => {
    tea = DateAlbom(filteredAlbom, index, AlbomfilteredUpdatedFavorites)
    albomContainer.appendChild(tea)
   })

});

UpdateFunction();

audioPlayer.addEventListener('ended', () => {
    const { albumIndex, trackIndex } = currentTrackIndex;

    if (currentHighlightedElement) {
        currentHighlightedElement.classList.remove('highlight');
        currentHighlightedElement = null;
    }

    if (albumIndex !== -1) {
        // Воспроизведение треков из альбома
        const album = albomsBaze[albumIndex];
        let trackList = album.album;
        
        // Используем перемешанные треки если включено
        if (peremesh && shuffledAlbumTracks[album.title]) {
            trackList = shuffledAlbumTracks[album.title];
        }
        
        const nextTrackIndex = (trackIndex + 1) % trackList.length;
        playAlbomTrack(albumIndex, nextTrackIndex);
    } else {
        // Воспроизведение треков из избранного
        let trackList = [];
        
        if (peremesh && shuffledFavorites.length > 0) {
            // Используем перемешанный список
            trackList = shuffledFavorites.map(title => 
                tracks.find(t => t.title === title)
            ).filter(t => t);
        } else {
            const TitlesRaw = localStorage.getItem('trek') || '';
            const Titles = TitlesRaw.split('\n').map(s => s.trim()).filter(s => s.length > 0);
            trackList = Titles.map(title => 
                tracks.find(t => t.title === title)
            ).filter(t => t);
            
            if (isSortedAlphabetically) {
                trackList.sort((a, b) => a.title.localeCompare(b.title));
            } 
            if (isSortedByDate) {
                trackList.sort((a, b) => new Date(b.date) - new Date(a.date));
            }
        }
        
        const currentTrack = tracks[AboutTrackIndex];
        const currentIndex = trackList.findIndex(t => t.title === currentTrack.title);
        const nextIndex = (currentIndex + 1) % trackList.length;
        
        if (trackList[nextIndex]) {
            const nextTrackIndex = tracks.findIndex(t => t.title === trackList[nextIndex].title);
            playTrack(nextTrackIndex);
        }
    }
});



