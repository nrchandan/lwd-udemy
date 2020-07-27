window.setTimeout(function () {
  var answer
  var todos = []
  while (answer !== 'quit') {
    answer = window.prompt('What would you like todo?')
    if (answer === 'list') {
      console.log('**********')
      todos.forEach((todo, i) => {
        console.log(i + ': ' + todo)
      })
      console.log('**********')
    } else if (answer === 'quit') {
      break
    } else if (answer === 'new') {
      const todo = window.prompt('Enter a new todo')
      todos.push(todo)
      console.log(todo + ' added to list')
    } else if (answer === 'delete') {
      const index = window.prompt('Enter index of todo to delete')
      const removed = todos.splice(index, 1)
      console.log('Todo ' + removed[0] + ' removed')
    }
  }
  console.log('Bye!')
}, 500)
