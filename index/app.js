let todos = ['pp'];

const renderTodos = function(){
  console.log(todos);
};

document.getElementById('button').addEventListener('click', function(){
  console.log(renderTodos());
});