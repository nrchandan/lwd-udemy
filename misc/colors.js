const colors = ['black', 'yellow', 'aqua', 'green', 'red', 'blue', 'purple', 'lightpink', 'orange', 'grey', 'white', 'brown']

const columns = document.getElementsByClassName('col-1')

for (let i = 0; i < 12; i++) {
  columns[i].style.height = '30px'
  columns[i].style.backgroundColor = colors[i]
}
