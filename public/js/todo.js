// put js for todo app here

function addTodo(event){
    console.log(event.target);
    event.preventDefault();
    //console.log(event);
    var todoText = document.querySelector('#todo');
    if(todoText.value == ""){
        return ;
    }

    var todoList = document.querySelector('.list');
    var todoItem = document.createElement('li')
    todoItem.innerText = todoText.value;
    todoList.appendChild(todoItem);
    todoText.value = "";
}

function deleteTodo(event){
    console.log(event.target);
    event.target.parentNode.removeChild(event.target);
}

var listItems = document.querySelectorAll('li');
for(var l of listItems)
  l.addEventListener('click',deleteTodo);