var todoForm = document.getElementById('todo-form')
todoForm.addEventListener('submit', function(e) {
  e.preventDefault();
  var addValue = todoForm.add.value;
  var listElement = document.getElementById('todo-list');

  var listItem = document.createElement('li');
  var listItemText = document.createTextNode(addValue)
  listItem.appendChild(listItemText);
  listElement.appendChild(listItem);

  todoForm.add.value = '';
});

var listElement = document.getElementById('todo-list');
listElement.addEventListener('click', function(e) {
  var listItem = e.target;
  listItem.classList.toggle('completed');
});
