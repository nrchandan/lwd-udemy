var number = 93;
var guess = Number(prompt("Guess the number"));
if (guess === number) {
  alert("You guessed it!")
} else if (guess <= number) {
  alert("Too low!")
} else {
  alert("Too high!")
}
