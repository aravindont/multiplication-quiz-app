const formEl = document.getElementById("form");

const scoreEl = document.getElementById("score");

const questionEl = document.getElementById("question");

const inputEl = document.getElementById("input");

const num1 = Math.ceil(Math.random() * 10);

const num2 = Math.ceil(Math.random() * 10);

const correctAns = num1 * num2;
questionEl.innerText = `What is ${num1} multiply by ${num2} ?`;

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
  score = 0;
}

formEl.addEventListener("submit", (e) => {
  const userAns = +inputEl.value;
  if (correctAns === userAns) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}

scoreEl.innerText = `score:${score}`;
