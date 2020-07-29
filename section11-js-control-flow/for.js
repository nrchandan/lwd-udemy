console.log("Printing all integers from -10 to 19")
for (let i=-10; i<20; i++) {
  console.log(i);
}

console.log("Printing all even numbers between 10 to 40")
for (let i=10; i<=40; i+=2) {
  console.log(i);
}

console.log("Printing all odd numbers between 300 and 333")
for (let i=301; i<=333; i+=2) {
  console.log(i);
}

console.log("Printing all numbers between 5 and 50 that are divisible by both 3 and 5")
for (let i=5; i<=50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);
  }
}
