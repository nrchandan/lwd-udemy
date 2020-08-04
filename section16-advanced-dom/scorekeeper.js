var playerOneScore = 0
var playerTwoScore = 0
var playingTo = 5

function playerOneScores () {
  if (!gameOver()) {
    playerOneScore++
    refreshDisplay()
  }
}

function playerTwoScores () {
  if (!gameOver()) {
    playerTwoScore++
    refreshDisplay()
  }
}

function resetGame () {
  playerOneScore = playerTwoScore = 0
  playingTo = 5
  document.getElementById('playerOneScore').classList.remove('green')
  document.getElementById('playerTwoScore').classList.remove('green')
  refreshDisplay()
}

function refreshDisplay () {
  document.querySelector('#playerOneScore').textContent = playerOneScore
  document.querySelector('#playerTwoScore').textContent = playerTwoScore

  if (playerOneScore === playingTo) {
    document.getElementById('playerOneScore').classList.add('green')
  } else if (playerTwoScore === playingTo) {
    document.getElementById('playerTwoScore').classList.add('green')
  }
}

function gameOver () {
  return playerOneScore === playingTo || playerTwoScore === playingTo
}

function changeWinningScore (score) {
  resetGame()
  playingTo = Number(score)
  document.getElementById('playingTo').textContent = score
}
