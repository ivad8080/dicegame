let player1Score = 0
let player2Score = 0
let playersTurn = true
let plays = 0

const roundMessage = document.querySelector('.round-message')
const player1Message = document.querySelector('.player-1-message')
const player2Message = document.querySelector('.player-2-message')
const player1Scoreboard = document.querySelector('.player-1-scoreboard')
const player2Scoreboard = document.querySelector('.player-2-scoreboard')
const player1Dice = document.querySelector('.player-1-dice')
const player2Dice = document.querySelector('.player-2-dice')
const rollButton = document.querySelector('.roll-button')
const resetButton = document.querySelector('.reset-button')
const flipCoinButton = document.querySelector('.flip-coin-button')
const takeDicesButton = document.querySelector('.take-dices-button')

function flipCoin() {
  playersTurn = randomPlayerTurn()
  player1Message.textContent = playersTurn ? 'Player 1 starts' : '\u00a0' 
  player2Message.textContent = !playersTurn ? 'Player 2 starts' : '\u00a0'
  if (playersTurn) {
    player2Dice.classList.remove('active')
    player1Dice.classList.add('active')
  } else {
    player1Dice.classList.remove('active')
    player2Dice.classList.add('active')
  }
  showRollButton()
}

flipCoinButton.addEventListener('click', flipCoin)

function rollDice() {
  const randomNumber = Math.floor(Math.random() * 6) + 1
  if (playersTurn) {
    player1Score += randomNumber
    player1Scoreboard.textContent = player1Score
    player1Dice.textContent = randomNumber
    player2Dice.classList.add('active')
    player1Dice.classList.remove('active')
    player1Message.textContent = '\u00a0'
    player2Message.textContent = 'Player 2 turn'
    plays++
  } else {
    player2Score += randomNumber
    player2Scoreboard.textContent = player2Score
    player2Dice.textContent = randomNumber
    player1Dice.classList.add('active')
    player2Dice.classList.remove('active')
    player1Message.textContent = 'Player 1 turn'
    player2Message.textContent = '\u00a0'
    plays++
  }
  playersTurn = !playersTurn
  checkRolls()
  checkWhoWon()
}

rollButton.addEventListener('click', rollDice)

function takeDices() {
  playersTurn = !playersTurn
  player1Dice.textContent = '\u00a0'
  player2Dice.textContent = '\u00a0'
  player1Message.textContent = playersTurn ? 'Player 1 starts' : '\u00a0' 
  player2Message.textContent = !playersTurn ? 'Player 2 starts' : '\u00a0'
  if (playersTurn) {
    player2Dice.classList.remove('active')
    player1Dice.classList.add('active')
  } else {
    player1Dice.classList.remove('active')
    player2Dice.classList.add('active')
  }
  roundMessage.textContent++
  showRollButton()
}

takeDicesButton.addEventListener('click', takeDices)

function resetGame() {
  player1Score = 0
  player2Score = 0
  plays = 0
  playersTurn = randomPlayerTurn()
  clearAllTextContent()
  showFlipCoinButton()
}

resetButton.addEventListener('click', resetGame)

function checkRolls() {
  if (plays === 2) {
    plays = 0
    getRoundWinner()
    showTakeDicesButton()    
  }
}

function getRoundWinner() {
  let player1 = player1Dice.textContent
  let player2 = player2Dice.textContent
  if (player1 > player2) {
    player1Message.textContent = 'Round Winner'
    player2Message.textContent = '\u00a0'
    player2Dice.classList.remove('active')
    player1Dice.classList.add('active')
  } else if (player1 < player2) {
    player2Message.textContent = 'Round Winner'
    player1Message.textContent = '\u00a0'
    player1Dice.classList.remove('active')
    player2Dice.classList.add('active')
  } else {
    player2Message.textContent = 'Draw'
    player1Message.textContent = 'Draw'
    player1Dice.classList.add('active')
    player2Dice.classList.add('active')
  }
}

function checkWhoWon() {
  if (player1Score >= 20) {
    player1Message.textContent = 'Player 1 won'
    player2Message.textContent = '\u00a0'
    player2Dice.classList.remove('active')
    player1Dice.classList.remove('active')
    player2Dice.classList.remove('won')
    player1Dice.classList.add('won')
    showResetButton()
  } else if (player2Score >= 20) {
    player1Message.textContent = '\u00a0'
    player2Message.textContent = 'Player 2 won'
    player1Dice.classList.remove('active')
    player2Dice.classList.remove('active')
    player1Dice.classList.remove('won')
    player2Dice.classList.add('won')
    showResetButton()
  }
}

function showResetButton() {
  rollButton.style.display = 'none'
  flipCoinButton.style.display = 'none'
  takeDicesButton.style.display = 'none'
  resetButton.style.display = 'block'
}

function showRollButton() {
  rollButton.style.display = 'block'
  flipCoinButton.style.display = 'none'
  takeDicesButton.style.display = 'none'
  resetButton.style.display = 'none'
}

function showFlipCoinButton() {
  rollButton.style.display = 'none'
  flipCoinButton.style.display = 'block'
  takeDicesButton.style.display = 'none'
  resetButton.style.display = 'none'  
}

function showTakeDicesButton() {
  rollButton.style.display = 'none'
  flipCoinButton.style.display = 'none'
  takeDicesButton.style.display = 'block'
  resetButton.style.display = 'none'  
}

function clearAllTextContent() {
  roundMessage.textContent = 1
  player1Scoreboard.textContent = 0
  player2Scoreboard.textContent = 0
  player1Dice.textContent = '\u00a0'
  player2Dice.textContent = '\u00a0'
  player1Message.textContent = '\u00a0'
  player2Message.textContent = '\u00a0'
  player1Dice.classList.remove('won')
  player2Dice.classList.remove('won')
  player2Dice.classList.remove('active')
  player1Dice.classList.remove('active')
}

function randomPlayerTurn() {
  let random = Math.floor(Math.random() * 2) + 1
  random = random === 1 ? true : false
  return random
}