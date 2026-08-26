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
