const startButton = document.getElementById('start-btn')
const quizContainerElement = document.getElementById('container')

startButton.addEventListener('click', startGame)


function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    quizContainerElement.classList.remove('hide')
}

const questions = [
    {
        question: "How many days makes a week ?",
        optionA: "10 days",
        optionB: "14 days",
        optionC: "5 days",
        optionD: "7 days",
        correctOption: "optionD"
    },
]
