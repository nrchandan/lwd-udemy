var answer = window.prompt('Are we there yet?')
while (answer.indexOf('yes') === -1 && answer.indexOf('yeah') === -1) {
  answer = window.prompt('Are we there yet?')
}
window.alert('Yay, we finally made it!')
