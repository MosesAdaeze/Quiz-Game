const startButton = document.getElementById('start-btn')//getting element id
const nextButton = document.getElementById('next-btn')
const quizContainerElement = document.getElementById('container')
const questionElement = document.getElementById('question') //id holding element con
const answerButtonsElement = document.getElementById('answer-buttons')


let shuffledQuestions, currentQuestionIndex
//to shffles the quiz questions

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => { //nextbutton to move to nextquestion
    currentQuestionIndex++
    setNextQuestion()
  })


//function to start game
function startGame() {
    console.log('Started')
    startButton.classList.add('hide')// hide start button to show quiz container
    // shuffledQuestions = question.sort(() => Math.random() - .5)
    // currentQuestionIndex = 0 //start from zero
    quizContainerElement.classList.remove('hide')/// container remove (hide) in css (shows)
    // setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])//show question call element id.
}

function showQuestion(question) {
    questionElement.innerText = question.question //allows quetion con to show question
    question.answers.forEach(answer => { //look through answers
        const button =document.createElement('button') //create a button
        button.innerText = answer.text
        button.classList.add('btn')//add a button class
        if (answer.correct) { //checking correct answers
          button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)//add btn element
    });
}

// reset question
function resetState() {
    // clearStatusClass(document.body)
    nextButton.classList.add('hide') //hide next button (65)
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
  }

  // selectANswer to make button clickable
function selectAnswer(e) {
    const selectedButton = e.target //any clicked button
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove('hide')// add a next button after a question is answered
    } else {
      startButton.innerText = 'Restart'
      startButton.classList.remove('hide')
    }
}

//chcking correct answers
function setStatusClass(element, correct) 
    clearStatusClass(element)
    if (correct) {
      element.classList.add('correct')
    } else {
      element.classList.add('wrong')
    }


function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

//start quiz questions

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
  },

  {
    question: 'What is 4 + 4',
    answers: [
      { text: '4', correct: false },
      { text: '22', correct: false },
      { text: '15', correct: false },
      { text: 'none', correct: true }
    ]
  },

  {
    question: 'What is 4 + 4',
    answers: [
      { text: '4', correct: false },
      { text: '22', correct: false },
      { text: '15', correct: false },
      { text: 'none', correct: true}
    ]
  }
]
