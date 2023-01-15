const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const quizContainerElement = document.getElementById('container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')


let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
  })

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = question.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    quizContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button =document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
          button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    });
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
  }

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove('hide')
    } else {
      startButton.innerText = 'Restart'
      startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
      element.classList.add('correct')
    } else {
      element.classList.add('wrong')
    }
  }


function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


const question = [
  {
    question: 'What is 2 + 2',
    answers: [
      { text: '4', correct: true },
      { text: '22', correct: false },
      { text: '15', correct: false },
      { text: 'none', correct: false }
    ]
  },

  {
    question: 'What is 4 + 4',
    answers: [
      { text: '4', correct: false },
      { text: '22', correct: false },
      { text: '15', correct: false },
      { text: 'none', correct: true }
    ]
  }

]

nextButton.addEventListener('click', () => {
  const answer = getSelected()
  if (answer) {
      if (answer === quizData[currentQuiz].correct){
          score++
      }   

      currentQuiz++

      if (currentQuiz < quizData.length) {
          loadQuiz()
      }else{
          quiz.innerHTML = `
          <h2>You answered ${score}/${quizData.length} question correctly</h2>
      <button onclick="location.reload()">Play Again</button>
          `
      }
  }
})
