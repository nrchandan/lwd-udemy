var number = 93
var guess = Number(window.prompt('Guess the number'))
if (guess === number) {
  window.alert('You guessed it!')
} else if (guess <= number) {
  window.alert('Too low!')
} else {
  window.alert('Too high!')
}
