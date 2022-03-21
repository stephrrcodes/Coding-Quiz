var questionsInfo = [
    {
        question:"Javascript is an ________ language?",
        choices: ["object-oriented", "object-based", "Procedural", "None of the above"],
        answer:"object-oriented"
    },
    {
        question:"",
        choices: [],
        answer:""
    },
    {
        question:"",
        choices: [],
        answer:""
    },
    {
        question:"",
        choices: [],
        answer:""
    },
    {
        question:"",
        choices: [],
        answer:""
    },
]
var question= document.getElementById("question")
var choices = document.querySelectorAll("choice-btn") 
var quizBtn = document.getElementById("quiz-btn");
var qContainer = document.querySelector("#q-container")
var countDown = document.querySelector("#countdown")
countDown.textContent = quizTime;
var quizTime = 80

console.log(choices)

var currentQuestionIndex = 0;
function startQuiz() {
    quizTime = setInterval(startTimer, 1000);
    loadQuestion();
}

function startTimer(){
        quizTime--;
        countDown.textContent = quizTime;
}

function loadQuestion(){
    console.log ("question click");
    question.textContent = questionsInfo[currentQuestionIndex].question;
        for (
            var i= 0;
            i < questionsInfo[currentQuestionIndex].choices.length;) i++;    
    choices.textContent = questionsInfo[currentQuestionIndex].choices[i];
}

quizBtn.addEventListener("click",loadQuestion);
