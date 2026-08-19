/* =========================================
   DIRECTIONS (8 направлений)
========================================= */

const directions = {
    modeling: {
        name: "3D-моделирование",
        icon: "",
        color: "#e67e22",
        description: "Тебе может понравиться создавать трёхмерные объекты, персонажей и окружение для игр, фильмов или визуализаций.",
        starter: "создать 3D-модель простого предмета в Blender или освоить базовые инструменты моделирования."
    },
    uiux: {
        name: "UX/UI дизайн",
        icon: "",
        color: "#ff4fa2",
        description: "У тебя может быть сильная тяга к созданию удобных и красивых интерфейсов, продумыванию пользовательского опыта.",
        starter: "разработать дизайн-макет мобильного приложения или провести редизайн существующего сайта."
    },
    digitalArt: {
        name: "Цифровое рисование",
        icon: "",
        color: "#ff9f43",
        description: "Тебе может быть близко визуальное творчество: персонажи, иллюстрации, атмосфера и создание собственного художественного мира.",
        starter: "нарисовать серию персонажей или иллюстрацию к своей любимой истории."
    },
    python: {
        name: "Программирование на Python",
        icon: "",
        color: "#4b7bec",
        description: "Тебе может понравиться создавать программы, разбираться в логике и превращать идеи в работающие системы.",
        starter: "написать небольшой Python-проект, Telegram-бота или программу, которая решает реальную задачу."
    },
    ai: {
        name: "Нейросети и AI инструменты",
        icon: "",
        color: "#8e44ad",
        description: "Тебе интересно использовать нейросети как инструмент для идей, обучения, творчества и ускорения работы.",
        starter: "собрать личный AI-workflow для учёбы или творчества и сравнить разные способы постановки задач нейросети."
    },
    web: {
        name: "Web-разработка",
        icon: "",
        color: "#00c896",
        description: "Тебе интересно сочетать технологию и визуальный результат: создавать сайты и интерфейсы, которыми удобно пользоваться.",
        starter: "создать личную веб-страницу или интерактивное мини-приложение на HTML, CSS и JavaScript."
    },
    cybersecurity: {
        name: "Кибербезопасность",
        icon: "",
        color: "#e74c3c",
        description: "Тебе интересно защищать системы, искать уязвимости и обеспечивать безопасность данных в цифровом мире.",
        starter: "изучить основы безопасности веб-приложений или попробовать себя в CTF-соревнованиях."
    },
    ml: {
        name: "Введение в машинное обучение",
        icon: "",
        color: "#2ecc71",
        description: "Тебе интересно создавать алгоритмы, которые учатся на данных и принимают решения, анализировать закономерности.",
        starter: "создать простую модель машинного обучения с использованием библиотеки scikit-learn или TensorFlow."
    }
};

/* =========================================
   PROFILE ORDER
========================================= */

const profileOrder = [
    "modeling",
    "uiux",
    "digitalArt",
    "python",
    "ai",
    "web",
    "cybersecurity",
    "ml"
];

/* =========================================
   QUESTIONS (15 вопросов)
========================================= */

const questions = [
    /* 1 */
    {
        type: "single",
        title: "Какой тип занятий тебе нравится больше всего?",
        options: [
            {
                text: "Решать логические задачи",
                scores: { python: 2, web: 0, uiux: 0, digitalArt: 0, modeling: 0, ai: 0, cybersecurity: 1},
                vote: "+1 к Программированию!"
            },
            {
                text: "Что-то придумывать с нуля",
                scores: { python: 0, web: 0, uiux: 2, digitalArt: 0, modeling: 0, ai: 1, cybersecurity: 0},
                vote: "+1 к UI"
            },
            {
                text: "Рисовать или создавать красивые картинки",
                scores: { python: 0, web: 0, uiux: 1, digitalArt: 2, modeling: 0, ai: 0, cybersecurity: 0},
                vote: "+1 к Дизайну"
            },
            {
                text: "Создавать что-то на компьютере и видеть результат",
                scores: { python: 0, web: 1, uiux: 0, digitalArt: 0, modeling: 2, ai: 0, cybersecurity: 0},
                vote: "+1 к Веб-разработке"
            },
            {
                text: "Разбираться, как всё устроено",
                scores: { python: 1, web: 0, uiux: 0, digitalArt: 0, modeling: 0, ai: 0, cybersecurity: 2},
                vote: "+1 к Разработке"
            },
            {
                text: "Помогать другим решать задачи",
                scores: { python: 0, web: 0, uiux: 1, digitalArt: 0, modeling: 0, ai: 1, cybersecurity: 0},
                vote: "+ 1 к Дизайну"
            }
        ]
    },
    /* 2 */
    {
        type: "single",
        title: "Как ты обычно проводишь свободное время?",
        options: [
            {
                text: "Играю в компьютерные игры",
                scores: { python: 1, web: 0, uiux: 0, digitalArt: 0, modeling: 2, ai: 0, cybersecurity: 0},
                vote: "+1 к Моделированию"
            },
            {
                text: "Рисую, оформляю, создаю картинки",
                scores: { python: 0, web: 0, uiux: 1, digitalArt: 2, modeling: 0, ai: 0, cybersecurity: 0},
                vote: "+1 к Дизайну"
            },
            {
                text: "Смотрю видео, изучаю новое",
                scores: { python: 0, web: 0, uiux: 0, digitalArt: 0, modeling: 0, ai: 2, cybersecurity: 0},
                vote: "+1 к Нейронным сетям"
            },
            {
                text: "Что-нибудь создаю или собираю",
                scores: { python: 1, web: 0, uiux: 0, digitalArt: 0, modeling: 2, ai: 0, cybersecurity: 0},
                vote: "+1 к 3D-моделированию"
            },
            {
                text: "Пробую программы, настройки компьютера",
                scores: { python: 0, web: 0, uiux: 0, digitalArt: 0, modeling: 0, ai: 1, cybersecurity: 2},
                vote: "+1 к Кибербезопасности"
            },
            {
                text: "Программирую или делаю сайты",
                scores: { python: 2, web: 2, uiux: 0, digitalArt: 0, modeling: 0, ai: 0, cybersecurity: 0},
                vote: "+1 к Веб-разработке"
            }
        ]
    },
    /* 3 */
    {
        type: "single",
        title: "Какие технологии тебе интереснее всего?",
        options: [
            {
                text: "Компьютерные игры",
                scores: { python: 1, web: 2, uiux: 0, digitalArt: 0, modeling: 2, ai: 0, cybersecurity: 0},
                vote: "к Программированию"
            },
            {
                text: "Искусственный интеллект",
                scores: { python: 0, web: 0, uiux: 0, digitalArt: 0, modeling: 0, ai: 2, cybersecurity: 0},
                vote: "к Дизайну"
            },
            {
                text: "Создание сайтов",
                scores:{ python: 0, web: 2, uiux: 1, digitalArt: 0, modeling: 0, ai: 0, cybersecurity: 0},
                vote: "к Кибербезопасности"
            },
            {
                text: "Компьютерная графика",
                scores: { python: 0, web: 0, uiux: 0, digitalArt: 2, modeling: 1, ai: 0, cybersecurity: 0},
                vote: "к ML"
            },
            {
                text: "Как работают программы",
                scores: { python: 2, web: 0, uiux: 0, digitalArt: 0, modeling: 0, ai: 0, cybersecurity: 0},
                vote: "к ML"
            }            ,
            {
                text: "Как защищают компьютеры и данные",
                scores: { python: 0, web: 0, uiux: 0, digitalArt: 0, modeling: 0, ai: 0, cybersecurity: 2},
                vote: "к ML"
            }
        ]
    },
    /* 4 */
    {
        type: "single",
        title: "Если появилась сложная задача, ты скорее…",
        options: [
            {
                text: "Разобью ее на несколько маленьких задач",
                scores: { python: 2, web: 0, uiux: 0, digitalArt: 0, modeling: 0, ai: 0, cybersecurity: 0},
                vote: "к 3D-моделированию"
            },
            {
                text: "Буду пробовать разные варианты",
                scores: { python: 0, web: 0, uiux: 0, digitalArt: 0, modeling: 1, ai: 2, cybersecurity: 0},
                vote: "к UX/UI"
            },
            {
                text: "Сначала посмотрю примеры",
                scores: { python: 0, web: 0, uiux: 1, digitalArt: 1, modeling: 0, ai: 0, cybersecurity: 0},
                vote: "к Программированию"
            },
            {
                text: "Попробую понять, где именно проблема",
                scores: { python: 1, web: 0, uiux: 0, digitalArt: 0, modeling: 0, ai: 0, cybersecurity: 2},
                vote: "к AI"
            }
        ]
    },
    /* 5 */
    {
        type: "single",
        title: "Если что-то не получается сразу…",
        options: [
            {
                text: "Ищу ошибку и пробую исправить",
                scores: { python: 1, web: 0, uiux: 0, digitalArt: 0, modeling: 0, ai: 0, cybersecurity: 2},
                vote: "к Web"
            },
            {
                text: "Пробую сделать другим способом",
                scores: { python: 0, web: 0, uiux: 0, digitalArt: 0, modeling: 0, ai: 2, cybersecurity: 0},
                vote: "к Дизайну"
            },
            {
                text: "Смотрю пример или инструкцию",
                scores: { python: 0, web: 1, uiux: 0, digitalArt: 0, modeling: 1, ai: 0, cybersecurity: 0},
                vote: "к Кибербезопасности"
            },
            {
                text: "Переделываю, пока результат не понравится",
                scores: { python: 0, web: 0, uiux: 1, digitalArt: 2, modeling: 0, ai: 0, cybersecurity: 0},
                vote: "к ML"
            }
        ]
    },
    /* 6 */
    {
        type: "single",
        title: "Когда появляется новая программа…",
        options: [
            {
                text: "Сразу начинаю пробовать инструменты",
                scores: { python: 0, web: 0, uiux: 0, digitalArt: 1, modeling: 2, ai: 0, cybersecurity: 0},
                vote: "к 3D-моделированию"
            },
            {
                text: "Сначала хочу понять, как все устроено",
                scores: { python: 2, web: 0, uiux: 0, digitalArt: 0, modeling: 0, ai: 0, cybersecurity: 1},
                vote: "к AI"
            },
            {
                text: "Смотрю видео и повторяю",
                scores: { python: 0, web: 0, uiux: 0, digitalArt: 1, modeling: 1, ai: 0, cybersecurity: 0},
                vote: "к Кибербезопасности"
            },
            {
                text: "Думаю, что с ее помощью можно создать",
                scores: { python: 0, web: 0, uiux: 1, digitalArt: 0, modeling: 0, ai: 2, cybersecurity: 0},
                vote: "к Web"
            }
        ]
    },
    /* 7 */
    {
        type: "single",
        title: "Что тебе было бы интереснее сделать самому?",
        options: [
            {
                text: "Игру",
                scores:{ python: 2, web: 0, uiux: 0, digitalArt: 0, modeling: 2, ai: 0, cybersecurity: 0},
                vote: "к UX/UI"
            },
            {
                text: "Сайт",
                scores: { python: 0, web: 2, uiux: 0, digitalArt: 0, modeling: 0, ai: 0, cybersecurity: 0},
                vote: "к Python"
            },
            {
                text: "Красивый дизайн приложения",
                scores: { python: 0, web: 0, uiux: 2, digitalArt: 0, modeling: 0, ai: 0, cybersecurity: 0},
                vote: "к Кибербезопасности"
            },
            {
                text: "Персонажа или иллюстрацию",
                scores: { python: 0, web: 0, uiux: 0, digitalArt: 2, modeling: 0, ai: 0, cybersecurity: 0},
                vote: "к 3D-моделированию"
            },
            {
                text: "3D-модель или игровой мир",
                scores: { python: 1, web: 0, uiux: 0, digitalArt: 0, modeling: 2, ai: 0, cybersecurity: 0},
                vote: "к 3D-моделированию"
            },
            {
                text: "AI-помощника",
                scores: { python: 1, web: 0, uiux: 0, digitalArt: 0, modeling: 0, ai: 2, cybersecurity: 0},
                vote: "к 3D-моделированию"
            },
            {
                text: "Систему защиты компьютера",
                scores: { python: 0, web: 0, uiux: 0, digitalArt: 0, modeling: 0, ai: 0, cybersecurity: 2},
                vote: "к 3D-моделированию"
            }
        ]
    },
    /* 8 */
    {
        type: "single",
        title: "Что приносит больше удовольствия?",
        options: [
            {
                text: "Когда всё наконец заработало",
                scores: { python: 2, web: 1, uiux: 0, digitalArt: 0, modeling: 0, ai: 0, cybersecurity: 0},
                vote: "к Digital Art"
            },
            {
                text: "Когда получилось красиво",
                scores: { python: 0, web: 0, uiux: 1, digitalArt: 2, modeling: 0, ai: 0, cybersecurity: 0},
                vote: "к Программированию"
            },
            {
                text: "Когда получилось удобно для других",
                scores:{ python: 0, web: 1, uiux: 2, digitalArt: 0, modeling: 0, ai: 0, cybersecurity: 0},
                vote: "к Кибербезопасности"
            },
            {
                text: "Когда получилось необычно",
                scores: { python: 0, web: 0, uiux: 0, digitalArt: 1, modeling: 0, ai: 2, cybersecurity: 0},
                vote: "к ML"
            },
            {
                text: "Когда нашел ошибку, которую долго искал",
                scores: { python: 1, web: 0, uiux: 0, digitalArt: 0, modeling: 0, ai: 0, cybersecurity: 2},
                vote: "к ML"
            },
            {
                text: "Когда сделал объемный объект или сцену",
                scores: { python: 0, web: 0, uiux: 0, digitalArt: 0, modeling: 2, ai: 0, cybersecurity: 0},
                vote: "к ML"
            }
        ]
    },
    /* 9 */
    {
        type: "single",
        title: "Представь общий проект. Чем бы ты хотел заниматься?",
        options: [
            {
                text: "Писать код",
                scores: { python: 2, web: 0, uiux: 0, digitalArt: 0, modeling: 0, ai: 0, cybersecurity: 0},
                vote: "к Python"
            },
            {
                text: "Собирать сайт",
                scores: { python: 0, web: 2, uiux: 0, digitalArt: 0, modeling: 0, ai: 0, cybersecurity: 0},
                vote: "к ML"
            },
            {
                text: "Придумывать, как будет выглядеть приложение",
                scores: { python: 0, web: 0, uiux: 2, digitalArt: 0, modeling: 0, ai: 0, cybersecurity: 0},
                vote: "к Web"
            },
            {
                text: "Рисовать",
                scores: { python: 0, web: 0, uiux: 0, digitalArt: 2, modeling: 0, ai: 0, cybersecurity: 0},
                vote: "к Кибербезопасности"
            },
            {
                text: "Создать объекты и локации",
                scores: { python: 0, web: 0, uiux: 0, digitalArt: 0, modeling: 2, ai: 0, cybersecurity: 0},
                vote: "к Кибербезопасности"
            },
            {
                text: "Использовать нейросети",
                scores: { python: 0, web: 0, uiux: 0, digitalArt: 0, modeling: 0, ai:2, cybersecurity: 0},
                vote: "к Кибербезопасности"
            },
            {
                text: "Проверять проект на ошибки и безопасность",
                scores: { python: 0, web: 0, uiux: 0, digitalArt: 0, modeling: 0, ai: 0, cybersecurity: 2},
                vote: "к Кибербезопасности"
            }
        ]
    },
    /* 10 */
    {
        type: "single",
        title: "Какая роль в команде тебе ближе?",
        options: [
            {
                text: "Решать сложные технические задачи",
                scores: { python: 2, web: 0, uiux: 0, digitalArt: 0, modeling: 0, ai: 0, cybersecurity: 0},
                vote: "к 3D-моделированию"
            },
            {
                text: "Собирать все в готовый результат",
                scores: { python: 0, web: 2, uiux: 0, digitalArt: 0, modeling: 0, ai: 0, cybersecurity: 0},
                vote: "к Web"
            },
            {
                text: "Думать, как сделать удобно",
                scores: { python: 0, web: 0, uiux: 2, digitalArt: 0, modeling: 0, ai: 0, cybersecurity: 0},
                vote: "к Кибербезопасности"
            },
            {
                text: "Отвечать за внешний вид",
                scores: { python: 0, web: 0, uiux: 0, digitalArt: 2, modeling: 0, ai: 0, cybersecurity: 0},
                vote: "к ML"
            },
            {
                text: "Создавать мир и объекты",
                scores: { python: 0, web: 0, uiux: 0, digitalArt: 0, modeling: 2, ai: 0, cybersecurity: 0},
                vote: "к ML"
            },
            {
                text: "Искать новые способы сделать быстрее",
                scores: { python: 0, web: 0, uiux: 0, digitalArt: 0, modeling:0 , ai: 2, cybersecurity: 0},
                vote: "к ML"
            },
            {
                text: "Искать слабые места и ошибки",
                scores: { python: 0, web: 0, uiux: 0, digitalArt: 0, modeling: 0, ai: 0, cybersecurity: 2},
                vote: "к ML"
            }
        ]
    },
    /* 11 */
    {
        type: "single",
        title: "За чем к тебе чаще обращаются друзья?",
        options: [
            {
                text: "Объяснить сложную задачу",
                scores: { python: 2, web: 0, uiux: 0, digitalArt: 0, modeling: 0, ai: 0, cybersecurity: 0},
                vote: "к 3D-моделированию"
            },
            {
                text: "Помочь с компьютером или настройками",
                scores: { python: 0, web: 0, uiux: 0, digitalArt: 0, modeling: 0, ai: 0, cybersecurity: 2},
                vote: "к Web"
            },
            {
                text: "Красиво оформить что-нибудь",
                scores: { python: 0, web: 0, uiux: 1, digitalArt: 2, modeling: 0, ai: 0, cybersecurity: 0},
                vote: "к Кибербезопасности"
            },
            {
                text: "Придумать идею",
                scores: { python: 0, web: 0, uiux: 1, digitalArt: 0, modeling: 0, ai: 1, cybersecurity: 0},
                vote: "к ML"
            },
            {
                text: "Сделать что-то техническое",
                scores: { python: 1, web: 1, uiux: 0, digitalArt: 0, modeling: 0, ai: 0, cybersecurity: 0},
                vote: "к ML"
            }
        ]
    },
    /* 12 */
    {
        type: "single",
        title: "С какими задачами справляешься легче?",
        options: [
            {
                text: "Где нужно найти закономерность",
                scores: { python: 2, web: 0, uiux: 0, digitalArt: 0, modeling: 0, ai: 0, cybersecurity: 0},
                vote: "к 3D-моделированию"
            },
            {
                text: "Где нужно собрать много частей вместе",
                scores: { python: 0, web: 2, uiux: 0, digitalArt: 0, modeling: 0, ai: 0, cybersecurity: 0},
                vote: "к Web"
            },
            {
                text: "Где нужно понять, что будет удобно человеку",
                scores: { python: 0, web: 0, uiux: 2, digitalArt: 0, modeling: 0, ai: 0, cybersecurity: 0},
                vote: "к Кибербезопасности"
            },
            {
                text: "Где нужно придумать красивый образ",
                scores: { python: 0, web: 0, uiux: 0, digitalArt: 2, modeling: 0, ai: 0, cybersecurity: 0},
                vote: "к ML"
            },
            {
                text: "Где нужно представить объект в объеме",
                scores: { python: 0, web: 0, uiux: 0, digitalArt: 0, modeling: 2, ai: 0, cybersecurity: 0},
                vote: "к ML"
            },
            {
                text: "Где можно экспериментировать и искать необычное решение",
                scores: { python: 0, web: 0, uiux: 0, digitalArt: 0, modeling: 0, ai: 2, cybersecurity: 0},
                vote: "к ML"
            },
            {
                text: "Где нужно найти ошибку или слабое место",
                scores: { python: 0, web: 0, uiux: 0, digitalArt: 0, modeling: 0, ai: 0, cybersecurity: 2},
                vote: "к ML"
            }
        ]
    },
    /* 13 */
    {
        type: "single",
        title: "Какой школьный предмет тебе ближе?",
        options: [
            {
                text: "Математика",
                scores: { python: 2, web: 0, uiux: 0, digitalArt: 0, modeling: 0, ai: 1, cybersecurity: 0},
                vote: "к 3D-моделированию"
            },
            {
                text: "Информатика",
                scores: { python: 2, web: 0, uiux: 0, digitalArt: 0, modeling: 0, ai: 0, cybersecurity: 1},
                vote: "к Web"
            },
            {
                text: "ИЗО",
                scores: { python: 0, web: 0, uiux: 1, digitalArt: 2, modeling: 0, ai: 0, cybersecurity: 0},
                vote: "к Кибербезопасности"
            },
            {
                text: "Технология/Труд",
                scores: { python: 0, web: 0, uiux: 0, digitalArt: 0, modeling: 2, ai: 0, cybersecurity: 0},
                vote: "к ML"
            },
            {
                text: "Английский язык",
                scores: { python: 0, web: 1, uiux: 0, digitalArt: 0, modeling: 0, ai: 1, cybersecurity: 0},
                vote: "к ML"
            },
            {
                text: "Здесь нет моего любимого предмета",
                scores: { python: 0, web: 0, uiux: 0, digitalArt: 0, modeling: 0, ai: 0, cybersecurity: 0},
                vote: "к ML"
            }
        ]
    },
    /* 14 */
    {
        type: "single",
        title: "Что ты чаще замечаешь?",
        options: [
            {
                text: "Ошибки и несоответствия",
                scores: { python: 0, web: 0, uiux: 0, digitalArt: 0, modeling: 0, ai: 0, cybersecurity: 2},
                vote: "к 3D-моделированию"
            },
            {
                text: "Красивые картинки и детали",
                scores: { python: 0, web: 0, uiux: 0, digitalArt: 2, modeling: 0, ai: 0, cybersecurity: 0},
                vote: "к Web"
            },
            {
                text: "Неудобные сайты и приложения",
                scores: { python: 0, web: 0, uiux: 2, digitalArt: 0, modeling: 0, ai: 0, cybersecurity: 0},
                vote: "к Кибербезопасности"
            },
            {
                text: "Как устроены программы",
                scores: { python: 2, web: 0, uiux: 0, digitalArt: 0, modeling: 0, ai: 0, cybersecurity: 0},
                vote: "к ML"
            },
            {
                text: "Интересные сайты",
                scores: { python: 0, web: 2, uiux: 0, digitalArt: 0, modeling: 0, ai: 0, cybersecurity: 0},
                vote: "к ML"
            },
            {
                text: "Графику и миры в играх",
                scores: { python: 0, web: 0, uiux: 0, digitalArt: 0, modeling: 2, ai: 0, cybersecurity: 0},
                vote: "к ML"
            },
            {
                text: "Новые возможности нейросетей",
                scores: { python: 0, web: 0, uiux: 0, digitalArt: 0, modeling: 0, ai: 2, cybersecurity: 0},
                vote: "к ML"
            }
        ]
    },
    /* 15 */
    {
        type: "single",
        title: "Что тебе больше по душе?",
        options: [
            {
                text: "Четкая задача и понятный правильный результат",
                scores: { python: 2, web: 0, uiux: 0, digitalArt: 0, modeling: 0, ai: 0, cybersecurity: 1},
                vote: "к 3D-моделированию"
            },
            {
                text: "Есть задача, но способ решения можно придумать самому",
                scores: { python: 0, web: 1, uiux: 0, digitalArt: 0, modeling: 1, ai: 0, cybersecurity: 0},
                vote: "к UX/UI"
            },
            {
                text: "Максимум свободы и творчества",
                scores: { python: 0, web: 0, uiux: 0, digitalArt: 2, modeling: 0, ai: 0, cybersecurity: 0},
                vote: "к Digital Art"
            },
            {
                text: "Понять людей и придумать решение для них",
                scores: { python: 0, web: 0, uiux: 2, digitalArt: 0, modeling: 0, ai: 0, cybersecurity: 0},
                vote: "к Python"
            },
            {
                text: "Экспериментировать с новыми технологиями",
                scores: { python: 0, web: 0, uiux: 0, digitalArt: 0, modeling: 0, ai: 2, cybersecurity: 0},
                vote: "к AI"
            }
        ]
    },
    /* 16 */
    {
        type: "single",
        title: "Какие кружки или занятия тебе нравились?",
        options: [
            {
                text: "Программирование",
                scores: { python: 2, web: 0, uiux: 0, digitalArt: 0, modeling: 0, ai: 0, cybersecurity: 0},
                vote: "к 3D-моделированию"
            },
            {
                text: "Робототехника/LEGO",
                scores: { python: 1, web: 0, uiux: 0, digitalArt: 0, modeling: 1, ai: 0, cybersecurity: 0},
                vote: "к UX/UI"
            },
            {
                text: "Рисование",
                scores:{ python: 0, web: 0, uiux: 0, digitalArt: 2, modeling: 0, ai: 0, cybersecurity: 0},
                vote: "к Digital Art"
            },
            {
                text: "Шахматы / логические игры",
                scores: { python: 1, web: 0, uiux: 0, digitalArt: 0, modeling: 0, ai: 0, cybersecurity: 1},
                vote: "к Python"
            },
            {
                text: "Создание сайтов",
                scores: { python: 0, web: 2, uiux: 0, digitalArt: 0, modeling: 0, ai: 0, cybersecurity: 0},
                vote: "к AI"
            },
            {
                text: "Дизайн",
                scores: { python: 0, web: 0, uiux: 2, digitalArt: 1, modeling: 0, ai: 0, cybersecurity: 0},
                vote: "к Web"
            },
            {
                text: " 3D моделирование или конструирование",
                scores: { python: 0, web: 0, uiux: 0, digitalArt: 0, modeling: 2, ai: 0, cybersecurity: 0},
                vote: "к Кибербезопасности"
            },
            {
                text: "Пока ничего такого не пробовал",
                scores: { python: 0, web: 0, uiux: 0, digitalArt: 0, modeling: 0, ai: 0, cybersecurity: 0},
                vote: "к ML"
            }
        ]
    },
    /* 17 */
    {
        type: "single",
        title: "Что тебе было бы интереснее научиться делать через год?",
        options: [
            {
                text: "Писать свои программы",
                scores:{ python: 2, web: 0, uiux: 0, digitalArt: 0, modeling: 0, ai: 0, cybersecurity: 0},
                vote: "к 3D-моделированию"
            },
            {
                text: "Создавать настоящие сайты",
                scores: { python: 0, web: 2, uiux: 0, digitalArt: 0, modeling: 0, ai: 0, cybersecurity: 0},
                vote: "к UX/UI"
            },
            {
                text: "Проектировать приложения",
                scores: { python: 0, web: 0, uiux: 2, digitalArt: 0, modeling: 0, ai: 0, cybersecurity: 0},
                vote: "к Digital Art"
            },
            {
                text: "Создавать цифровые иллюстрации",
                scores: { python: 0, web: 0, uiux: 0, digitalArt: 2, modeling: 0, ai: 0, cybersecurity: 0},
                vote: "к Python"
            },
            {
                text: "Делать игровые объекты и локации",
                scores:{ python: 0, web: 0, uiux: 0, digitalArt: 0, modeling: 2, ai: 0, cybersecurity: 0},
                vote: "к AI"
            },
            {
                text: "Использовать AI для собственных проектов",
                scores: { python: 0, web: 0, uiux: 0, digitalArt: 0, modeling: 0, ai: 2, cybersecurity: 0},
                vote: "к Web"
            },
            {
                text: "Разбираться в защите компьютерных сетей",
                scores: { python: 0, web: 0, uiux: 0, digitalArt: 0, modeling: 0, ai: 0, cybersecurity: 2},
                vote: "к Кибербезопасности"
            }
        ]
    },
    /* 18 */
    {
        type: "single",
        title: "Какой проект ты выбрал бы прямо сейчас?",
        options: [
            {
                text: "Сделать Telegram-бота",
                scores: { python: 2, web: 0, uiux: 0, digitalArt: 0, modeling: 0, ai: 0, cybersecurity: 0},
                vote: "к 3D-моделированию"
            },
            {
                text: "Сделать сайт про свое увлечение",
                scores: { python: 0, web: 2, uiux: 0, digitalArt: 0, modeling: 0, ai: 0, cybersecurity: 0},
                vote: "к UX/UI"
            },
            {
                text: "Придумать дизайн мобильного приложения",
                scores: { python: 0, web: 0, uiux: 2, digitalArt: 0, modeling: 0, ai: 0, cybersecurity: 0},
                vote: "к Digital Art"
            },
            {
                text: "Нарисовать персонажа для игры",
                scores: { python: 0, web: 0, uiux: 0, digitalArt: 2, modeling: 0, ai: 0, cybersecurity: 0},
                vote: "к Python"
            },
            {
                text: "Сделать игровую карту или 3D-мир",
                scores: { python: 0, web: 0, uiux: 0, digitalArt: 0, modeling: 2, ai: 0, cybersecurity: 0},
                vote: "к AI"
            },
            {
                text: "Создать своего AI-помощника",
                scores: { python: 0, web: 0, uiux: 0, digitalArt: 0, modeling: 0, ai: 2, cybersecurity: 0},
                vote: "к Web"
            },
            {
                text: "Попробовать найти уязвимости как Белый хакер",
                scores: { python: 0, web: 0, uiux: 0, digitalArt: 0, modeling: 0, ai: 0, cybersecurity: 2},
                vote: "+ 2 к Кибербезопасности"
            }
        ]
    }
];

/* =========================================
   STATE
========================================= */

const state = {
    current: 0,
    answers: Array(questions.length).fill(null),
    scores: Object.fromEntries(profileOrder.map(key => [key, 0])),
    profile: Object.fromEntries(profileOrder.map(key => [key, 0])),
    emailSent: false
};

/* =========================================
   DOM
========================================= */

const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const resultsScreen = document.getElementById("resultsScreen");
const questionHost = document.getElementById("questionHost");
const interestList = document.getElementById("interestList");
const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");
const progressPercent = document.getElementById("progressPercent");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");
const scoreToast = document.getElementById("scoreToast");
const profilePanel = document.getElementById("profilePanel");

/* =========================================
   EMAILJS INITIALIZATION
========================================= */

(function() {
    emailjs.init({
        publicKey: "_lb-BSelfaLtrYDbn"
    });
})();

/* =========================================
   ВАЛИДАЦИЯ
========================================= */

function validatePhone(phone) {
    // Удаляем все пробелы, скобки и дефисы для проверки
    const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
    // Проверяем: начинается с +375, затем 9 цифр (всего 13 символов с +)
    const phoneRegex = /^\+375\d{9}$/;
    return phoneRegex.test(cleanPhone);
}

function validateEmail(email) {
    if (!email) return true; // Поле необязательное
    return email.length >= 7 && email.includes('@');
}

function validateForm() {
    let isValid = true;
    
    // Валидация телефона
    const phoneInput = document.getElementById('studentPhone');
    const phoneError = document.getElementById('phoneError');
    const phone = phoneInput.value.trim();
    
    if (!validatePhone(phone)) {
        phoneInput.classList.add('error');
        phoneError.classList.add('show');
        isValid = false;
    } else {
        phoneInput.classList.remove('error');
        phoneError.classList.remove('show');
    }
    
    // Валидация email (если заполнен)
    const emailInput = document.getElementById('studentEmail');
    const emailError = document.getElementById('emailError');
    const email = emailInput.value.trim();
    
    if (email && !validateEmail(email)) {
        emailInput.classList.add('error');
        emailError.classList.add('show');
        isValid = false;
    } else {
        emailInput.classList.remove('error');
        emailError.classList.remove('show');
    }
    
    // Валидация чекбокса согласия
    const termsCheck = document.getElementById('termsCheck');
    if (!termsCheck.checked) {
        termsCheck.classList.add('error');
        isValid = false;
    } else {
        termsCheck.classList.remove('error');
    }
    
    // Валидация имени
    const nameInput = document.getElementById('studentName');
    if (!nameInput.value.trim()) {
        nameInput.classList.add('error');
        isValid = false;
    } else {
        nameInput.classList.remove('error');
    }
    
    // Валидация возраста
    const ageInput = document.getElementById('studentAge');
    const age = parseInt(ageInput.value);
    if (!ageInput.value || age < 8 || age > 20) {
        ageInput.classList.add('error');
        isValid = false;
    } else {
        ageInput.classList.remove('error');
    }
    
    return isValid;
}

/* =========================================
   PROFILE RENDER
========================================= */

function renderProfile() {
    interestList.innerHTML = profileOrder
        .map(key => {
            const direction = directions[key];
            const value = Math.max(0, Math.min(100, Math.round(state.profile[key])));
            return `
                <div class="interest-row">
                    <div class="interest-icon">${direction.icon}</div>
                    <div>
                        <div class="interest-label-row">
                            <span>${direction.name}</span>
                            <span>${value}%</span>
                        </div>
                        <div class="mini-track">
                            <div class="mini-fill" style="width:${value}%; background:${direction.color}"></div>
                        </div>
                    </div>
                </div>
            `;
        })
        .join("");
}

/* =========================================
   UPDATE PROFILE
========================================= */

function updateProfileFromScores() {
    const totals = Object.values(state.scores);
    const max = Math.max(...totals, 1);
    profileOrder.forEach(key => {
        state.profile[key] = (state.scores[key] / max) * 100;
    });
    renderProfile();
}

/* =========================================
   SHOW SCORE TOAST
========================================= */

function showToast(text, directionKey) {
    scoreToast.textContent = text;
    scoreToast.style.background = directions[directionKey]?.color || "linear-gradient(135deg, #00d4ff, #7b2ffc)";
    scoreToast.classList.remove("show");
    void scoreToast.offsetWidth;
    scoreToast.classList.add("show");
}

/* =========================================
   CLEAR PREVIOUS ANSWER
========================================= */

function clearQuestionContribution(index) {
    const answer = state.answers[index];
    if (!answer) return;
    
    if (answer.type === "single") {
        Object.entries(answer.scores).forEach(([key, value]) => {
            state.scores[key] -= value;
        });
    } else if (answer.type === "range") {
        Object.entries(answer.contribution).forEach(([key, value]) => {
            state.scores[key] -= value;
        });
    }
}

/* =========================================
   APPLY SINGLE ANSWER
========================================= */

function applySingleAnswer(question, optionIndex) {
    clearQuestionContribution(state.current);
    const option = question.options[optionIndex];
    
    Object.entries(option.scores).forEach(([key, value]) => {
        state.scores[key] += value;
    });
    
    state.answers[state.current] = {
        type: "single",
        optionIndex: optionIndex,
        scores: { ...option.scores },
        vote: option.vote,
        text: option.text
    };
    
    updateProfileFromScores();
    
    const directionKey = Object.keys(option.scores).sort((a, b) => option.scores[b] - option.scores[a])[0];
    showToast(option.vote, directionKey);
}

/* =========================================
   APPLY RANGE ANSWER
========================================= */

function applyRangeAnswer(question, value) {
    clearQuestionContribution(state.current);
    const numericValue = Number(value);
    const contribution = {};
    
    Object.entries(question.scoreMap).forEach(([key, weight]) => {
        const points = numericValue * weight;
        contribution[key] = points;
        state.scores[key] += points;
    });
    
    state.answers[state.current] = {
        type: "range",
        value: numericValue,
        contribution: contribution,
        vote: question.vote,
        text: `${numericValue} из 10`
    };
    
    updateProfileFromScores();
}

/* =========================================
   RENDER QUESTION
========================================= */

function renderQuestion() {
    const question = questions[state.current];
    const answer = state.answers[state.current];
    const number = state.current + 1;
    const percent = Math.round((number / questions.length) * 100);
    
    progressText.textContent = `Вопрос ${number} из ${questions.length}`;
    progressPercent.textContent = `${percent}%`;
    progressBar.style.width = `${percent}%`;
    
    backBtn.disabled = state.current === 0;
    backBtn.style.opacity = state.current === 0 ? ".45" : "1";
    nextBtn.textContent = state.current === questions.length - 1 ? "Показать результат" : "Дальше →";
    
    const questionHeader = `
        <div class="question-meta">Вопрос ${number}</div>
        <div class="question-title">${question.title}</div>
        ${question.help ? `<div class="question-help">${question.help}</div>` : ""}
    `;
    
    if (question.type === "single") {
        questionHost.innerHTML = `
            ${questionHeader}
            <div class="options">
                ${question.options.map((option, index) => `
                    <label class="option ${answer?.optionIndex === index ? "selected" : ""}">
                        <input type="radio" name="question-${state.current}" value="${index}" ${answer?.optionIndex === index ? "checked" : ""}>
                        <div class="option-content">
                            <div class="option-dot"></div>
                            <div class="option-text">${option.text}</div>
                        </div>
                    </label>
                `).join("")}
            </div>
        `;
        
        questionHost.querySelectorAll(".option").forEach((element, index) => {
            element.addEventListener("click", () => {
                applySingleAnswer(question, index);
                questionHost.querySelectorAll(".option").forEach(el => el.classList.remove("selected"));
                element.classList.add("selected");
            });
        });
    }
    
    else {
        const value = answer?.value ?? 5;
        questionHost.innerHTML = `
            ${questionHeader}
            <div class="range-card">
                <div class="range-header">
                    <strong>Твоя оценка</strong>
                    <div class="range-value" id="rangeValue">${value}</div>
                </div>
                <input id="rangeInput" type="range" min="1" max="10" step="1" value="${value}">
                <div class="range-labels">
                    <span>${question.minLabel}</span>
                    <span>${question.maxLabel}</span>
                </div>
            </div>
        `;
        
        const rangeInput = document.getElementById("rangeInput");
        const rangeValue = document.getElementById("rangeValue");
        
        rangeInput.addEventListener("input", () => {
            rangeValue.textContent = rangeInput.value;
            applyRangeAnswer(question, rangeInput.value);
        });
        
        if (!answer) {
            applyRangeAnswer(question, value);
        }
    }
}

/* =========================================
   SWITCH SCREEN
========================================= */

function switchScreen(screen) {
    [startScreen, quizScreen, resultsScreen].forEach(element => element.classList.remove("active"));
    screen.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
}

/* =========================================
   HAS ANSWER
========================================= */

function hasAnswer() {
    return state.answers[state.current] !== null;
}

/* =========================================
   CALCULATE RESULTS
========================================= */

function calculateResults() {
    const sorted = [...profileOrder].sort((a, b) => state.scores[b] - state.scores[a]);
    const max = Math.max(...sorted.map(key => state.scores[key]), 1);
    const normalized = {};
    sorted.forEach(key => {
        normalized[key] = Math.round((state.scores[key] / max) * 100);
    });
    return { sorted, normalized };
}

/* =========================================
   RENDER RESULTS
========================================= */

function renderResults() {
    const { sorted, normalized } = calculateResults();
    const studentName = document.getElementById("studentName").value.trim() || "Твой";
    
    document.getElementById("resultsTitle").textContent = `${studentName}, вот твои направления`;
    
    const top = sorted.slice(0, 8);
    
    document.getElementById("resultGrid").innerHTML = top.map((key, index) => {
        const direction = directions[key];
        const percent = normalized[key];
        return `
            <div class="result-card">
                <div class="result-rank" style="color: ${direction.color}">${index + 1}</div>
                <div class="result-main">
                    <h3>${direction.icon} ${direction.name}</h3>
                    <p>${direction.description}</p>
                    <div class="result-meter">
                        <span style="width: ${percent}%; background: linear-gradient(90deg, ${direction.color}, var(--cyber-blue));"></span>
                    </div>
                </div>
                <div class="result-percent">${percent}%</div>
            </div>
        `;
    }).join("");
    
    const winner = directions[sorted[0]];
    const second = directions[sorted[1]] || directions[sorted[0]];
    
    document.getElementById("winnerBlock").innerHTML = `
        <div class="winner-tag">Самое сильное совпадение</div>
        <h3>${winner.icon} ${winner.name}</h3>
        <p>
            ${winner.description}
            <br><br>
            <strong>Что попробовать первым:</strong>
            ${winner.starter}
            <br><br>
            Также тебе может подойти соседнее направление —
            <strong>${second.icon} ${second.name}</strong>.
        </p>
    `;
}

/* =========================================
   GET ALL ANSWERS FOR EMAIL
========================================= */

function getAllAnswers() {
    const answers = [];
    questions.forEach((question, index) => {
        const answer = state.answers[index];
        if (answer) {
            answers.push({
                questionNumber: index + 1,
                questionText: question.title,
                answerText: answer.text || 'Не выбран'
            });
        } else {
            answers.push({
                questionNumber: index + 1,
                questionText: question.title,
                answerText: 'Не выбран'
            });
        }
    });
    return answers;
}

/* =========================================
   GET FORM DATA
========================================= */

function getFormData() {
    const name = document.getElementById('studentName').value.trim();
    const age = document.getElementById('studentAge').value;
    const phone = document.getElementById('studentPhone').value.trim();
    const email = document.getElementById('studentEmail').value.trim();
    const isParentPhone = document.getElementById('parentPhoneCheck').checked;
    
    return { name, age, phone, email, isParentPhone };
}

/* =========================================
   FORMAT RESULTS FOR EMAIL (с данными формы в начале)
========================================= */

function formatResultsForEmail(formData, resultsData, allAnswers) {
    const { sorted, normalized } = resultsData;
    
    let formattedText = `====================================\n`;
    formattedText += `   РЕЗУЛЬТАТЫ ПРОФОРИЕНТАЦИОННОГО ТЕСТА\n`;
    formattedText += `====================================\n\n`;
    
    // Данные формы в начале письма
    formattedText += `📋 ДАННЫЕ УЧАСТНИКА:\n`;
    formattedText += `------------------------------------\n`;
    formattedText += `Имя и Фамилия: ${formData.name || 'Не указано'}\n`;
    formattedText += `Возраст: ${formData.age || 'Не указан'} лет\n`;
    formattedText += `Телефон: ${formData.phone || 'Не указан'}\n`;
    formattedText += `Email: ${formData.email || 'Не указан'}\n`;
    formattedText += `Телефон родителя: ${formData.isParentPhone ? 'Да' : 'Нет'}\n`;
    formattedText += `------------------------------------\n\n`;
    
    formattedText += `🎯 НАБРАННЫЕ БАЛЛЫ ПО НАПРАВЛЕНИЯМ:\n`;
    formattedText += `------------------------------------\n\n`;
    
    sorted.forEach((key) => {
        const direction = directions[key];
        const score = state.scores[key];
        const percent = normalized[key];
        formattedText += `${direction.icon} ${direction.name}\n`;
        formattedText += `   Баллов: ${score}\n`;
        formattedText += `   Совпадение: ${percent}%\n`;
        formattedText += `   ${direction.description}\n\n`;
    });
    
    formattedText += `====================================\n`;
    formattedText += `📝 ОТВЕТЫ НА ВОПРОСЫ:\n`;
    formattedText += `------------------------------------\n\n`;
    
    allAnswers.forEach((answer, index) => {
        const num = index + 1;
        formattedText += `${num}. ${answer.questionText}\n`;
        formattedText += `   ➤ Ответ: ${answer.answerText}\n\n`;
    });
    
    const winner = directions[sorted[0]];
    formattedText += `====================================\n`;
    formattedText += `🏆 ГЛАВНАЯ РЕКОМЕНДАЦИЯ:\n`;
    formattedText += `   ${winner.icon} ${winner.name}\n\n`;
    formattedText += `✨ Попробуй: ${winner.starter}\n\n`;
    formattedText += `====================================\n`;
    formattedText += `📅 Тест пройден: ${new Date().toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })}`;
    
    return formattedText;
}

/* =========================================
   SEND RESULTS BY EMAIL
========================================= */

async function sendResultsByEmail(formData, resultsData) {
    try {
        const allAnswers = getAllAnswers();
        const emailContent = formatResultsForEmail(formData, resultsData, allAnswers);
        
        const answerParams = {};
        allAnswers.forEach((answer, index) => {
            const num = index + 1;
            answerParams[`q${num}`] = `${answer.questionText}\nОтвет: ${answer.answerText}`;
        });
        
        const now = new Date();
        const timeString = now.toLocaleString('ru-RU', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        
        const templateParams = {
            name: formData.name || 'Пользователь',
            time: timeString,
            timestamp: timeString,
            age: formData.age || 'Не указан',
            phone: formData.phone || 'Не указан',
            email: formData.email || 'Не указан',
            isParentPhone: formData.isParentPhone ? 'Да' : 'Нет',
            results: emailContent,
            top1: resultsData.sorted[0] ? directions[resultsData.sorted[0]].name : 'Не определено',
            top2: resultsData.sorted[1] ? directions[resultsData.sorted[1]].name : 'Не определено',
            top3: resultsData.sorted[2] ? directions[resultsData.sorted[2]].name : 'Не определено',
            ...answerParams
        };

        const response = await emailjs.send(
            "service_obgtkc5",
            "template_3d19smr",
            templateParams
        );

        console.log('Email отправлен успешно!', response.status, response.text);
        showToast(`✨ Результаты отправлены! Консультант свяжется с вами`, "web");
        state.emailSent = true;
        
    } catch (error) {
        console.error('Ошибка отправки email:', error);
        let errorMessage = "⚠️ Не удалось отправить результаты.";
        if (error.text) {
            try {
                const errorData = JSON.parse(error.text);
                if (errorData.message) {
                    errorMessage += ` Ошибка: ${errorData.message}`;
                }
            } catch (e) {
                errorMessage += ` ${error.text}`;
            }
        }
        showToast(errorMessage, "web");
    }
}

/* =========================================
   RESET TEST
========================================= */

function resetTest() {
    state.current = 0;
    state.answers = Array(questions.length).fill(null);
    state.scores = Object.fromEntries(profileOrder.map(key => [key, 0]));
    state.profile = Object.fromEntries(profileOrder.map(key => [key, 0]));
    state.emailSent = false;
    
    document.getElementById("studentName").value = "";
    document.getElementById("studentAge").value = "";
    document.getElementById("studentPhone").value = "";
    document.getElementById("studentEmail").value = "";
    document.getElementById("parentPhoneCheck").checked = false;
    document.getElementById("termsCheck").checked = false;
    
    // Убираем ошибки
    document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
    document.querySelectorAll('.error-message').forEach(el => el.classList.remove('show'));
    
    renderProfile();
    switchScreen(startScreen);
    profilePanel.style.display = "none";
}

/* =========================================
   START BUTTON
========================================= */

document.getElementById("startBtn").addEventListener("click", () => {
    if (!validateForm()) {
        showToast("⚠️ Проверьте правильность заполнения формы", "web");
        return;
    }
    
    // Показываем панель профиля только после старта теста
    profilePanel.style.display = "block";
    
    state.current = 0;
    switchScreen(quizScreen);
    renderQuestion();
});

/* =========================================
   NEXT BUTTON
========================================= */

nextBtn.addEventListener("click", async () => {
    if (!hasAnswer()) {
        showToast("Выбери ответ, чтобы продолжить", "web");
        return;
    }
    
    if (state.current === questions.length - 1) {
        // Получаем данные формы
        const formData = getFormData();
        
        // Отображаем результаты
        renderResults();
        switchScreen(resultsScreen);
        
        // Автоматически отправляем результаты по email (только один раз)
        if (!state.emailSent) {
            const results = calculateResults();
            await sendResultsByEmail(formData, results);
        }
        return;
    }
    
    state.current++;
    renderQuestion();
});

/* =========================================
   BACK BUTTON
========================================= */

backBtn.addEventListener("click", () => {
    if (state.current === 0) return;
    state.current--;
    renderQuestion();
});

/* =========================================
   RESTART
========================================= */

document.getElementById("restartBtn").addEventListener("click", resetTest);

/* =========================================
   ИНИЦИАЛИЗАЦИЯ
========================================= */

// Скрываем панель профиля при загрузке страницы
profilePanel.style.display = "none";
renderProfile();

// Убираем ошибки при вводе
document.getElementById('studentPhone').addEventListener('input', function() {
    this.classList.remove('error');
    document.getElementById('phoneError').classList.remove('show');
});

document.getElementById('studentEmail').addEventListener('input', function() {
    this.classList.remove('error');
    document.getElementById('emailError').classList.remove('show');
});

document.getElementById('termsCheck').addEventListener('change', function() {
    this.classList.remove('error');
});

document.getElementById('studentName').addEventListener('input', function() {
    this.classList.remove('error');
});

document.getElementById('studentAge').addEventListener('input', function() {
    this.classList.remove('error');
});
