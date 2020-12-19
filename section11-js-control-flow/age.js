window.setTimeout(function () {
  var age = Number(window.prompt('Enter your age.'))
  if (age === 21) {
    console.log('Happy 21st birthday!!')
  } else if (age < 21) {
    console.log('You are a minor')
  } else {
    console.log('Your are a major')
  }
  if (age % 2 === 1) {
    console.log('Your age is odd!')
  } else {
    console.log('Your age is even!')
  }
}, 500)
