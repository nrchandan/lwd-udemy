var todos = []
window.setTimeout(function () {
  var answer
  while (answer !== 'quit') {
    answer = window.prompt('What would you like todo?')
    if (answer === 'list') {
      listTodos()
    } else if (answer === 'quit') {
      break
    } else if (answer === 'new') {
      newTodo()
    } else if (answer === 'delete') {
      deleteTodo()
    }
  }
  console.log('Bye!')
}, 500)

function listTodos () {
  console.log('**********')
  todos.forEach((todo, i) => {
    console.log(i + ': ' + todo)
  })
  console.log('**********')
}

function newTodo () {
  const todo = window.prompt('Enter a new todo')
  todos.push(todo)
  console.log(todo + ' added to list')
}

function deleteTodo () {
  const index = window.prompt('Enter index of todo to delete')
  const removed = todos.splice(index, 1)
  console.log('Todo ' + removed[0] + ' removed')
}
