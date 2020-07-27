function isEven (x) {
  return x % 2 === 0
}

function factorial (x) {
  var result = 1
  while (x > 1) {
    result *= x
    x -= 1
  }
  return result
}

function kebabToSnake (term) {
  // return term.split("-").join("_");
  return term.replace(/-/g, '_')
}
