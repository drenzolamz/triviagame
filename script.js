const quizdata = [{
    question: "What is the largest planet in our solar system?",
    a: "Earth",
    b: "Mars",
    c: "Jupiter",
    d: "Saturn",
    correct: "c",
},
{
    question: "Who painted the Mona Lisa?",
    a: "Michelangelo",
    b: "Pablo Picasso",
    c: "Vincent van Gogh",
    d: "Leonardo da Vinci",
    correct: "d",
},
{
    question: "What is the capital city of Australia?",
    a: "Sydney",
    b: "Melbourne",
    c: "Canberra",
    d: "Perth",
    correct: "c",
},
{
    question: "Which element has the chemical symbol 'O'?",
    a: "Oxygen",
    b: "Gold",
    c: "Osmium",
    d: "Helium",
    correct: "a",
},
{
    question: "Who is known as the Father of Computers?",
    a: "Charles Babbage",
    b: "Albert Einstein",
    c: "Thomas Edison",
    d: "Isaac Newton",
    correct: "a",
}
];



const quiz = document.getElementById("quiz");
const CountQuestion = document.getElementById("count-question");
const totalNoOfQues = document.getElementById("tot-no-que");
const questionNo = document.getElementById("question-number");
const questionTitle = document.getElementById("question");
const answerLabel = document.querySelectorAll(".answer-label");
const nextQuestionButton = document.getElementById("next-question-btn");
const allInputs = document.querySelectorAll("input[type='radio']");
const submitQuiz = document.getElementById("submit");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");




let currentQtn = 0;
let answered = 0;


const loadQuiz = () => {
    CountQuestion.innerHTML = `${currentQtn + 1}`;
    totalNoOfQues.innerHTML = quizdata.length;
    questionNo.innerHTML = `${currentQtn + 1}`;
    questionTitle.innerHTML = quizdata[currentQtn].question;
    answerLabel[0].innerHTML = quizdata[currentQtn].a;
    answerLabel[1].innerHTML = quizdata[currentQtn].b;
    answerLabel[2].innerHTML = quizdata[currentQtn].c;
    answerLabel[3].innerHTML = quizdata[currentQtn].d;
    reset();

    if (currentQtn == quizdata.length - 1) {
        nextQuestionButton.style.display = "none";
        submitQuiz.style.display = "block";

    }

}
const reset = () => {
    allInputs.forEach((allInputs) => {
        allInputs.checked = false;

    })
}

nextQuestionButton.addEventListener("click", () => {
    let answer = getSelected();
    if (answer === quizdata[currentQtn].correct) {
        answered++;

    }

    currentQtn++;

    if (currentQtn < quizdata.length) {
        loadQuiz();
    }



});

submitQuiz.addEventListener("click", () => {
    let answer = getSelected();
    if (answer === quizdata[currentQtn].correct) {
        answered++;

    };

    currentQtn++;

    if (getSelected()) {
        quiz.style.display = "none";
        resultEl.style.display = "block";
        scoreEl.innerHTML = `Questions Answerd Correctly ${answered} / ${quizdata.length}`;

    }



})

const getSelected = () => {

    let answer;

    allInputs.forEach((allInputs) => {
        if (allInputs.checked) {

            answer = allInputs.value;
        }

    });
    return answer;
}

loadQuiz();





