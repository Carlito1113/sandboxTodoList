// Individual Todo DOM creation
const generateTodoDOM = function () {
  const todo = document.createElement('div');
  const span = document.createElement('span')
  const checkbox = document.createElement('input')
  const deleteButton = document.createElement('button')
  const input = document.getElementById('input')

  checkbox.type = 'checkbox'

  // Creates new div and adds an index to the div being created.
  if (input.value !== '') {
    span.textContent = input.value;
    todos.push(span.textContent);
    todo.setAttribute('id', uuidv4());
    console.log(todos);
    console.log(todo.getAttribute('id'));
  } else {
    span.textContent = 'Unnamed todo'
  }

  deleteButton.textContent = 'x'
  todo.className = 'todo'
  span.className = 'span'
  todo.appendChild(checkbox);
  todo.appendChild(span);
  todo.appendChild(deleteButton);
  document.body.appendChild(todo);

  // Gets rid of the appropriate todo when 'x' clicked and removes it from the array
  deleteButton.onclick = function(){
    todo.remove()
    todos.splice(todo.getAttribute('id'), 1);
    console.log(todos);
  }

  return todo;
}