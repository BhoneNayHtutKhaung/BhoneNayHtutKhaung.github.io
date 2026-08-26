const questions = [
    {
        question: "What does 'Harm' mean?",
        options: [
            "Make someone stop doing something for a short time",
            "Damage",
            "Shut and open your eyes quickly",
            "Eat something steadily and often noisily"
        ],
        answer: 1
    },
    {
        question: "What does 'Munch' mean?",
        options: [
            "Make someone stop doing something for a short time",
            "Damage",
            "Shut and open your eyes quickly",
            "Eat something steadily and often noisily"
        ],
        answer: 3
    },
    {
        question: "What does 'Disturb' mean?",
        options: [
            "Make someone stop doing something for a short time",
            "Damage",
            "Shut and open your eyes quickly",
            "Eat something steadily and often noisily"
        ],
        answer: 0
    },
    {
        question: "What does 'Blink' mean?",
        options: [
            "Make someone stop doing something for a short time",
            "Damage",
            "Shut and open your eyes quickly",
            "Eat something steadily and often noisily"
        ],
        answer: 2
    }
];

let currentQuestion = 0;

function showQuestion() {
    const quiz = document.getElementById("quiz");
    const q = questions[currentQuestion];

    quiz.innerHTML = `
        <h2>Question ${currentQuestion + 1} / ${questions.length}</h2>
        <h3>${q.question}</h3>

        <div class="options">
            ${q.options.map((option, index) => `
                <button onclick="checkAnswer(${index})">
                    ${option}
                </button>
            `).join("")}
        </div>

        <p id="result"></p>
    `;
}

function checkAnswer(selected) {
    const result = document.getElementById("result");

    if (selected === questions[currentQuestion].answer) {
        result.innerHTML = "✅ Correct!";

        setTimeout(() => {
            currentQuestion++;

            if (currentQuestion < questions.length) {
                showQuestion();
            } else {
                showFinished();
            }
        }, 800);

    } else {
        result.innerHTML = "❌ Wrong answer. Try again!";
    }
}

function showFinished() {
    const quiz = document.getElementById("quiz");

    quiz.innerHTML = `
        <h2>🎉 Excellent!</h2>
        <p>You completed all 4 questions.</p>
        <p>Great job! 👏</p>
    `;
}

document
    .querySelector('a[href="#quiz"]')
    .addEventListener("click", function () {
        currentQuestion = 0;
        showQuestion();
    });
const fillQuestions = [
    {
        question: "Myanmar people eat rice, which is rich in ______.",
        answer: "starch"
    },
    {
        question: "Most people in Myanmar eat ______ at least once a day.",
        answer: "fish"
    },
    {
        question: "We need ______ to build and repair body tissues.",
        answer: "protein"
    },
    {
        question: "______ is a common source of protein in our diet.",
        answer: "meat"
    }
];

let currentFillQuestion = 0;

function showFillQuestion() {
    const fillblank = document.getElementById("fillblank");
    const q = fillQuestions[currentFillQuestion];

    fillblank.innerHTML = `
        <h2>Fill in the Blanks</h2>
        <h3>Question ${currentFillQuestion + 1} / ${fillQuestions.length}</h3>
        <p>${q.question}</p>

        <input type="text" id="fillAnswer" placeholder="Type your answer">

        <br><br>

        <button onclick="checkFillAnswer()">Check Answer</button>

        <p id="fillResult"></p>
    `;
}

function checkFillAnswer() {
    const input = document.getElementById("fillAnswer");
    const result = document.getElementById("fillResult");

    const userAnswer = input.value.trim().toLowerCase();
    const correctAnswer = fillQuestions[currentFillQuestion].answer.toLowerCase();

    if (userAnswer === correctAnswer) {

        result.innerHTML = "✅ Correct!";

        setTimeout(() => {
            currentFillQuestion++;

            if (currentFillQuestion < fillQuestions.length) {
                showFillQuestion();
            } else {
                fillblank.innerHTML = `
                    <h2>🎉 Excellent!</h2>
                    <p>You completed all 4 fill-in-the-blank questions.</p>
                    <p>Great job! 👏</p>
                `;
            }
        }, 800);

    } else {
        result.innerHTML = "❌ Wrong answer. Try again!";
    }
}

document
    .querySelector('a[href="#fillblank"]')
    .addEventListener("click", function () {
        currentFillQuestion = 0;
        showFillQuestion();
    });
