let todos = [];

todos = JSON.parse(localStorage.getItem('todos'));
if(todos != null){
  generateTodoDOM();
}

const filters = {
  searchText: '',
  hideCompleted: false
}

document.getElementById('button').addEventListener('click', function(){
  generateTodoDOM();
  localStorage.setItem('todos', JSON.stringify(todos));
});