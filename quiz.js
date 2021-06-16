// Constants and Variables
const restartBtn = document.getElementById('restart');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const submitBtn = document.getElementById('submit');
const trueBtn = document.getElementById('True');
const falseBtn = document.getElementById('False');
const userscore = document.getElementById("userscore");
const questionText = document.getElementById('questionsnum');
let currentQuestion = 0;
var score = 0;
// Questions
let questions = [{
    question: "The National Bird Of India ?",
    answers: [{
        option: "Peacock",
        answer: true
      },
      {
        option: "Pigeon",
        answer: false
      }
    ]
  },
  {
    question: "The Statue Of Liberty is located in?",
    answers: [{
        option: "New York",
        answer: true
      },
      {
        option: "New Delhi",
        answer: false
      }
    ]
  },
  {
    question: "Who is the Prime Minister Of India?",
    answers: [{
        option: "APJ Abdul Kalam Azad",
        answer: false
      },
      {
        option: "Narendra Modi",
        answer: true
      }
    ]
  }
]
restartBtn.addEventListener("click", restart);
prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click", next);
submitBtn.addEventListener("click", submit);
// Functions for quiz game
function beginQuiz() {
  currentQuestion = 0;
  questionText.innerHTML = questions[currentQuestion].question;
  trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
  trueBtn.onclick = () => {
    let num = 0;
    if (questions[currentQuestion].answers[num].answer) {
      if (score < 3) {
        score++;
      }
    }
    userscore.innerHTML = score;
    if (currentQuestion < 2)
      next();
  }
  falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
  falseBtn.onclick = () => {
    let num = 1;
    if (questions[currentQuestion].answers[num].answer) {
      if (score < 3) {
        score++;
      }
    }
    userscore.innerHTML = score;
    if (currentQuestion < 2)
      next();
  }
  prevBtn.classList.add('hide');
}
beginQuiz();
// Function to go to the next question
function next() {

  currentQuestion++;
  if (currentQuestion >= 2) {
    nextBtn.classList.add("hide");
    prevBtn.classList.remove('hide');
  }
  questionText.innerHTML = questions[currentQuestion].question;
  trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
  trueBtn.onclick = () => {
    let num = 0;
    if (questions[currentQuestion].answers[num].answer) {
      if (score < 3) {
        score++;
      }
    }
    userscore.innerHTML = score;
    if (currentQuestion < 2)
      next();
  }
  falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
  falseBtn.onclick = () => {
    let num = 1;
    if (questions[currentQuestion].answers[num].answer) {
      if (score < 3) {
        score++;
      }
    }
    userscore.innerHTML = score;
    if (currentQuestion < 2)
      next();
  }
  prevBtn.classList.remove('hide');
}
// function to go to previous question
function prev() {
  currentQuestion--;
  if (currentQuestion <= 0) {
    prevBtn.classList.add('hide');
    nextBtn.classList.remove('hide');
  }
  questionText.innerHTML = questions[currentQuestion].question;
  trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
  trueBtn.onclick = () => {
    let num = 0;
    if (questions[currentQuestion].answers[num].answer) {
      if (score < 3) {
        score++;
      }
    }
    userscore.innerHTML = score;
    if (currentQuestion < 2)
      next();
  }
  falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
  falseBtn.onclick = () => {
    let num = 1;
    if (questions[currentQuestion].answers[num].answer) {
      if (score < 3) {
        score++;
      }
    }
    userscore.innerHTML = score;
    if (currentQuestion < 2)
      next();
  }
  nextBtn.classList.remove('hide');
}
// function to restart the Quiz
function restart() {
  currentQuestion = 0;
  prevBtn.classList.remove('hide');
  nextBtn.classList.remove('hide');
  submitBtn.classList.remove('hide');
  trueBtn.classList.remove('hide');
  falseBtn.classList.remove('hide');
  score = 0;
  userscore.innerHTML = score;
  beginQuiz();
}
// function to submit the quiz
function submit() {
  prevBtn.classList.add('hide');
  nextBtn.classList.add('hide');
  submitBtn.classList.add('hide');
  trueBtn.classList.add('hide');
  falseBtn.classList.add('hide');
  questionText.innerHTML = "Congratulations You have succesfully completed the Quiz";
}
