let player1Score = 0
let player2Score = 0
let playersTurn = true

const roundMessage = document.querySelector('.round-message')
const turnMessage = document.querySelector('.turn-message')
const player1Scoreboard = document.querySelector('.player-1-scoreboard')
const player2Scoreboard = document.querySelector('.player-2-scoreboard')
const player1Dice = document.querySelector('.player-1-dice')
const player2Dice = document.querySelector('.player-2-dice')
const rollButton = document.querySelector('.roll-button')
const resetButton = document.querySelector('.reset-button')

function showHideButtons() {
  rollButton.style.display = 'none'
  resetButton.style.display = 'block'
}

function runGame() {
  const randomNumber = Math.floor(Math.random() * 6) + 1

  if (playersTurn) {
    player1Score += randomNumber
    player1Scoreboard.textContent = player1Score
    player1Dice.textContent = randomNumber
    player1Dice.classList.remove('active')
    player2Dice.classList.add('active')
    turnMessage.textContent = 'Player 2 Turn'
  } else {
    player2Score += randomNumber
    player2Scoreboard.textContent = player2Score
    player2Dice.textContent = randomNumber
    player2Dice.classList.remove('active')
    player1Dice.classList.add('active')
    turnMessage.textContent = 'Player 1 Turn'
    roundMessage.textContent++
  }

  if (player1Score >= 20) {
    turnMessage.textContent = 'Player 1 has own!'
    player2Dice.classList.remove('active')
    player1Dice.classList.add('active')
    showHideButtons()
  } else if (player2Score >= 20) {
    turnMessage.textContent = 'Player 2 has own!'
    showHideButtons()
    player1Dice.classList.remove('active')
    player2Dice.classList.add('active')
  }

  playersTurn = !playersTurn
}
rollButton.addEventListener('click', runGame)

function resetGame() {
  player1Score = 0
  player2Score = 0
  playersTurn = true
  roundMessage.textContent = 1
  turnMessage.textContent = 'Player 1 Turn'
  player1Scoreboard.textContent = 0
  player2Scoreboard.textContent = 0
  player1Dice.textContent = '-'
  player2Dice.textContent = '-'
  player2Dice.classList.remove('active')
  player1Dice.classList.add('active')
  resetButton.style.display = 'none'
  rollButton.style.display = 'block'
}

resetButton.addEventListener('click', resetGame)

