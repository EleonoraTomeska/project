let currentQuestion = 0;
let score = 0;

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "Madrid", "Rome", "Berlin"],
    answer: 0
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Mars", "Jupiter", "Saturn", "Neptune"],
    answer: 1
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Cu", "Fe"],
    answer: 0
  },
  {
    question: "What is the tallest mountain in the world?",
    options: ["Mount Everest", "K2", "Kangchenjunga", "Makalu"],
    answer: 0
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Michelangelo"],
    answer: 2
  },
  {
    question: "What is the largest ocean in the world?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    answer: 3
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: ["William Shakespeare", "George Bernard Shaw", "Oscar Wilde", "Arthur Miller"],
    answer: 0
  }
];



function loadQuestion() {
  let question = questions[currentQuestion];
  document.getElementById("question").textContent = question.question;

  let options = document.getElementById("options");
  options.innerHTML = "";

  for (var i = 0; i < question.options.length; i++) {
    let radioBtn = document.createElement("input");
    radioBtn.setAttribute("type", "radio");
    radioBtn.setAttribute("name", "option");
    radioBtn.setAttribute("value", i);
    options.appendChild(radioBtn);

    let label = document.createElement("label");
    label.textContent = question.options[i];
    options.appendChild(label);

    options.appendChild(document.createElement("br"));
  }
}

function checkAnswer() {
  let selectedOption = document.querySelector('input[name="option"]:checked');

  if (selectedOption === null) {
    document.getElementById("result").textContent = "Please select an option.";
    return;
  }

  let answer = parseInt(selectedOption.value);

  if (answer === questions[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    document.getElementById("question").style.display = "none";
    document.getElementById("options").style.display = "none";
    document.getElementById("result").textContent = "Quiz completed! Your score is " + score + " out of " + questions.length + ".";
  }
  if (currentQuestion === questions.length) {
    document.getElementById("question").style.display = "none";
    document.getElementById("options").style.display = "none";
    document.getElementById("result").textContent = "Quiz completed! Your score is " + score + " out of " + questions.length + ".";
    document.getElementById("restartBtn").style.display = "block";
  }
}


function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  loadQuestion();
  document.getElementById("question").style.display = "block";
  document.getElementById("options").style.display = "block";
  document.getElementById("result").textContent = "";
  document.getElementById("restartBtn").style.display = "none";
}

loadQuestion();

let restartButton = document.createElement("button");
restartButton.textContent = "Restart Quiz";
restartButton.setAttribute("id", "restartBtn");
restartButton.style.display = "none";
restartButton.addEventListener("click", restartQuiz);
document.body.appendChild(restartButton); 