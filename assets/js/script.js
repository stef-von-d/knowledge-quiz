const quizData = [{
    question: "Who is the capital of Romania?",
    a: "Bucharest",
    b: "Paris",
    c: "Rome",
    d: "Madrid",
    correct: "a",
},

{
    question: "What is the most spoken language in the world?",
    a: "English",
    b: "Spanish",
    c: "Italian",
    d: "Chinese",
    correct: "b",
},

{
    question: "What is the tallest animal in the world?",
    a: "Whales",
    b: "Elephant",
    c: "Giraffes",
    d: "Dogs",
    correct: "c",
},

{
    question: "What is the biggest continent?",
    a: "Europe",
    b: "Africa",
    c: "North America",
    d: "Asia",
    correct: "d",
},

{
    question: "How many times zones are there in Russia? ",
    a: "3",
    b: "8",
    c: "1",
    d: "11",
    correct: "d",
},

{
    question: "What is the national flower of Japan?" ,
    a: "Sunflower",
    b: "Aloe Vera",
    c: "Cherry Blossom",
    d: "None",
    correct: "c",
},

{
    question: "Which of the following empires had no written language?",
    a: "Incan",
    b: "Aztec",
    c: "Egyptian",
    d: "Roman",
    correct: "a",
},

{
    question: "The capital of Canada is...",
    a: "London",
    b: "Montreal",
    c: "Ottawa",
    d: "Vancouver",
    correct: "c",
},

{
    question: "What is the best-selling series of the 21st century?" , 
    a: "Harry Potter" ,
    b: "Hunger Games" ,
    c: "Notebook" ,
    d: "Twilight",
    correct: "b",
}, 

{
    question: "London underground has opened in...",
    a: "1900" ,
    b: "1863",
    c: "1855" ,
    d: "1860" ,
    correct: "b",
}, 
{
    question: "What city do the Beatles come from?" ,
    a: "Manchester",
    b:"London",
    c: "Liverpool",
    d: "Brighton" ,
    correct: "c",
},

{
    question:"How many days does it take for Earth to orbit the Sun?" , 
    a: "365", 
    b: "364", 
    c: "366", 
    d: "367" ,
    correct: "a" , 
},
{
    question: "What language is spoken in Brazil?" , 
    a: "Spanish" ,
    b: "Brazilian" , 
    c: "Portuguese" ,
    d: "English" ,
    correct: "b" ,
},

{
    question: "What is the main ingredient in hummus?" ,
    a: "Chickpeas", 
    b: "Lentils", 
    c: "Potatoes",
    d: "Beans",
    correct: "a",
},

];


const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('next-btn');



let currentQuiz = 0;
let score = 0;
let timeLeft= 15;
let timer;

loadQuiz();

document.getElementById('openModal').addEventListener('click', function() {
    document.getElementById('myModal').style.display = "block";
    displayQuestion();
    startTimer();
  });
  
  document.getElementsByClassName('close')[0].addEventListener('click', function() {
    document.getElementById('myModal').style.display = "none";
    resetTimer();
  });
  
  window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('myModal')) {
      document.getElementById('myModal').style.display = "none";
      resertTimer();
    }
  });

  

function loadQuiz() {
deselectAnswers();
const currentQuizData = quizData[currentQuiz];

questionEl.innerText = currentQuizData.question;
a_text.innerText = currentQuizData.a;
b_text.innerText = currentQuizData.b;
c_text.innerText = currentQuizData.c;
d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
let answer;
answerEls.forEach(answerEl => {
    if (answerEl.checked) {
        answer = answerEl.id;
    }
});

return answer;
}
//console.log(next-btn)
document.getElementById("next-btn").addEventListener('click', () => {
const answer = getSelected();
if (answer) {
    if (answer === quizData[currentQuiz].correct) {
        score++;
    }

    function resetTimer() {
        clearInterval(timer);
        timeLeft = 30;
        document.getElementById('time').textContent = timeLeft;
      }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        quiz.innerHTML = `
        <h2>You answered ${score}/${quizData.length} questions right!</h2>

        <button onclick="location.refresh()">Good Job!</button>
        `;
    }

}
});



