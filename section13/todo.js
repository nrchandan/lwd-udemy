window.setTimeout(function() {
  var answer;
  var todos = [];
  while (answer !== "quit") {
    answer = prompt("What would you like todo?")
    if (answer === "list") {
      console.log(todos);
    } else if (answer === "quit") {
      break;
    } else if (answer === "new") {
      todos.push(prompt("Enter a new todo"))
    }
  }
}, 500)
