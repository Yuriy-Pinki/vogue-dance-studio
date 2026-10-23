import type { Dictionary } from "./types";

export const ru: Dictionary = {
  meta: {
    brand: "Vogue by Verushka Bonchinche",
    title: "Vogue by Verushka Bonchinche | Студия танца в Варшаве и онлайн",
    description:
      "Vogue Femme с Verushka Bonchinche: танец вог в Варшаве и онлайн. House of Bonchinche — группы, мастер-классы и онлайн-курсы.",
  },
  nav: {
    brand: "Bonchinche",
    links: { about: "История", classes: "Программы", faq: "Вопросы", contacts: "Контакты" },
    cta: "Записаться",
    languageLabel: "Язык сайта",
    languages: { ru: "RU", en: "EN" },
    newTabHint: "(откроется в новой вкладке)",
  },
  hero: {
    metaTags: ["Vogue Femme", "Варшава · весь мир", "Студия / Онлайн"],
    eyebrow: "Mother Дома Бончинче · основатель Vogue в Беларуси",
    titleWords: ["Vogue"],
    signature: "by Verushka Bonchinche",
    subtitle:
      "Линия. Подача. Уверенность. Группы в Варшаве, индивидуальные занятия и онлайн-клубы — от первого Catwalk до выхода в категорию.",
    ctaPrimary: "Записаться",
    ctaSecondary: "История",
    newTabHint: "(откроется в новой вкладке)",
    scrollHint: "Листай",
    locationBadge: "Warszawa • Brzeska 18",
    seasonBadge: "Сезон Осень / Зима • Открыта запись",
    imageCaption: "Look 01 · Верушка Бончинче",
    marquee: [
      "Hands Performance",
      "Catwalk",
      "Duckwalk",
      "Spin & Dip",
      "Floor Performance",
      "Tens Across the Board",
    ],
  },
  about: {
    eyebrow: "The Mother & The House",
    title: "Мать и Дом",
    quote:
      "Занятия у меня — не только про танец и культуру, но и про тёплое, поддерживающее комьюнити.",
    quoteAuthor: "Верушка Бончинче",
    story: [
      "Основатель культуры Vogue в Беларуси. Mother Дома Бончинче. Сегодня — Варшава: студия и онлайн для учеников по всему миру.",
      "Дом в Ballroom — это семья. Mother выводит своих детей на балы и передаёт главное: технику, стиль, характер. Дом Бончинче — комьюнити, где растут уверенность и собственный почерк.",
      "Вне зала — артист, хореограф, постановщик и продюсер: шоу, клипы, реклама, показы мод. В жюри — конкурсы, фестивали и Vogue-балы.",
    ],
    factsTitle: "Досье",
    facts: [
      { label: "Основатель", value: "Культура Vogue в Беларуси" },
      { label: "Дом", value: "Mother Дома Бончинче" },
      { label: "База", value: "Варшава · весь мир" },
      { label: "Роли", value: "Артист · хореограф · постановщик · продюсер" },
      { label: "Жюри", value: "Конкурсы, фестивали, Vogue-балы" },
    ],
    gallery: ["Look 02 · Floor", "Look 03 · House of Bonchinche", "Look 04 · Arms"],
  },
  classes: {
    eyebrow: "Программы · Студия / Онлайн",
    title: "Выбери свой выход",
    intro: "Формат, расписание, цена — без сносок. Оставь заявку: Верушка свяжется и поможет с выбором.",
    scheduleLabel: "Расписание",
    pricesLabel: "Стоимость",
    bookCta: "Записаться",
    newTabHint: "(откроется в новой вкладке)",
    items: {
      "offline-beginners": {
        format: "Офлайн · Варшава",
        level: "Начинающий уровень",
        title: "Vogue с нуля",
        description: "Опыт не нужен. Культура, база и первая уверенная линия — с первого занятия.",
        schedule: ["Пн / Ср · 19:20–20:20", "Brzeska 18, Варшава"],
        prices: [
          { label: "Разовое", value: "90 PLN" },
          { label: "4 занятия", value: "300 PLN" },
          { label: "8 занятий", value: "450 PLN" },
        ],
      },
      "offline-middle": {
        format: "Офлайн · Варшава",
        level: "Средний уровень",
        title: "Развитие в Vogue",
        description: "База уже в теле — оттачиваем линии и растём в стиле. С собой: наколенники и сменная обувь.",
        schedule: ["Пн / Ср · 20:30–21:40", "Brzeska 18, Варшава"],
        prices: [
          { label: "Разовое", value: "90 PLN" },
          { label: "4 занятия", value: "300 PLN" },
          { label: "8 занятий", value: "450 PLN" },
        ],
      },
      individual: {
        format: "Офлайн / Онлайн",
        level: "Индивидуально",
        title: "Индивидуальные занятия",
        description: "База, подстиль или постановка — под твой запрос. Не знаешь, с чего начать? Верушка подскажет.",
        schedule: ["По договорённости", "Brzeska 18 или онлайн"],
        prices: [
          { label: "1 занятие", value: "280 PLN" },
          { label: "4 занятия", value: "1000 PLN" },
        ],
      },
      "runway-club": {
        format: "Онлайн · Telegram",
        level: "Начинающий / Средний",
        title: "Runway Online Club",
        description:
          "Походка и позирование European Runway: работа бёдер, уверенность на каблуках, выигрышные ракурсы в кадре — и выход на бал.",
        schedule: ["Записанные уроки + живые эфиры", "Старт потока — уточняется при записи"],
        prices: [{ label: "1 месяц", value: "50 €" }],
      },
      "old-way-club": {
        format: "Онлайн · Telegram",
        level: "Открытый уровень",
        title: "Old Way Online Club",
        description: "Old Way — первый подстиль Vogue, с которого всё началось. Чёткость, грация, стиль. Для начинающих и продолжающих.",
        schedule: ["Записанные уроки + живые эфиры", "Старт потока — уточняется при записи"],
        prices: [{ label: "2 месяца", value: "90 €" }],
      },
    },
  },
  faq: {
    eyebrow: "FAQ · Новичкам",
    title: "Перед первым выходом",
    items: [
      {
        question: "Нужен ли опыт?",
        answer:
          "Нет. Начинающий уровень — с нуля: Пн / Ср, 19:20–20:20, Brzeska 18. База уже есть — средний уровень: Пн / Ср, 20:30–21:40. Сомневаешься — начни с индивидуального занятия.",
      },
      {
        question: "Что надеть? Нужны ли каблуки?",
        answer:
          "Удобная тянущаяся одежда, в которой ты себе нравишься, и сменная обувь — кроссовки или носки. Каблуки — по желанию. На среднем уровне обязательны сменная обувь и наколенники. Приходи за 10 минут: разминку не пропускаем. Питьевая вода в зале есть.",
      },
      {
        question: "Как устроены онлайн-клубы?",
        answer:
          "Закрытая Telegram-группа: записанные уроки, живые эфиры с лекциями и практикой, музыка для тренировок и подробный разбор домашних заданий. Runway Online Club — 50 € в месяц, Old Way Online Club — 90 € за 2 месяца.",
      },
      {
        question: "Как найти зал?",
        answer: "Brzeska 18, Варшава. Маршрут — по кнопке «Маршрут» в блоке «Контакты». Приходи за 10 минут до начала.",
      },
      {
        question: "Можно подарить занятие?",
        answer: "Да. Подарочный сертификат — на любые занятия Верушки. Оставь заявку через форму, и она свяжется, чтобы всё уточнить.",
      },
    ],
  },
  footer: {
    eyebrow: "Контакты · Локация",
    title: "До встречи на подиуме",
    studio: {
      label: "Студия",
      address: "Brzeska 18",
      city: "Warszawa, Polska",
      note: "Группы и индивидуальные занятия",
      bookCta: "Записаться",
      mapsCta: "Маршрут",
    },
    socialTitle: "На связи",
    socials: {
      instagram: { label: "Instagram", handle: "@verushkabonchinche" },
      telegram: { label: "Telegram", handle: "@verushkabonchinche" },
    },
    collab: "Открыта к международным проектам и коллаборациям",
    wordmark: "Bonchinche",
    copyright: "© {year} House of Bonchinche. Все права защищены.",
    credits: [
      { role: "Mother · хореография", name: "Verushka Bonchinche" },
      { role: "Фото", name: "Архив Verushka Bonchinche" },
    ],
    backToTop: "Наверх",
    newTabHint: "(откроется в новой вкладке)",
  },
};
