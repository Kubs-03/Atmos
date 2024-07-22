function togglePopup(popupId) {
    var overlay = document.getElementById('overlay');
    var overlayContent = document.getElementById('overlay-content');
    
    if (popupId) {
        var popup = document.getElementById(popupId);
        overlayContent.innerHTML = popup.innerHTML;
        overlay.style.display = 'flex';
    } else {
        overlay.style.display = 'none';
    }
}

// Close overlay with escape key
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        document.getElementById('overlay').style.display = 'none';
    }
});

// Show the button when the user scrolls down 20px from the top of the document
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var topBtn = document.getElementById("topBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

const questions = [
    {
        question: "Which layer of the Earth's atmosphere is closest to the Earth's surface?",
        answers: [
            { text: "Stratosphere", correct: false },
            { text: "Mesosphere", correct: false },
            { text: "Troposphere", correct: true },
            { text: "Thermosphere", correct: false },
        ]
    },
    {
        question: "Which atmospheric layer is known for containing the ozone layer, which protects us from harmful UV radiation?",
        answers: [
            { text: "Troposphere", correct: false },
            { text: "Stratosphere", correct: true },
            { text: "Mesosphere", correct: false },
            { text: "Exosphere", correct: false },
        ]
    },
    {
        question: "What is the primary gas that makes up the Earth's atmosphere?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Carbon Dioxide", correct: false },
            { text: "Argon", correct: false },
            { text: "Nitrogen", correct: true },
        ]
    },
    {
        question: "What phenomenon occurs in the thermosphere that can be seen as auroras?",
        answers: [
            { text: "Greenhouse Effect", correct: false },
            { text: "Solar Flares", correct: false },
            { text: "Northern and Southern Lights", correct: true },
            { text: "Meteor Showers", correct: false },
        ]
    },
    {
        question: "What is the layer of the atmosphere where weather phenomena occur?",
        answers: [
            { text: "Stratosphere", correct: false },
            { text: "Exosphere", correct: false },
            { text: "Mesosphere", correct: false },
            { text: "Troposphere", correct: true },
        ]
    },
    {
        question: "What is the main source of energy that drives the atmospheric processes?",
        answers: [
            { text: "Wind Energy", correct: false },
            { text: "Solar Energy", correct: true },
            { text: "Tidal Energy", correct: false },
            { text: "Geothermal Energy", correct: false },
        ]
    },
    {
        question: "What phenomenon is observed when solar wind particles interact with the Earth's magnetic field?",
        answers: [
            { text: "Meteor Showers", correct: false },
            { text: "Greenhouse Effect", correct: false },
            { text: "Solar Flares", correct: false },
            { text: " Auroras", correct: true },
        ]
    },
    {
        question: "Which atmospheric layer is characterized by a temperature increase with altitude and contains the ionosphere?",
        answers: [
            { text: "Thermosphere", correct: true },
            { text: " Stratosphere", correct: false },
            { text: "Mesosphere", correct: false },
            { text: "Troposphere", correct: false },
        ]
    },
    {
        question: "What is the name of the boundary between the stratosphere and the mesosphere?",
        answers: [
            { text: "Tropopause", correct: false },
            { text: "Stratopause", correct: true },
            { text: "Mesopause", correct: false },
            { text: "Thermopause", correct: false },
        ]
    },
    {
        question: "Which layer of the atmosphere extends from about 50 km to 85 km above the Earth's surface?",
        answers: [
            { text: "Troposphere", correct: false },
            { text: "Stratosphere", correct: false },
            { text: "Mesosphere", correct: true },
            { text: "Exosphere", correct: false },
        ]
    }
];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNO = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNO + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++; // Increment score for correct answers
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    let message = '';
    let totalQuestions = questions.length;
    let scorePercentage = (score / totalQuestions) * 100;

    if (score === totalQuestions) {
        message = 'Congratulations! You got a perfect score of 10/10!';
    } else if (score >= 8) {
        message = `You are almost there! Your score is ${score}/${totalQuestions}.`;
    } else {
        message = `Please go through the concepts again for better understanding. Your score is ${score}/${totalQuestions}.`;
    }

    questionElement.innerHTML = message;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var topBtn = document.getElementById("topBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function toggleOverlay() {
    var overlay = document.getElementById("navoverlay");
    if (overlay.style.width === "100%") {
        overlay.style.width = "0%";
    } else {
        overlay.style.width = "100%";
    }
}

// Close the overlay if clicked outside of it
document.addEventListener('click', function(event) {
    var overlay = document.getElementById("overlay");
    var hamburger = document.getElementById("hamburger");

    if (overlay.style.width === "100%") {
        // Check if the click happened outside the overlay and hamburger menu
        if (!overlay.contains(event.target) && event.target !== hamburger) {
            overlay.style.width = "0%";
        }
    }
});