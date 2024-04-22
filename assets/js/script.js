
const questions = [
    { 
        question: "Which language has the more native speakers?" ,
        answers: [
            {text: "English" , correct: false}, 
            {text: "Spanish", correct: true}, 
            {text: "French" , correct: false}, 
            {text:"Chinese" , correct: false},
        ]
    },
    {
        question: "What is the capital of Romania?", 
        answers: [
            {text: "London", correct: false},
            {text:"Paris" , correct: false},
            {text:"Barcelona", correct: false},
            {text: "Bucharest", correct: true},
        ]
    },

    {
        question:"How many planets are in the solar system?",
        answers: [
            {text: "8", correct: true},
            {text:"5", correct: false}, 
            {text:"10", correct: false},
            {text:"9", correct: false},
        ]
    },

    {
        question: "What does CSS stands for?" , 
        answers: [
            {text:"Cascading Style Sheets", correct: true}, 
            {text:"Creative Style Sheets" , correct: false},
            {text:"Computer Style Sheets" , correct: false},
            {text:"Colorful Style Sheets", correct: false},
        ]
    }
];

const questionElement = document.getElementbyId("question");
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const nextButton= document.getElementById("next-btn");

let current questionIndex= 0;
let score= 0;

function startQuiz() {
    currentQuestionIndex= 0;
    score= 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion () {
    let currentQuestion = questions [currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question; 
    
    currentQuestion.answers.forEach(answers =>{
        const button= document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);

    });
}
startQuiz();