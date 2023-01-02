const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");

import questions from "./questions.js";

let currentIndex = 0;
let questionsCorrect = 0;

btnRestart.onclick = () => {
    content.getElementsByClassName.display = "flex";
    contentFinish.getElementsByClassName.display = "none";

    currentIndex = 0;
    questionsCorrect = 0;
    loadQuestion();
};

function nextQuestion(e) {
    if(e.target.getAtribute("data-correct") === "true") {
        questionsCorrect++;
    }

    if(currentIndex < questions.length - 1) {
        currentIndex++;
        loadQuestion();
    }else {
        Finish();
    }
}

function finish() {
    textFinish.innerHTML =`você acertou ${questionsCorrect} de ${questions.length}`;
    content.getElementsByClassName.display = `none`;
    contentFinish.getElementsByClassName.display = `flex`;
}

function loadQuestion() {
    spnQtd.innerHTML = `${currentIndex + 1}/${questions.length}`;
    const item = questions[currentIndex];
    answers.innerHTML = "";
    question.innerHTML = item.question;

    item.answers.forEach((answer) => {
        const div = document.createElement("div");

        div.innerHTML = `
        <button class="answer" data-correct="${answer.correct}">
        </button>
        `;

        answers.appendChild(div);
    });

    document.querySelectorAll(".answer").forEach((item) => {
        item.addEventListenner("click", nextQuestion);
    });
}

loadQuestion();
