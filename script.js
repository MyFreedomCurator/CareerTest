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
        title: "Что тебе нравится делать больше всего в свободное время?",
        options: [
            {
                text: "Создавать что-то своими руками или в 3D-редакторе",
                scores: { modeling: 3, uiux: 1, digitalArt: 1 },
                vote: "к 3D-моделированию"
            },
            {
                text: "Сидеть в соц сетях, рассматривать работы художников, придумывать идеи для своих работ",
                scores: { uiux: 3, digitalArt: 2, web: 1 },
                vote: "к Дизайну"
            },
            {
                text: "Изучать новые технологии, как они создаются",
                scores: { python: 2, web: 2, ml: 2, ai: 1 },
                vote: "к Программированию"
            },
            {
                text: "Решать головоломки, играть в игры-стратегии",
                scores: { cybersecurity: 3, python: 1 },
                vote: "к Кибербезопасности"
            },
            {
                text: "Изучать что-то новое, составлять списки и анализировать результаты",
                scores: { ml: 3, python: 1, ai: 1 },
                vote: "к ML"
            }
        ]
    },
    /* 2 */
    {
        type: "single",
        title: "Какой школьный предмет тебе нравится больше?",
        options: [
            {
                text: "Математика, Алгебра, Геометрия, Физика",
                scores: { python: 2, ml: 3, ai: 2 },
                vote: "к ML"
            },
            {
                text: "Информатика",
                scores: { python: 3, web: 2, cybersecurity: 2, ml: 1 },
                vote: "к Программированию"
            },
            {
                text: "ИЗО, Музыка, Черчение, Дополнительные кружки",
                scores: { digitalArt: 3, uiux: 2, modeling: 1 },
                vote: "к Digital Art"
            },
            {
                text: "Труды",
                scores: { modeling: 3, uiux: 2 },
                vote: "к 3D-моделированию"
            },
            {
                text: "Всё что связано с созданием, а не просто изучением",
                scores: { modeling: 2, web: 1, python: 1 },
                vote: "к 3D-моделированию"
            }
        ]
    },
    /* 3 */
    {
        type: "single",
        title: "Что приносит тебе больше удовольствия при создании чего-то нового?",
        options: [
            {
                text: "Когда всё работает сразу и без ошибок",
                scores: { python: 4, web: 2, cybersecurity: 2 },
                vote: "к Программированию"
            },
            {
                text: "Когда получилось красиво и можно показать друзьям",
                scores: { uiux: 3, digitalArt: 3, modeling: 1 },
                vote: "к Дизайну"
            },
            {
                text: "Когда система становится надёжной и не разрушаемой",
                scores: { cybersecurity: 4, python: 2, web: 1 },
                vote: "к Кибербезопасности"
            },
            {
                text: "Когда внедряются современные технологии",
                scores: { ml: 4, ai: 3, python: 2 },
                vote: "к ML"
            }
        ]
    },
    /* 4 */
    {
        type: "single",
        title: "Представь, что ты создаёшь игру. Что тебе интереснее?",
        options: [
            {
                text: "Рисовать персонажей, создавать окружение",
                scores: { modeling: 4, digitalArt: 2 },
                vote: "к 3D-моделированию"
            },
            {
                text: "Продумывать детали для игроков: в какой стороне будет стоять этот эльф?",
                scores: { uiux: 3, web: 2 },
                vote: "к UX/UI"
            },
            {
                text: "Продумывать игровые механики, тестировать их работу на практике",
                scores: { python: 3, web: 2, ml: 1 },
                vote: "к Программированию"
            },
            {
                text: "Создавать систему рекомендаций или ИИ-противников",
                scores: { ai: 3, ml: 3, python: 2 },
                vote: "к AI"
            }
        ]
    },
    /* 5 */
    {
        type: "single",
        title: "Когда видишь красивый сайт, ты чаще думаешь...",
        options: [
            {
                text: "Как он устроен внутри",
                scores: { web: 4, python: 2, cybersecurity: 1 },
                vote: "к Web"
            },
            {
                text: "Как красиво он выглядит",
                scores: { uiux: 4, digitalArt: 1 },
                vote: "к Дизайну"
            },
            {
                text: "Можно ли в нем что-нибудь сломать",
                scores: { cybersecurity: 4, web: 2 },
                vote: "к Кибербезопасности"
            },
            {
                text: "Как улучшить его",
                scores: { ml: 3, ai: 2, python: 1 },
                vote: "к ML"
            }
        ]
    },
    /* 6 */
    {
        type: "single",
        title: "Что тебе интереснее изучать?",
        options: [
            {
                text: "Как создаются 3D-модели и анимация",
                scores: { modeling: 4, digitalArt: 2 },
                vote: "к 3D-моделированию"
            },
            {
                text: "Как нейросети помогают в жизни",
                scores: { ai: 3, ml: 3, python: 2 },
                vote: "к AI"
            },
            {
                text: "Как защитить свои данные и проекты в интернете",
                scores: { cybersecurity: 4, python: 1 },
                vote: "к Кибербезопасности"
            },
            {
                text: "Как создаются приложения и сайты",
                scores: { web: 4, python: 2 },
                vote: "к Web"
            }
        ]
    },
    /* 7 */
    {
        type: "single",
        title: "Есть проект по созданию сайта. Какую задачу ты выберешь первой?",
        options: [
            {
                text: "Нарисовать и спроектировать дизайн интерфейса",
                scores: { uiux: 4, digitalArt: 2, web: 1 },
                vote: "к UX/UI"
            },
            {
                text: "Создать работающие кнопки, проверить хранилище данных",
                scores: { python: 4, ml: 3, ai: 1 },
                vote: "к Python"
            },
            {
                text: "Определить технические характеристики, найти способ обезопасить систему заранее",
                scores: { cybersecurity: 4, python: 1 },
                vote: "к Кибербезопасности"
            },
            {
                text: "Погрузиться в дизайн и начать создавать объекты для сайта",
                scores: { modeling: 4, digitalArt: 1 },
                vote: "к 3D-моделированию"
            }
        ]
    },
    /* 8 */
    {
        type: "single",
        title: "Что тебе ближе?",
        options: [
            {
                text: "Творчество",
                scores: { digitalArt: 4, uiux: 2, modeling: 1 },
                vote: "к Digital Art"
            },
            {
                text: "Логика и алгоритмы",
                scores: { python: 3, web: 2, ml: 2 },
                vote: "к Программированию"
            },
            {
                text: "Очень сильное внимание к деталям",
                scores: { cybersecurity: 4, python: 1 },
                vote: "к Кибербезопасности"
            },
            {
                text: "Построение сложных стратегий для решения задач",
                scores: { ml: 4, ai: 2, python: 1 },
                vote: "к ML"
            }
        ]
    },
    /* 9 */
    {
        type: "single",
        title: "Если что-то не получается в работе за компьютером...",
        options: [
            {
                text: "Буду искать ошибку",
                scores: { python: 3, web: 2, cybersecurity: 1 },
                vote: "к Python"
            },
            {
                text: "Попробую другой подход к решению",
                scores: { ml: 3, ai: 2, python: 2 },
                vote: "к ML"
            },
            {
                text: "Поищу в интернете решение",
                scores: { web: 2, python: 1, ai: 1 },
                vote: "к Web"
            },
            {
                text: "Проверю, точно ли вся техника работает",
                scores: { cybersecurity: 3, python: 1 },
                vote: "к Кибербезопасности"
            }
        ]
    },
    /* 10 */
    {
        type: "single",
        title: "Какая работа кажется интереснее?",
        options: [
            {
                text: "Создавать 3D-персонажей и собственные миры",
                scores: { modeling: 4, digitalArt: 2 },
                vote: "к 3D-моделированию"
            },
            {
                text: "Делать удобные и красивые сайты",
                scores: { web: 4, uiux: 3 },
                vote: "к Web"
            },
            {
                text: "Защищать крутые приложения от атак хакеров",
                scores: { cybersecurity: 4, python: 1 },
                vote: "к Кибербезопасности"
            },
            {
                text: "Разрабатывать собственные нейронные сети",
                scores: { ml: 3, ai: 3, python: 2 },
                vote: "к ML"
            }
        ]
    },
    /* 11 */
    {
        type: "range",
        title: "Насколько тебе нравится решать логические задачи?",
        minLabel: "Совсем не люблю",
        maxLabel: "Очень люблю",
        scoreMap: {
            python: 0.35,
            web: 0.15,
            cybersecurity: 0.2,
            ml: 0.25,
            ai: 0.05
        },
        vote: "к Python"
    },
    /* 12 */
    {
        type: "range",
        title: "Насколько тебе нравится рисовать, лепить и создавать что-то новое руками?",
        minLabel: "Совсем не люблю",
        maxLabel: "Очень люблю",
        scoreMap: {
            digitalArt: 0.4,
            uiux: 0.3,
            modeling: 0.25,
            web: 0.05
        },
        vote: "к Digital Art"
    },
    /* 13 */
    {
        type: "range",
        title: "Насколько тебе интересно узнать о защитах против хакеров на сайтах, в играх и соц сетях?",
        minLabel: "Совсем неинтересно",
        maxLabel: "Очень интересно",
        scoreMap: {
            cybersecurity: 0.55,
            python: 0.15,
            web: 0.15,
            ml: 0.15
        },
        vote: "к Кибербезопасности"
    },
    /* 14 */
    {
        type: "range",
        title: "Тебе бы хотелось больше узнавать о том, как роботы учатся ходить, говорить и понимать людей?",
        minLabel: "Кажется неинтересным",
        maxLabel: "Очень хочется узнать",
        scoreMap: {
            ai: 0.3,
            ml: 0.3,
            python: 0.15,
            web: 0.25
        },
        vote: "к AI"
    },
    /* 15 */
    {
        type: "single",
        title: "Представь, что ты можешь бесплатно пройти любой курс. Что выберешь?",
        options: [
            {
                text: "3D-моделирование и анимация",
                scores: { modeling: 6 },
                vote: "к 3D-моделированию"
            },
            {
                text: "UX/UI дизайн",
                scores: { uiux: 6 },
                vote: "к UX/UI"
            },
            {
                text: "Цифровое рисование",
                scores: { digitalArt: 6 },
                vote: "к Digital Art"
            },
            {
                text: "Программирование на Python",
                scores: { python: 6 },
                vote: "к Python"
            },
            {
                text: "Нейросети и AI инструменты",
                scores: { ai: 6 },
                vote: "к AI"
            },
            {
                text: "Web-разработка",
                scores: { web: 6 },
                vote: "к Web"
            },
            {
                text: "Кибербезопасность",
                scores: { cybersecurity: 6 },
                vote: "к Кибербезопасности"
            },
            {
                text: "Введение в машинное обучение",
                scores: { ml: 6 },
                vote: "к ML"
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
    profile: Object.fromEntries(profileOrder.map(key => [key, 0]))
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
    scoreToast.style.background = directions[directionKey]?.color || "#07a2e2";
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
                        <span style="width: ${percent}%; background: linear-gradient(90deg, ${direction.color}, #0393d1);"></span>
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
   FORMAT RESULTS FOR EMAIL
========================================= */

function formatResultsForEmail(userName, userAge, userPhone, resultsData, allAnswers) {
    const { sorted, normalized } = resultsData;
    
    let formattedText = `РЕЗУЛЬТАТЫ ПРОФОРИЕНТАЦИОННОГО ТЕСТА\n`;
    formattedText += `====================================\n\n`;
    formattedText += `Имя: ${userName}\n`;
    formattedText += `Возраст: ${userAge || 'Не указан'}\n`;
    formattedText += `Телефон: ${userPhone || 'Не указан'}\n\n`;
    
    formattedText += ` НАБРАННЫЕ БАЛЛЫ ПО НАПРАВЛЕНИЯМ:\n`;
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
    formattedText += `ОТВЕТЫ НА ВОПРОСЫ:\n`;
    formattedText += `------------------------------------\n\n`;
    
    allAnswers.forEach((answer, index) => {
        const num = index + 1;
        formattedText += `${num}. ${answer.questionText}\n`;
        formattedText += `   Ответ: ${answer.answerText}\n\n`;
    });
    
    const winner = directions[sorted[0]];
    formattedText += `====================================\n`;
    formattedText += `ГЛАВНАЯ РЕКОМЕНДАЦИЯ:\n`;
    formattedText += `   ${winner.icon} ${winner.name}\n\n`;
    formattedText += `Попробуй: ${winner.starter}\n\n`;
    formattedText += `====================================\n`;
    formattedText += `Тест пройден: ${new Date().toLocaleDateString('ru-RU')}`;
    
    return formattedText;
}

/* =========================================
   SEND RESULTS BY EMAIL
========================================= */

async function sendResultsByEmail(userName, userAge, userPhone, resultsData) {
    try {
        const allAnswers = getAllAnswers();
        const emailContent = formatResultsForEmail(userName, userAge, userPhone, resultsData, allAnswers);
        
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
            name: userName,
            time: timeString,
            timestamp: timeString,
            age: userAge || 'Не указан',
            phone: userPhone || 'Не указан',
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
        showToast(`Отлично! В ближайшее время консультант свяжется с вами`, "web");
        
    } catch (error) {
        console.error('Ошибка отправки email:', error);
        let errorMessage = "Не удалось отправить результаты.";
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
   VALIDATE PHONE
========================================= */

function isValidPhone(phone) {
    const phoneRegex = /^[\+\d\s\-\(\)]{7,20}$/;
    return phoneRegex.test(phone);
}

/* =========================================
   RESET TEST
========================================= */

function resetTest() {
    state.current = 0;
    state.answers = Array(questions.length).fill(null);
    state.scores = Object.fromEntries(profileOrder.map(key => [key, 0]));
    state.profile = Object.fromEntries(profileOrder.map(key => [key, 0]));
    
    document.getElementById("studentName").value = "";
    document.getElementById("studentAge").value = "";
    document.getElementById("studentPhone").value = "";
    
    renderProfile();
    switchScreen(startScreen);
    profilePanel.style.display = "none";
}

/* =========================================
   START BUTTON
========================================= */

document.getElementById("startBtn").addEventListener("click", () => {
    const name = document.getElementById("studentName").value.trim();
    const phone = document.getElementById("studentPhone").value.trim();
    
    if (!name) {
        const nameInput = document.getElementById("studentName");
        nameInput.focus();
        nameInput.style.borderColor = "var(--danger)";
        setTimeout(() => { nameInput.style.borderColor = ""; }, 800);
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

nextBtn.addEventListener("click", () => {
    if (!hasAnswer()) {
        showToast("Выбери ответ, чтобы продолжить", "web");
        return;
    }
    
    if (state.current === questions.length - 1) {
        renderResults();
        switchScreen(resultsScreen);
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
   SEND PHONE BUTTON
========================================= */

document.getElementById('sendPhoneBtn').addEventListener('click', async () => {
    const userName = document.getElementById('studentName').value.trim() || 'Пользователь';
    const userAge = document.getElementById('studentAge').value || '';
    const userPhone = document.getElementById('studentPhone').value.trim();
    
    
    const results = calculateResults();
    showToast("Отправка результатов...", "web");
    await sendResultsByEmail(userName, userAge, userPhone, results);
});

/* =========================================
   RESTART
========================================= */

document.getElementById("restartBtn").addEventListener("click", resetTest);

/* =========================================
   PRINT
========================================= */

document.getElementById("printBtn").addEventListener("click", () => {
    window.print();
});

/* =========================================
   INITIAL RENDER
========================================= */

// Скрываем панель профиля при загрузке страницы
profilePanel.style.display = "none";
renderProfile();
