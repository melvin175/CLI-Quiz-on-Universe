//dependencies
const rs = require('readline-sync')
const chalk = require('chalk')

const userName = rs.question(chalk.blue('Enter your name\n'))
console.log(chalk.green(`${userName}, Welcome to the India Quiz`))

//global variable
let score = 0

//List of questions
const questions = [
{
    question: 'The ‘Big Bang Theory’ is related to which of the following?',
    options: 'A)Continental Drift B)Origin of Universe C)Origin of Himalayas',
    answer: 'B'
  },
  {
    question: 'The Milky Way is classified as_________.',
    options: 'A.Spiral Galaxy B. Irregular Galaxy C. Electrical Galaxy',
    answer: 'A'
  },
  {
    question: `What does the colour of star indicates?`,
    options: 'A)Distance from the Sun B)Distance from the earth C)Temperature',
    answer: 'C'
  },
  {
    question: 'Which of the following celestial phenomena occurs due to stars?',
    options: 'A)Black hole B)Rainbow C)Comet',
    answer: 'A'
  },
  {
    question: `Who among the following propounded the theory of Black Hole?`,
    options: 'A)C.V Raman B)H.J Bhabha C)S Chandrasekhar',
    answer: 'c'
  }
]

//Function for starting the quiz
function quizStart() {
  const ready = rs.question(chalk.bgRed('Are you ready to start the quiz?(Y/N)\n'))

  if(ready.toUpperCase() === 'Y') {
    for(let i=0; i<questions.length; i++){
      quizPlay(questions[i])
    }
  }else{
    console.log(chalk.bgGreen('Thank You!'))
  }

  console.log(chalk.bgWhite.black('Your final score is '+score))
  console.log(chalk.red('Thank you for taking this quiz'))
}

//Function that asks questions
function quizPlay(askQue) {
  console.log('Que: '+ chalk.yellow(askQue.question))
  console.log(askQue.options)
  const userAnswer = rs.question(chalk.green('Your response: '))

  if(userAnswer.toUpperCase() === askQue.answer.toUpperCase()){
    score++;
    console.log(chalk.grey('Correct! your current score is ' + score + '\n'))
  }else{
    console.log(chalk.red('Wrong Answer! Correct option is '+ askQue.answer + '\n'))
  }
}

//Function call
quizStart();