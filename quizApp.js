const modalCloseButton = document.getElementById('closeButton');
      quizContainer = document.getElementById('quizHolder');
      submitButton = document.getElementById('submit');
      scoreContainer = document.getElementById('score-container');
      questionNumber = document.getElementById('question-number');
      question = document.getElementById('question');
      choiceA = document.getElementById('0');
      choiceB = document.getElementById('1');
      choiceC = document.getElementById('2');
      choiceD = document.getElementById('3');
      choices = document.querySelector('.choices');

let questions = [{
        question: "Jak nazwany został pierwszy samochód stworzony w 1914 roku w Tokio?",
        answers: ["DAT", "Skoda", "Nissan", "Mazda"],
        correct: 0
    },
    {
        question: "Gdzie została założona fabryka samochodów?",
        answers: ["Hong Kong", "Japonia", "Chiny", "Tokio Masujiro Hashimoto"],
        correct: 3
    },
    {
        question: "Do jakiego plebiscytu Nissan 350Z został nominowany?",
        answers: ["Car and Driver", "Pimp my Nissan", "Get Nissan Efficiency", "Samochod roku 2019"],
        correct: 0
    },
    {
        question: "Jaki silnik zazwyczaj posiada Nissan 350Z?",
        answers: ["V3", "V5", "V6", "V8"],
        correct: 2
    },
    {
        question: "Co oznacza 'datto' w języku japońskim?",
        answers: ["Skaczący kangur", "Pędzący struś", "Pełzający królik", "Uciekający zając"],
        correct: 3
    }
]


const lastQuizQuestion = questions.length; // pobieramy ostatnie pytanie z quizu
let currentQuestion = 0; // 0 bo trzeba zaczac od pierwszego pytania
    userAnswers = [];
    totalQuizScore = 0;
const createQuiz = () => {
     quizContainer.style.display = "flex";
     const questionIndex = questions[currentQuestion];
     question.innerHTML = questionIndex.question;
     questionNumber.innerHTML = `Question <b>${currentQuestion + 1}</b> of <b>${lastQuizQuestion}</b>`;
     choiceA.innerHTML = questionIndex.answers[0];
     choiceB.innerHTML = questionIndex.answers[1];
     choiceC.innerHTML = questionIndex.answers[2];
     choiceD.innerHTML = questionIndex.answers[3];
    }

choices.addEventListener('click', e => {
    const answerId = parseInt(e.target.id);
    userAnswers.push(answerId);
    currentQuestion++;
    if(currentQuestion === lastQuizQuestion){
        submitButton.style.display = "block";
    }
    else {
        createQuiz();
    }
});

modalCloseButton.addEventListener('click', createQuiz);

submitButton.addEventListener('click', () => {
    for(let qIndex = 0; qIndex < questions.length; qIndex++){
        if(questions[qIndex].correct === userAnswers[qIndex]){
            totalQuizScore++;
        }
    }
    scoreContainer.style.display = "block";
    scoreContainer.innerHTML = `<p>Your total score is:  <b>${totalQuizScore} of ${questions.length}</b></p>`;
});