/* =========================================
   DIRECTIONS
========================================= */

const directions = {

    dev: {
        name: "Разработка",
        icon: "",
        color: "#4b7bec",

        description:
            "Тебе может понравиться создавать программы, разбираться в логике и превращать идеи в работающие системы.",

        starter:
            "небольшой Python-проект, Telegram-бот или программа, которая решает реальную задачу."
    },


    frontend: {
        name: "Frontend",
        icon: "",
        color: "#00c896",

        description:
            "Тебе интересно сочетать технологию и визуальный результат: создавать сайты и интерфейсы, которыми удобно пользоваться.",

        starter:
            "личную веб-страницу, интерактивный сайт или мини-приложение на HTML, CSS и JavaScript."
    },


    gamedev: {
        name: "Game Development",
        icon: "",
        color: "#ff6b35",

        description:
            "Тебя может увлекать сочетание логики, творчества и игровых механик — когда нужно создать целый мир и правила внутри него.",

        starter:
            "простую 2D-игру, интерактивный квест или проект с собственным персонажем и игровыми механиками."
    },


    design: {
        name: "Дизайн",
        icon: "",
        color: "#ff4fa2",

        description:
            "У тебя может быть сильная тяга к визуальной стороне проектов, композиции, удобству и созданию красивых решений.",

        starter:
            "редизайн любимого приложения, создание макета сайта или дизайн мобильного приложения."
    },


    digitalArt: {
        name: "Цифровой рисунок",
        icon: "",
        color: "#ff9f43",

        description:
            "Тебе может быть близко визуальное творчество: персонажи, иллюстрации, атмосфера и создание собственного художественного мира.",

        starter:
            "серию персонажей, иллюстрацию к своей истории или концепт-арт для игры."
    },


    aiUser: {
        name: "AI User",
        icon: "",
        color: "#8e44ad",

        description:
            "Тебе интересно использовать нейросети как инструмент для идей, обучения, творчества и ускорения работы.",

        starter:
            "собрать личный AI-workflow для учёбы или творчества и сравнить разные способы постановки задач нейросети."
    },


    aiEngineer: {
        name: "Создание нейросетей",
        icon: "",
        color: "#6c5ce7",

        description:
            "Тебя может заинтересовать, как устроен искусственный интеллект внутри: данные, алгоритмы, обучение моделей и эксперименты.",

        starter:
            "проект по анализу данных, простую модель машинного обучения или исследование того, как модель учится распознавать объекты."
    }

};


/* =========================================
   PROFILE ORDER
========================================= */

const profileOrder = [

    "dev",

    "frontend",

    "gamedev",

    "design",

    "digitalArt",

    "aiUser",

    "aiEngineer"

];


/* =========================================
   QUESTIONS
========================================= */

const questions = [

    /* 1 */

    {
        type: "single",

        title:
            "Что тебе нравится делать больше всего в свободное время?",

        help:
            "Выбери то, что действительно похоже на тебя, даже если вариантов несколько.",

        options: [

            {
                text:
                    "Решать головоломки и сложные задачи",

                scores: {
                    dev: 3,
                    aiEngineer: 2
                },

                vote:
                    "+1 к Разработке"
            },


            {
                text:
                    "Рисовать или создавать что-то красивое",

                scores: {
                    design: 3,
                    digitalArt: 3,
                    frontend: 1
                },

                vote:
                    "+1 к Дизайну"
            },


            {
                text:
                    "Играть в игры и придумывать свои уровни",

                scores: {
                    gamedev: 4,
                    design: 1
                },

                vote:
                    "+1 к GameDev"
            },


            {
                text:
                    "Изучать новые программы и технологии",

                scores: {
                    dev: 2,
                    frontend: 2,
                    aiUser: 2
                },

                vote:
                    "+1 к Разработке"
            },


            {
                text:
                    "Пробовать разные нейросети",

                scores: {
                    aiUser: 4,
                    aiEngineer: 1
                },

                vote:
                    "+1 к AI"
            }

        ]
    },


    /* 2 */

    {
        type: "single",

        title:
            "Если тебе дали большой проект, ты скорее...",

        options: [

            {
                text:
                    "Составлю план и буду выполнять его по шагам",

                scores: {
                    dev: 3,
                    aiEngineer: 2
                },

                vote:
                    "+1 к Разработке"
            },


            {
                text:
                    "Сразу начну экспериментировать",

                scores: {
                    gamedev: 2,
                    aiUser: 2,
                    aiEngineer: 2
                },

                vote:
                    "+1 к AI"
            },


            {
                text:
                    "Нарисую, как всё должно выглядеть",

                scores: {
                    design: 3,
                    digitalArt: 2,
                    frontend: 1
                },

                vote:
                    "+1 к Дизайну"
            },


            {
                text:
                    "Буду искать необычное решение",

                scores: {
                    gamedev: 2,
                    aiUser: 2,
                    frontend: 1
                },

                vote:
                    "+1 к GameDev"
            }

        ]
    },


    /* 3 */

    {
        type: "single",

        title:
            "Что приносит тебе больше удовольствия?",

        options: [

            {
                text:
                    "Когда всё работает без ошибок",

                scores: {
                    dev: 4,
                    aiEngineer: 2
                },

                vote:
                    "+1 к Разработке"
            },


            {
                text:
                    "Когда получилось красиво",

                scores: {
                    design: 3,
                    digitalArt: 3,
                    frontend: 1
                },

                vote:
                    "+1 к Дизайну"
            },


            {
                text:
                    "Когда получилось интересно играть",

                scores: {
                    gamedev: 4,
                    frontend: 1
                },

                vote:
                    "+1 к GameDev"
            },


            {
                text:
                    "Когда получилось что-то умное и необычное",

                scores: {
                    aiUser: 2,
                    aiEngineer: 3,
                    dev: 1
                },

                vote:
                    "+1 к AI Engineer"
            }

        ]
    },


    /* 4 */

    {
        type: "single",

        title:
            "Какой школьный предмет тебе нравится больше?",

        options: [

            {
                text:
                    "Математика",

                scores: {
                    dev: 2,
                    aiEngineer: 4
                },

                vote:
                    "+1 к AI Engineer"
            },


            {
                text:
                    "Информатика",

                scores: {
                    dev: 4,
                    frontend: 2
                },

                vote:
                    "+1 к Разработке"
            },


            {
                text:
                    "ИЗО",

                scores: {
                    design: 3,
                    digitalArt: 4
                },

                vote:
                    "+1 к Digital Art"
            },


            {
                text:
                    "Физика",

                scores: {
                    dev: 2,
                    gamedev: 2,
                    aiEngineer: 3
                },

                vote:
                    "+1 к Разработке"
            },


            {
                text:
                    "Английский язык",

                scores: {
                    frontend: 1,
                    aiUser: 2,
                    gamedev: 1
                },

                vote:
                    "+1 к AI User"
            }

        ]
    },


    /* 5 */

    {
        type: "single",

        title:
            "Представь, что ты создаёшь игру. Что тебе интереснее?",

        options: [

            {
                text:
                    "Написать код",

                scores: {
                    dev: 3,
                    gamedev: 4
                },

                vote:
                    "+1 к GameDev"
            },


            {
                text:
                    "Нарисовать персонажей",

                scores: {
                    digitalArt: 4,
                    design: 2,
                    gamedev: 1
                },

                vote:
                    "+1 к Digital Art"
            },


            {
                text:
                    "Сделать красивый интерфейс",

                scores: {
                    design: 3,
                    frontend: 3,
                    gamedev: 1
                },

                vote:
                    "+1 к Frontend"
            },


            {
                text:
                    "Придумать механику игры",

                scores: {
                    gamedev: 4,
                    design: 1
                },

                vote:
                    "+1 к GameDev"
            },


            {
                text:
                    "Сделать ИИ противников",

                scores: {
                    aiEngineer: 4,
                    gamedev: 3
                },

                vote:
                    "+1 к AI Engineer"
            }

        ]
    },


    /* 6 */

    {
        type: "single",

        title:
            "Когда видишь красивый сайт, ты чаще думаешь...",

        options: [

            {
                text:
                    "Как он устроен внутри",

                scores: {
                    dev: 2,
                    frontend: 3
                },

                vote:
                    "+1 к Frontend"
            },


            {
                text:
                    "Как красиво он выглядит",

                scores: {
                    design: 4,
                    digitalArt: 1
                },

                vote:
                    "+1 к Дизайну"
            },


            {
                text:
                    "Как сделаны анимации",

                scores: {
                    frontend: 4,
                    gamedev: 2,
                    design: 1
                },

                vote:
                    "+1 к Frontend"
            },


            {
                text:
                    "Кто его придумал и зачем",

                scores: {
                    design: 2,
                    aiUser: 1,
                    gamedev: 1
                },

                vote:
                    "+1 к Дизайну"
            }

        ]
    },


    /* 7 */

    {
        type: "single",

        title:
            "Что тебе интереснее изучать?",

        options: [

            {
                text:
                    "Как работают программы",

                scores: {
                    dev: 4,
                    frontend: 2
                },

                vote:
                    "+1 к Разработке"
            },


            {
                text:
                    "Как работают нейросети",

                scores: {
                    aiEngineer: 4,
                    aiUser: 2
                },

                vote:
                    "+1 к AI Engineer"
            },


            {
                text:
                    "Как рисуют цифровые иллюстрации",

                scores: {
                    digitalArt: 4,
                    design: 2
                },

                vote:
                    "+1 к Digital Art"
            },


            {
                text:
                    "Как создаются игры",

                scores: {
                    gamedev: 4,
                    dev: 1
                },

                vote:
                    "+1 к GameDev"
            }

        ]
    },


    /* 8 */

    {
        type: "single",

        title:
            "Какую задачу ты выберешь первой?",

        options: [

            {
                text:
                    "Найти ошибку в программе",

                scores: {
                    dev: 4,
                    frontend: 2
                },

                vote:
                    "+1 к Разработке"
            },


            {
                text:
                    "Нарисовать персонажа",

                scores: {
                    digitalArt: 4,
                    gamedev: 1
                },

                vote:
                    "+1 к Digital Art"
            },


            {
                text:
                    "Сделать красивую кнопку",

                scores: {
                    design: 3,
                    frontend: 4
                },

                vote:
                    "+1 к Frontend"
            },


            {
                text:
                    "Научить компьютер чему-нибудь новому",

                scores: {
                    aiEngineer: 4,
                    aiUser: 2
                },

                vote:
                    "+1 к AI Engineer"
            }

        ]
    },


    /* 9 */

    {
        type: "single",

        title:
            "Что тебе ближе?",

        options: [

            {
                text:
                    "Логика",

                scores: {
                    dev: 3,
                    aiEngineer: 3
                },

                vote:
                    "+1 к Разработке"
            },


            {
                text:
                    "Красота",

                scores: {
                    design: 4,
                    digitalArt: 2,
                    frontend: 1
                },

                vote:
                    "+1 к Дизайну"
            },


            {
                text:
                    "Фантазия",

                scores: {
                    gamedev: 3,
                    digitalArt: 3
                },

                vote:
                    "+1 к GameDev"
            },


            {
                text:
                    "Исследование",

                scores: {
                    aiEngineer: 3,
                    aiUser: 2,
                    dev: 1
                },

                vote:
                    "+1 к AI Engineer"
            }

        ]
    },


    /* 10 */

    {
        type: "single",

        title:
            "Если что-то не получается...",

        options: [

            {
                text:
                    "Буду искать ошибку",

                scores: {
                    dev: 4,
                    frontend: 2,
                    aiEngineer: 2
                },

                vote:
                    "+1 к Разработке"
            },


            {
                text:
                    "Попробую другой способ",

                scores: {
                    gamedev: 2,
                    aiUser: 2,
                    aiEngineer: 2
                },

                vote:
                    "+1 к AI"
            },


            {
                text:
                    "Посмотрю примеры",

                scores: {
                    frontend: 2,
                    design: 1,
                    aiUser: 2
                },

                vote:
                    "+1 к Frontend"
            },


            {
                text:
                    "Попрошу подсказку",

                scores: {
                    aiUser: 2,
                    frontend: 1
                },

                vote:
                    "+1 к AI User"
            }

        ]
    },


    /* 11 */

    {
        type: "single",

        title:
            "Какая работа кажется интереснее?",

        options: [

            {
                text:
                    "Создавать сложные программы",

                scores: {
                    dev: 4,
                    aiEngineer: 2
                },

                vote:
                    "+1 к Разработке"
            },


            {
                text:
                    "Делать красивые сайты",

                scores: {
                    frontend: 4,
                    design: 3
                },

                vote:
                    "+1 к Frontend"
            },


            {
                text:
                    "Делать игры",

                scores: {
                    gamedev: 5
                },

                vote:
                    "+1 к GameDev"
            },


            {
                text:
                    "Создавать изображения",

                scores: {
                    digitalArt: 5,
                    design: 2
                },

                vote:
                    "+1 к Digital Art"
            },


            {
                text:
                    "Работать с искусственным интеллектом",

                scores: {
                    aiUser: 3,
                    aiEngineer: 3
                },

                vote:
                    "+1 к AI"
            }

        ]
    },


    /* 12 */

    {
        type: "single",

        title:
            "Представь, что тебе дали совершенно новую программу. Ты...",

        options: [

            {
                text:
                    "Сразу начну нажимать всё подряд",

                scores: {
                    gamedev: 1,
                    aiUser: 3
                },

                vote:
                    "+1 к AI User"
            },


            {
                text:
                    "Найду инструкцию",

                scores: {
                    dev: 2,
                    frontend: 2
                },

                vote:
                    "+1 к Разработке"
            },


            {
                text:
                    "Посмотрю обучающее видео",

                scores: {
                    aiUser: 2,
                    design: 1
                },

                vote:
                    "+1 к AI User"
            },


            {
                text:
                    "Сам догадаюсь",

                scores: {
                    dev: 2,
                    gamedev: 2,
                    aiEngineer: 2
                },

                vote:
                    "+1 к Разработке"
            }

        ]
    },


    /* 13 */

    {
        type: "single",

        title:
            "Что тебе больше нравится?",

        options: [

            {
                text:
                    "Доводить работу до идеала",

                scores: {
                    dev: 3,
                    design: 2,
                    digitalArt: 2
                },

                vote:
                    "+1 к Дизайну"
            },


            {
                text:
                    "Начинать новые проекты",

                scores: {
                    gamedev: 3,
                    aiUser: 2
                },

                vote:
                    "+1 к GameDev"
            },


            {
                text:
                    "Генерировать идеи",

                scores: {
                    design: 2,
                    digitalArt: 2,
                    gamedev: 2,
                    aiUser: 2
                },

                vote:
                    "+1 к Дизайну"
            },


            {
                text:
                    "Анализировать",

                scores: {
                    dev: 3,
                    aiEngineer: 4
                },

                vote:
                    "+1 к AI Engineer"
            }

        ]
    },


    /* 14 */

    {
        type: "single",

        title:
            "Что тебе интереснее создавать?",

        options: [

            {
                text:
                    "Полезные программы",

                scores: {
                    dev: 4
                },

                vote:
                    "+1 к Разработке"
            },


            {
                text:
                    "Красивые интерфейсы",

                scores: {
                    frontend: 4,
                    design: 3
                },

                vote:
                    "+1 к Frontend"
            },


            {
                text:
                    "Игры",

                scores: {
                    gamedev: 5
                },

                vote:
                    "+1 к GameDev"
            },


            {
                text:
                    "Арты",

                scores: {
                    digitalArt: 5
                },

                vote:
                    "+1 к Digital Art"
            },


            {
                text:
                    "Умных помощников",

                scores: {
                    aiUser: 3,
                    aiEngineer: 3
                },

                vote:
                    "+1 к AI"
            }

        ]
    },


    /* 15 */

    {
        type: "single",

        title:
            "Какая фраза больше про тебя?",

        options: [

            {
                text:
                    "Люблю порядок",

                scores: {
                    dev: 3,
                    aiEngineer: 2
                },

                vote:
                    "+1 к Разработке"
            },


            {
                text:
                    "Люблю творчество",

                scores: {
                    design: 3,
                    digitalArt: 3,
                    gamedev: 1
                },

                vote:
                    "+1 к Дизайну"
            },


            {
                text:
                    "Люблю фантазировать",

                scores: {
                    gamedev: 3,
                    digitalArt: 3
                },

                vote:
                    "+1 к GameDev"
            },


            {
                text:
                    "Люблю исследовать новое",

                scores: {
                    aiUser: 3,
                    aiEngineer: 3
                },

                vote:
                    "+1 к AI"
            }

        ]
    },


    /* 16 */

    {
        type: "range",

        title:
            "Насколько тебе нравится решать логические задачи?",

        minLabel:
            "Совсем не люблю",

        maxLabel:
            "Очень люблю",

        scoreMap: {

            dev:
                0.35,

            aiEngineer:
                0.45,

            gamedev:
                0.15,

            frontend:
                0.05

        },

        vote:
            "+1 к Разработке"
    },


    /* 17 */

    {
        type: "range",

        title:
            "Насколько тебе нравится рисовать?",

        minLabel:
            "Совсем не люблю",

        maxLabel:
            "Очень люблю",

        scoreMap: {

            digitalArt:
                0.5,

            design:
                0.35,

            gamedev:
                0.1,

            frontend:
                0.05

        },

        vote:
            "+1 к Digital Art"
    },


    /* 18 */

    {
        type: "range",

        title:
            "Насколько тебе интересны компьютерные игры не только как игроку, но и как создателю?",

        minLabel:
            "Только играть",

        maxLabel:
            "Хочу создавать",

        scoreMap: {

            gamedev:
                0.65,

            design:
                0.1,

            dev:
                0.1,

            digitalArt:
                0.1,

            aiEngineer:
                0.05

        },

        vote:
            "+1 к GameDev"
    },


    /* 19 */

    {
        type: "range",

        title:
            "Насколько тебе интересно понять, как работает программа?",

        minLabel:
            "Неинтересно",

        maxLabel:
            "Очень интересно",

        scoreMap: {

            dev:
                0.5,

            frontend:
                0.18,

            aiEngineer:
                0.25,

            gamedev:
                0.07

        },

        vote:
            "+1 к Разработке"
    },


    /* 20 */

    {
        type: "range",

        title:
            "Насколько тебе нравится делать красивые вещи?",

        minLabel:
            "Неважно",

        maxLabel:
            "Очень важно",

        scoreMap: {

            design:
                0.45,

            digitalArt:
                0.3,

            frontend:
                0.2,

            gamedev:
                0.05

        },

        vote:
            "+1 к Дизайну"
    },


    /* 21 */

    {
        type: "range",

        title:
            "Насколько тебе интересно экспериментировать с нейросетями?",

        minLabel:
            "Совсем неинтересно",

        maxLabel:
            "Очень интересно",

        scoreMap: {

            aiUser:
                0.6,

            aiEngineer:
                0.25,

            design:
                0.05,

            digitalArt:
                0.05,

            dev:
                0.05

        },

        vote:
            "+1 к AI User"
    },


    /* 22 */

    {
        type: "range",

        title:
            "Насколько тебе интересно самому создавать искусственный интеллект?",

        minLabel:
            "Неинтересно",

        maxLabel:
            "Очень интересно",

        scoreMap: {

            aiEngineer:
                0.65,

            dev:
                0.2,

            aiUser:
                0.1,

            gamedev:
                0.05

        },

        vote:
            "+1 к AI Engineer"
    },


    /* 23 */

    {
        type: "range",

        title:
            "Насколько тебе нравится искать ошибки и исправлять их?",

        minLabel:
            "Не люблю",

        maxLabel:
            "Нравится",

        scoreMap: {

            dev:
                0.45,

            frontend:
                0.22,

            aiEngineer:
                0.28,

            gamedev:
                0.05

        },

        vote:
            "+1 к Разработке"
    },


    /* 24 */

    {
        type: "single",

        title:
            "Представь, что ты можешь бесплатно пройти любой курс. Что выберешь?",

        help:
            "Последний вопрос — просто выбери направление, к которому сейчас больше всего тянет.",

        options: [

            {
                text:
                    "Разработка программ",

                scores: {
                    dev: 6
                },

                vote:
                    "+1 к Разработке"
            },


            {
                text:
                    "Frontend-разработка",

                scores: {
                    frontend: 6
                },

                vote:
                    "+1 к Frontend"
            },


            {
                text:
                    "Разработка игр",

                scores: {
                    gamedev: 6
                },

                vote:
                    "+1 к GameDev"
            },


            {
                text:
                    "Графический дизайн",

                scores: {
                    design: 6
                },

                vote:
                    "+1 к Дизайну"
            },


            {
                text:
                    "Цифровой рисунок",

                scores: {
                    digitalArt: 6
                },

                vote:
                    "+1 к Digital Art"
            },


            {
                text:
                    "Использование нейросетей",

                scores: {
                    aiUser: 6
                },

                vote:
                    "+1 к AI User"
            },


            {
                text:
                    "Создание нейросетей",

                scores: {
                    aiEngineer: 6
                },

                vote:
                    "+1 к AI Engineer"
            }

        ]
    }

];


/* =========================================
   STATE
========================================= */

const state = {

    current:
        0,

    answers:
        Array(questions.length).fill(null),

    scores:
        Object.fromEntries(
            profileOrder.map(
                key => [key, 0]
            )
        ),

    profile:
        Object.fromEntries(
            profileOrder.map(
                key => [key, 0]
            )
        )

};


/* =========================================
   DOM
========================================= */

const startScreen =
    document.getElementById("startScreen");


const quizScreen =
    document.getElementById("quizScreen");


const resultsScreen =
    document.getElementById("resultsScreen");


const questionHost =
    document.getElementById("questionHost");


const interestList =
    document.getElementById("interestList");


const progressBar =
    document.getElementById("progressBar");


const progressText =
    document.getElementById("progressText");


const progressPercent =
    document.getElementById("progressPercent");


const backBtn =
    document.getElementById("backBtn");


const nextBtn =
    document.getElementById("nextBtn");


const scoreToast =
    document.getElementById("scoreToast");


/* =========================================
   EMAILJS INITIALIZATION
========================================= */

// ⚠️ ВАЖНО: Замените "ВАШ_PUBLIC_KEY" на ваш реальный Public Key из EmailJS
// Получить можно здесь: https://dashboard.emailjs.com/admin/account
(function() {
    emailjs.init({
        publicKey: "_lb-BSelfaLtrYDbn" // ЗАМЕНИТЕ НА ВАШ РЕАЛЬНЫЙ PUBLIC KEY
    });
})();


/* =========================================
   PROFILE RENDER
========================================= */

function renderProfile() {

    interestList.innerHTML =

        profileOrder
            .map(key => {

                const direction =
                    directions[key];

                const value = Math.max(
                    0,
                    Math.min(
                        100,
                        Math.round(
                            state.profile[key]
                        )
                    )
                );


                return `

                    <div class="interest-row">

                        <div
                            class="interest-icon"
                        >
                            ${direction.icon}
                        </div>


                        <div>

                            <div
                                class="interest-label-row"
                            >

                                <span>
                                    ${direction.name}
                                </span>

                                <span>
                                    ${value}%
                                </span>

                            </div>


                            <div
                                class="mini-track"
                            >

                                <div
                                    class="mini-fill"
                                    style="
                                        width:${value}%;
                                        background:${direction.color}
                                    "
                                ></div>

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

    const totals =
        Object.values(
            state.scores
        );


    const max =
        Math.max(
            ...totals,
            1
        );


    profileOrder.forEach(key => {

        state.profile[key] =

            (
                state.scores[key]
                /
                max
            )
            *
            100;

    });


    renderProfile();

}


/* =========================================
   SHOW SCORE TOAST
========================================= */

function showToast(
    text,
    directionKey
) {

    scoreToast.textContent =
        text;


    scoreToast.style.background =
        directions[
            directionKey
        ]?.color

        ||

        "#07a2e2";


    scoreToast.classList.remove(
        "show"
    );


    /*
       Перезапускаем CSS-анимацию
    */

    void scoreToast.offsetWidth;


    scoreToast.classList.add(
        "show"
    );

}


/* =========================================
   CLEAR PREVIOUS ANSWER
========================================= */

function clearQuestionContribution(
    index
) {

    const answer =
        state.answers[index];


    if (!answer) {
        return;
    }


    if (
        answer.type
        ===
        "single"
    ) {

        Object.entries(
            answer.scores
        )
        .forEach(
            ([key, value]) => {

                state.scores[key]
                    -=
                    value;

            }
        );

    }


    else if (
        answer.type
        ===
        "range"
    ) {

        Object.entries(
            answer.contribution
        )
        .forEach(
            ([key, value]) => {

                state.scores[key]
                    -=
                    value;

            }
        );

    }

}


/* =========================================
   APPLY SINGLE ANSWER
========================================= */

function applySingleAnswer(
    question,
    optionIndex
) {

    /*
       Если пользователь вернулся назад
       и поменял ответ —
       убираем старые баллы.
    */

    clearQuestionContribution(
        state.current
    );


    const option =
        question.options[
            optionIndex
        ];


    /*
       Начисляем новые баллы
    */

    Object.entries(
        option.scores
    )
    .forEach(
        ([key, value]) => {

            state.scores[key]
                +=
                value;

        }
    );


    /*
       Сохраняем ответ
    */

    state.answers[
        state.current
    ] = {

        type:
            "single",

        optionIndex:
            optionIndex,

        scores:
            {
                ...option.scores
            },

        vote:
            option.vote,

        // Сохраняем текст ответа для email
        text: option.text

    };


    /*
       Обновляем профиль
    */

    updateProfileFromScores();


    /*
       Определяем главное
       направление этого ответа
    */

    const directionKey =

        Object.keys(
            option.scores
        )
        .sort(
            (a, b) =>
                option.scores[b]
                -
                option.scores[a]
        )[0];


    /*
       Показываем анимацию
    */

    showToast(
        option.vote,
        directionKey
    );

}


/* =========================================
   APPLY RANGE ANSWER
========================================= */

function applyRangeAnswer(
    question,
    value
) {

    /*
       Удаляем предыдущий вклад
       этой шкалы.
    */

    clearQuestionContribution(
        state.current
    );


    const numericValue =
        Number(value);


    const contribution = {};


    /*
       Начисляем баллы
       в зависимости от
       значения шкалы.
    */

    Object.entries(
        question.scoreMap
    )
    .forEach(
        ([key, weight]) => {

            const points =
                numericValue
                *
                weight;


            contribution[key] =
                points;


            state.scores[key]
                +=
                points;

        }
    );


    /*
       Сохраняем ответ
    */

    state.answers[
        state.current
    ] = {

        type:
            "range",

        value:
            numericValue,

        contribution:
            contribution,

        vote:
            question.vote,

        // Сохраняем текст ответа для email
        text: `${numericValue} из 10`

    };


    /*
       Обновляем профиль
    */

    updateProfileFromScores();

}


/* =========================================
   RENDER QUESTION
========================================= */

function renderQuestion() {

    const question =
        questions[
            state.current
        ];


    const answer =
        state.answers[
            state.current
        ];


    const number =
        state.current
        +
        1;


    const percent =
        Math.round(
            (
                number
                /
                questions.length
            )
            *
            100
        );


    /*
       Progress
    */

    progressText.textContent =
        `Вопрос ${number} из ${questions.length}`;


    progressPercent.textContent =
        `${percent}%`;


    progressBar.style.width =
        `${percent}%`;


    /*
       Navigation
    */

    backBtn.disabled =
        state.current === 0;


    backBtn.style.opacity =
        state.current === 0
            ? ".45"
            : "1";


    nextBtn.textContent =

        state.current
        ===
        questions.length - 1

            ?

        "Показать результат"

            :

        "Дальше →";


    /*
       Question header
    */

    const questionHeader = `

        <div
            class="question-meta"
        >
            Вопрос ${number}
        </div>


        <div
            class="question-title"
        >
            ${question.title}
        </div>


        ${
            question.help
            ?

            `

            <div
                class="question-help"
            >
                ${question.help}
            </div>

            `

            :

            ""
        }

    `;


    /*
       SINGLE QUESTION
    */

    if (
        question.type
        ===
        "single"
    ) {

        questionHost.innerHTML = `

            ${questionHeader}


            <div
                class="options"
            >

                ${
                    question.options

                    .map(
                        (
                            option,
                            index
                        ) => `

                        <label
                            class="
                                option
                                ${
                                    answer
                                    ?.optionIndex
                                    ===
                                    index

                                    ?

                                    "selected"

                                    :

                                    ""
                                }
                            "
                        >

                            <input
                                type="radio"

                                name="
                                    question-${state.current}
                                "

                                value="${index}"

                                ${
                                    answer
                                    ?.optionIndex
                                    ===
                                    index

                                    ?

                                    "checked"

                                    :

                                    ""
                                }
                            >


                            <div
                                class="option-content"
                            >

                                <div
                                    class="option-dot"
                                ></div>


                                <div
                                    class="option-text"
                                >
                                    ${option.text}
                                </div>

                            </div>

                        </label>

                    `
                    )
                    .join("")
                }

            </div>

        `;


        /*
           Добавляем обработчики
        */

        questionHost
            .querySelectorAll(
                ".option"
            )
            .forEach(
                (
                    element,
                    index
                ) => {

                    element.addEventListener(
                        "click",
                        () => {

                            applySingleAnswer(
                                question,
                                index
                            );


                            questionHost
                                .querySelectorAll(
                                    ".option"
                                )
                                .forEach(
                                    el =>

                                        el.classList
                                            .remove(
                                                "selected"
                                            )
                                );


                            element.classList.add(
                                "selected"
                            );

                        }
                    );

                }
            );

    }


    /*
       RANGE QUESTION
    */

    else {

        const value =
            answer
            ?.value

            ??

            5;


        questionHost.innerHTML = `

            ${questionHeader}


            <div
                class="range-card"
            >

                <div
                    class="range-header"
                >

                    <strong>
                        Твоя оценка
                    </strong>


                    <div
                        class="range-value"
                        id="rangeValue"
                    >
                        ${value}
                    </div>

                </div>


                <input

                    id="rangeInput"

                    type="range"

                    min="1"

                    max="10"

                    step="1"

                    value="${value}"

                >


                <div
                    class="range-labels"
                >

                    <span>
                        ${question.minLabel}
                    </span>


                    <span>
                        ${question.maxLabel}
                    </span>

                </div>

            </div>

        `;


        const rangeInput =
            document.getElementById(
                "rangeInput"
            );


        const rangeValue =
            document.getElementById(
                "rangeValue"
            );


        /*
           Когда двигаем ползунок
        */

        rangeInput.addEventListener(
            "input",
            () => {

                rangeValue.textContent =
                    rangeInput.value;


                applyRangeAnswer(
                    question,
                    rangeInput.value
                );

            }
        );


        /*
           Если пользователь впервые
           открыл вопрос —
           выставляем значение 5.
        */

        if (!answer) {

            applyRangeAnswer(
                question,
                value
            );

        }

    }

}


/* =========================================
   SWITCH SCREEN
========================================= */

function switchScreen(
    screen
) {

    [
        startScreen,
        quizScreen,
        resultsScreen

    ]
    .forEach(
        element =>

            element.classList
                .remove(
                    "active"
                )
    );


    screen.classList.add(
        "active"
    );


    window.scrollTo(
        {
            top: 0,
            behavior: "smooth"
        }
    );

}


/* =========================================
   CHECK ANSWER
========================================= */

function hasAnswer() {

    return (

        state.answers[
            state.current
        ]

        !==

        null

    );

}


/* =========================================
   CALCULATE RESULTS
========================================= */

function calculateResults() {

    /*
       Сортируем направления
       от максимального балла
       к минимальному.
    */

    const sorted =

        [
            ...profileOrder
        ]
        .sort(

            (a, b) =>

                state.scores[b]
                -
                state.scores[a]

        );


    /*
       Используем самое высокое
       значение как 100%.
    */

    const max =

        Math.max(

            ...sorted.map(
                key =>
                    state.scores[key]
            ),

            1

        );


    const normalized = {};


    sorted.forEach(
        key => {

            normalized[key] =

                Math.round(

                    (
                        state.scores[key]
                        /
                        max
                    )
                    *
                    100

                );

        }
    );


    return {

        sorted,

        normalized

    };

}


/* =========================================
   RENDER RESULTS
========================================= */

function renderResults() {

    const {

        sorted,

        normalized

    } =
        calculateResults();


    /*
       Получаем имя
    */

    const studentName =

        document
            .getElementById(
                "studentName"
            )
            .value
            .trim()

        ||

        "Твой";


    document
        .getElementById(
            "resultsTitle"
        )
        .textContent =

        `${studentName}, вот твои направления`;


    /*
       Берём TOP 5
    */

    const top =
        sorted.slice(
            0,
            5
        );


    /*
       Строим карточки
    */

    document
        .getElementById(
            "resultGrid"
        )
        .innerHTML =

        top
            .map(
                (
                    key,
                    index
                ) => {

                    const direction =
                        directions[key];


                    const percent =
                        normalized[key];


                    return `

                        <div
                            class="result-card"
                        >

                            <div
                                class="result-rank"
                                style="
                                    color:
                                    ${direction.color}
                                "
                            >
                                ${index + 1}
                            </div>


                            <div
                                class="result-main"
                            >

                                <h3>

                                    ${direction.icon}

                                    ${direction.name}

                                </h3>


                                <p>

                                    ${direction.description}

                                </p>


                                <div
                                    class="result-meter"
                                >

                                    <span

                                        style="
                                            width:
                                            ${percent}%;

                                            background:
                                            linear-gradient(
                                                90deg,
                                                ${direction.color},
                                                #0393d1
                                            );
                                        "

                                    ></span>

                                </div>

                            </div>


                            <div
                                class="result-percent"
                            >

                                ${percent}%

                            </div>

                        </div>

                    `;

                }
            )
            .join("");


    /*
       Победитель
    */

    const winner =
        directions[
            sorted[0]
        ];


    const second =
        directions[
            sorted[1]
        ];


    document
        .getElementById(
            "winnerBlock"
        )
        .innerHTML = `

            <div
                class="winner-tag"
            >
                Самое сильное совпадение
            </div>


            <h3>

                ${winner.icon}

                ${winner.name}

            </h3>


            <p>

                ${winner.description}

                <br>
                <br>

                <strong>
                    Что попробовать первым:
                </strong>

                ${winner.starter}

                <br>
                <br>

                Также тебе может подойти
                соседнее направление —

                <strong>

                    ${second.icon}

                    ${second.name}

                </strong>.

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
   SEND RESULTS BY EMAIL
========================================= */

async function sendResultsByEmail(userName, userAge, userEmail, resultsData) {
    try {
        // Получаем все ответы
        const allAnswers = getAllAnswers();
        
        // Формируем текст письма с ответами для поля results
        const emailContent = formatResultsForEmail(userName, userAge, resultsData, allAnswers);
        
        // Создаем объект с ответами для шаблона
        const answerParams = {};
        allAnswers.forEach((answer, index) => {
            const num = index + 1;
            answerParams[`q${num}`] = `${answer.questionText}\nОтвет: ${answer.answerText}`;
        });
        
        // Получаем текущее время
        const now = new Date();
        const timeString = now.toLocaleString('ru-RU', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        
        // Параметры для отправки
        // ⚠️ ВАЖНО: Замените "YOUR_SERVICE_ID" и "YOUR_TEMPLATE_ID" на ваши реальные ID
        const templateParams = {
            // Основные поля из вашего шаблона
            name: userName,
            time: timeString,
            timestamp: timeString,
            
            // Дополнительные поля
            age: userAge || 'Не указан',
            results: emailContent,
            
            // Топ направлений
            top1: resultsData.sorted[0] ? directions[resultsData.sorted[0]].name : 'Не определено',
            top2: resultsData.sorted[1] ? directions[resultsData.sorted[1]].name : 'Не определено',
            top3: resultsData.sorted[2] ? directions[resultsData.sorted[2]].name : 'Не определено',
            
            // Ответы на вопросы (q1 - q24)
            ...answerParams
        };

        // Отправка письма
        const response = await emailjs.send(
            "service_obgtkc5",    // ЗАМЕНИТЕ НА ВАШ SERVICE ID
            "template_3d19smr",   // ЗАМЕНИТЕ НА ВАШ TEMPLATE ID
            templateParams
        );

        console.log('Email отправлен успешно!', response.status, response.text);
        showToast(`✅ Результаты отправлены на ${userEmail}!`, "frontend");
        
    } catch (error) {
        console.error('Ошибка отправки email:', error);
        
        // Более детальная обработка ошибок
        let errorMessage = "❌ Не удалось отправить email.";
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
        showToast(errorMessage, "frontend");
    }
}


/* =========================================
   FORMAT RESULTS FOR EMAIL
========================================= */

function formatResultsForEmail(userName, userAge, resultsData, allAnswers) {
    const { sorted, normalized } = resultsData;
    
    let formattedText = `📊 РЕЗУЛЬТАТЫ ПРОФОРИЕНТАЦИОННОГО ТЕСТА\n`;
    formattedText += `====================================\n\n`;
    formattedText += `👤 Имя: ${userName}\n`;
    formattedText += `📅 Возраст: ${userAge || 'Не указан'}\n\n`;
    
    // Все ответы пользователя
    formattedText += `📝 ОТВЕТЫ НА ВОПРОСЫ:\n`;
    formattedText += `------------------------------------\n\n`;
    
    allAnswers.forEach((answer, index) => {
        const num = index + 1;
        formattedText += `${num}. ${answer.questionText}\n`;
        formattedText += `   Ответ: ${answer.answerText}\n\n`;
    });
    
    formattedText += `====================================\n\n`;
    formattedText += `🏆 ТОП НАПРАВЛЕНИЙ:\n`;
    formattedText += `------------------------------------\n\n`;
    
    sorted.slice(0, 5).forEach((key, index) => {
        const direction = directions[key];
        const percent = normalized[key];
        const emoji = direction.icon || '';
        formattedText += `${index + 1}. ${emoji} ${direction.name}\n`;
        formattedText += `   Совпадение: ${percent}%\n`;
        formattedText += `   ${direction.description}\n\n`;
    });
    
    // Добавляем победителя
    const winner = directions[sorted[0]];
    formattedText += `⭐ ГЛАВНАЯ РЕКОМЕНДАЦИЯ:\n`;
    formattedText += `   ${winner.icon} ${winner.name}\n\n`;
    formattedText += `💡 Попробуй: ${winner.starter}\n\n`;
    formattedText += `====================================\n`;
    formattedText += `Тест пройден: ${new Date().toLocaleDateString('ru-RU')}`;
    
    return formattedText;
}


/* =========================================
   RESET TEST
========================================= */

function resetTest() {

    state.current =
        0;


    state.answers =
        Array(
            questions.length
        )
        .fill(null);


    state.scores =

        Object.fromEntries(

            profileOrder.map(

                key => [
                    key,
                    0
                ]

            )

        );


    state.profile =

        Object.fromEntries(

            profileOrder.map(

                key => [
                    key,
                    0
                ]

            )

        );


    /*
       Очищаем поля
    */

    document
        .getElementById(
            "studentName"
        )
        .value = "";


    document
        .getElementById(
            "studentAge"
        )
        .value = "";


    document
        .getElementById(
            "studentEmail"
        )
        .value = "";


    /*
       Сброс профиля
    */

    renderProfile();


    /*
       Возвращаемся на первый экран
    */

    switchScreen(
        startScreen
    );

}


/* =========================================
   START BUTTON
========================================= */

document
    .getElementById(
        "startBtn"
    )
    .addEventListener(
        "click",
        () => {

            const name =

                document
                    .getElementById(
                        "studentName"
                    )
                    .value
                    .trim();


            const email =

                document
                    .getElementById(
                        "studentEmail"
                    )
                    .value
                    .trim();


            /*
               Имя обязательно
            */

            if (!name) {

                const nameInput =

                    document
                        .getElementById(
                            "studentName"
                        );


                nameInput.focus();


                nameInput.style.borderColor =
                    "var(--danger)";


                setTimeout(
                    () => {

                        nameInput.style.borderColor =
                            "";

                    },

                    800
                );


                return;

            }


            /*
               Проверяем email (необязательно, но рекомендуется)
            */

            if (email && !isValidEmail(email)) {

                const emailInput =

                    document
                        .getElementById(
                            "studentEmail"
                        );


                emailInput.focus();


                emailInput.style.borderColor =
                    "var(--danger)";


                showToast(
                    "⚠️ Пожалуйста, введите корректный email",
                    "frontend"
                );


                setTimeout(
                    () => {

                        emailInput.style.borderColor =
                            "";

                    },

                    800
                );


                return;

            }


            /*
               Начинаем тест
            */

            state.current =
                0;


            switchScreen(
                quizScreen
            );


            renderQuestion();

        }
    );


/* =========================================
   VALIDATE EMAIL
========================================= */

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


/* =========================================
   NEXT BUTTON
========================================= */

nextBtn.addEventListener(
    "click",
    () => {

        /*
           Проверяем наличие ответа
        */

        if (
            !hasAnswer()
        ) {

            showToast(

                "Выбери ответ, чтобы продолжить ",

                "frontend"

            );

            return;

        }


        /*
           Последний вопрос
        */

        if (

            state.current

            ===

            questions.length - 1

        ) {

            renderResults();


            switchScreen(
                resultsScreen
            );


            return;

        }


        /*
           Следующий вопрос
        */

        state.current++;


        renderQuestion();

    }
);


/* =========================================
   BACK BUTTON
========================================= */

backBtn.addEventListener(
    "click",
    () => {

        if (
            state.current
            ===
            0
        ) {

            return;

        }


        state.current--;


        renderQuestion();

    }
);


/* =========================================
   SEND EMAIL BUTTON
========================================= */

document
    .getElementById('sendEmailBtn')
    .addEventListener('click', async () => {
        
        // Получаем данные пользователя
        const userName = document.getElementById('studentName').value.trim() || 'Пользователь';
        const userAge = document.getElementById('studentAge').value || '';
        const userEmail = document.getElementById('studentEmail').value.trim();
        
        // Проверяем, указан ли email
        if (!userEmail) {
            showToast("⚠️ Пожалуйста, укажите email для отправки результатов", "frontend");
            document.getElementById('studentEmail').focus();
            document.getElementById('studentEmail').style.borderColor = "var(--danger)";
            setTimeout(() => {
                document.getElementById('studentEmail').style.borderColor = "";
            }, 800);
            return;
        }
        
        // Проверяем корректность email
        if (!isValidEmail(userEmail)) {
            showToast("⚠️ Пожалуйста, введите корректный email адрес", "frontend");
            document.getElementById('studentEmail').focus();
            document.getElementById('studentEmail').style.borderColor = "var(--danger)";
            setTimeout(() => {
                document.getElementById('studentEmail').style.borderColor = "";
            }, 800);
            return;
        }
        
        // Получаем результаты
        const results = calculateResults();
        
        // Показываем уведомление о загрузке
        showToast("⏳ Отправка результатов...", "frontend");
        
        // Отправляем email
        await sendResultsByEmail(userName, userAge, userEmail, results);
    });


/* =========================================
   RESTART
========================================= */

document
    .getElementById(
        "restartBtn"
    )
    .addEventListener(
        "click",
        resetTest
    );


/* =========================================
   PRINT
========================================= */

document
    .getElementById(
        "printBtn"
    )
    .addEventListener(
        "click",
        () => {

            window.print();

        }
    );


/* =========================================
   INITIAL RENDER
========================================= */

renderProfile();