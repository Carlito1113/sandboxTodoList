// Individual Todo DOM creation
const generateTodoDOM = function () {
  const div = document.createElement('div');
  const span = document.createElement('span')
  const checkbox = document.createElement('input')
  const deleteButton = document.createElement('button')
  const input = document.getElementById('input')

  checkbox.type = 'checkbox'


  // Creates new div and adds an index to the div being created.
  if (input.value !== '') {
    span.textContent = input.value;
    todos.push(span.textContent);
    div.setAttribute('id', uuidv4());
    console.log(todos);
    console.log(div.getAttribute('id'));
  } else {
    span.textContent = 'Unnamed todo'
  }

  deleteButton.textContent = 'x'
  div.appendChild(checkbox);
  div.appendChild(span);
  div.appendChild(deleteButton);
  document.body.appendChild(div);

  // Gets rid of the appropriate todo when 'x' clicked and removes it from the array
  deleteButton.onclick = function(){
    //console.log(div.getAttribute('id'));
    div.removeChild(checkbox);
    div.removeChild(span);
    div.removeChild(deleteButton);
    todos.splice(div.getAttribute('id'), 1);
    console.log(todos);
  }

  return div;
}