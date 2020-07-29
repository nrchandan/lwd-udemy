var age = window.prompt('Enter your age.')
if (age < 0) {
  console.log('Age cannot be negative.')
} else {
  if (age === 21) {
    console.log('Happy 21st birthday!!')
  }
  if (age % 2 === 1) {
    console.log('Your age is odd!')
  }
  if (age % Math.sqrt(age) === 0) {
    console.log('Perfect square!')
  }
}
