var questionsInfo = [
    {
        question:"Javascript is an ________ language?",
        choices: ["object-oriented", "object-based", "Procedural", "None of the above"],
        answer:"object-oriented"
    },
    {
        question:"Which of the following are NOT the JavaScript Data types",
        choices: ["object", "string", "boolean", "section"],
        answer:"section"
    },
    {
        question:"Inside which HTML element do we put the JavaScript?",
        choices: ["<javascript>", "<script>", "<js>", "<scripting>"],
        answer:"<script>"
    },
    {
        question:"Which operator is used to assign a value to a variable",
        choices: ["*","-", "=", "+"],
        answer:"="
    },
    {
        question:"How can you add a comment in a JavaScript?",
        choices: ["?This is a comment?", "*/This is a comment/*", "(This is a comment)", "//This is a comment" ],
        answer:"//This is a comment"
    },
]
var question= document.getElementById("question")
var choices = document.querySelectorAll("choice-btn") 
var quizBtn = document.getElementById("quiz-btn");
var qContainer = document.querySelector("#q-container")
var countDown = document.querySelector("#countdown")
countDown.textContent = quizTime;
var quizTime = 60

let currentQuestionIndex = 0;

function startTimer(){
        quizTime--;
        countDown.textContent = quizTime;
}

function loadQuestion(){
    console.log ("start quiz");
    question.textContent = questionsInfo[currentQuestionIndex].question;
        for (
            var i= 0;
            i < questionsInfo[currentQuestionIndex].choices.length;) i++;    
    choices.textContent = questionsInfo[currentQuestionIndex].choices[i];
    nextQuestion()
}

function nextQuestion(){

}
quizBtn.addEventListener("click",loadQuestion);
