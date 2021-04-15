const todos = [];

const filters = {
  searchText: '',
  hideCompleted: false
}

document.getElementById('button').addEventListener('click', function(){
  generateTodoDOM()
});