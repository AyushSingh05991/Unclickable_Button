const questions = [
    "Are You A Girl?",
    "Are You A Cute Girl?",
    "You are the Most Beautiful Girl.",
    "I like You.",
    "Do You Like Me?",
    "I Love You Too.",
    "Let's Go For A Date."
];

let currentQuestionIndex = 0;

const questionElement = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const wrapper = document.querySelector('.wrapper');
const wrapperRect = wrapper.getBoundingClientRect();

const instructionModal = document.getElementById('instructionModal');
const startBtn = document.getElementById('startBtn');

// Show modal on page load
window.onload = () => {
    instructionModal.style.display = 'block';
};

// Start the questions after closing the modal
startBtn.addEventListener('click', () => {
    instructionModal.style.display = 'none';
});

// Handle "Yes" button click
yesBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        questionElement.innerHTML = questions[currentQuestionIndex];
    } else {
        questionElement.innerHTML = "Let's Meet With You Soon!!";
        yesBtn.style.display = 'none';
        noBtn.style.display = 'none';
    }
});

// Handle "No" button hover
noBtn.addEventListener('mouseover', () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});