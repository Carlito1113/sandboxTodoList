let todos = [];

const filters = {
  searchText: ''
}

// const renderTodos = function(todos, filters){
//   todos.forEach(todo, function () {
//     const filteredTodos = todo.filter(todo)

//   })
// };

const generateTodoDOM = function () {
  const div = document.createElement('div')
  const span = document.createElement('span')
  const checkbox = document.createElement('input')
  const deleteButton = document.createElement('button')
  const input = document.getElementById('input')

  checkbox.type = 'checkbox'

  if (input.value !== '') {
    span.textContent = input.value
  } else {
    span.textContent = 'Unnamed todo'
  }
  
  deleteButton.textContent = 'x'
  div.appendChild(checkbox)
  div.appendChild(span)
  div.appendChild(deleteButton)
  document.body.appendChild(div)

  return div
}

document.getElementById('button').addEventListener('click', function(){
  generateTodoDOM()
});