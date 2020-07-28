function printReverse (arr) {
  for (let i = arr.length; i > 0; i--) {
    console.log(arr[i - 1])
  }
}

function isUniforum (arr) {
  if (arr.length <= 1) {
    return true
  }
  const first = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== first) {
      return false
    }
  }
  return true
}

function sumArray (arr) {
  let result = 0
  arr.forEach((num) => {
    result += num
  })
  return result
}

function max (arr) {
  if (arr.length === 0) {
    return null
  }
  let result = arr[0]
  for (let i = 1; i < arr.length; i++) {
    result = result >= arr[i] ? result : arr[i]
  }
  return result
}
