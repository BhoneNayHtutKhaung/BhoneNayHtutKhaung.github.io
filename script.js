const questions = [
    {
        question: "What does 'harm' mean?",
        options: [
            "Damage",
            "A healthy habit",
            "A type of food",
            "A way to exercise"
        ],
        answer: 0
    }
];

let currentQuestion = 0;

function showQuestion() {
    const quiz = document.getElementById("quiz");
    const q = questions[currentQuestion];

    quiz.innerHTML = `
        <h2>Question ${currentQuestion + 1}</h2>
        <p>${q.question}</p>

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
        result.textContent = "✅ Correct!";
    } else {
        result.textContent = "❌ Try Again!";
    }
}

document
    .querySelector('a[href="#quiz"]')
    .addEventListener("click", function () {
        showQuestion();
    });
