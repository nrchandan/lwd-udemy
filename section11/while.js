console.log('Printing all integers from -10 to 19')
var i = -10
while (i < 20) {
  console.log(i)
  i++
}

console.log('Printing all even numbers between 10 to 40')
i = 10
while (i <= 40) {
  console.log(i)
  i += 2
}

console.log('Printing all odd numbers between 300 and 333')
i = 301
while (i <= 333) {
  console.log(i)
  i += 2
}

console.log('Printing all numbers between 5 and 50 that are divisible by both 3 and 5')
i = 5
while (i <= 50) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i)
  }
  i++
}
