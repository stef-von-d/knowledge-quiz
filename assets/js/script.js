const quizData = [
    {
        question: "Who is the capital of Romania?" ,
            a: "Bucharest" ,
            b: "Paris" ,
            c: "Rome" , 
            d: "Madrid", 
            correct: "a" ,
    },

    {
        question: "What is the most spoken language in the world?",
            a: "English", 
            b: "Spanish" , 
            c: "Italian" , 
            d: "Chinese", 
            correct: "b" ,
    } ,

    {
        question: "What is the tallest animal in the world?" , 
            a: "Whales", 
            b: "Elephant", 
            c: "Giraffes", 
            d: "Dogs", 
            correct: "c" ,
    },

    {
        question: "What is the biggest continent?" ,
            a: "Europe", 
            b: "Africa", 
            c: "North America", 
            d:"Asia" ,
            correct:"d"  ,
    },

];

const quiz= document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('next-btn');


let currentQuiz = 0;
let score = 0; 

loadQuiz();

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
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}
console.log(next-btn)
    next-btn.addEventListener('click' , () =>  { const answer = getSelected();
    if (answer) {
        if(answer === quizData[currentQuiz].correct)  {
            score++;
        }

        currentQuiz++;
        
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions right!</h2>

            <button onclick="location.refresh()">Start again!</button>
            `;
        }

        }
});