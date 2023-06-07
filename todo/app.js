const todoInput = document.getElementById('todo-input');
const todoBtn = document.getElementById('todo-btn');
const todoUl = document.getElementById('todo-ul-list');

todoBtn.addEventListener('click', addTodo);

function addTodo(e) {
    e.preventDefault();

    /* ------------------------
        Parent Div
    ------------------------*/
    let todoParentDiv = document.createElement('div');
    todoParentDiv.classList.add('todo-div');

    /* ------------------------
        CheckedBox
    ------------------------*/
    let checkedBoxBtn = document.createElement('button');
    checkedBoxBtn.classList.add('tick-bg');
    checkedBoxBtn.innerHTML = ' <ion-icon name="checkmark" class="tick-icon"></ion-icon>';
    todoParentDiv.appendChild(checkedBoxBtn);

    /* ------------------------
        Todo Input: Value
       ------------------------*/
    if (todoInput.value.trim() === '') {
        alert('Add todo please');
        return;
    } else {
        let todoList = document.createElement('li');
        todoList.classList.add('todo-list');
        todoList.textContent = todoInput.value;
        todoParentDiv.appendChild(todoList);

    }
    todoInput.value = '';
    saveData();

    /* ------------------------
          TrashBtn
       ------------------------*/
    let trashBtn = document.createElement('button');
    trashBtn.classList.add('delete-todo');
    trashBtn.innerHTML = ' <ion-icon class="delete-icon" name="trash-outline"></ion-icon>';
    todoParentDiv.appendChild(trashBtn);

    todoUl.appendChild(todoParentDiv);
    saveData();
}

/* ------------------------
    WE CAN DELETE AND COMPLETE TASK
   ------------------------*/
todoUl.addEventListener('click', function (e) {
    if (e.target.classList[0] === 'tick-icon') {
        const todo = e.target.parentElement.parentElement;
        todo.classList.toggle("completed");
        saveData();
    }
    else if (e.target.classList[0] === 'delete-icon') {
        e.target.parentElement.parentElement.remove();
        saveData();
    }
}, false)


/* ------------------------
       Store Data
   ------------------------ */
function saveData() {
    localStorage.setItem('todos', todoUl.innerHTML);
}

/* ------------------------
       Get Data
   ------------------------ */
function showData() {
    todoUl.innerHTML = localStorage.getItem('todos');
}

showData();
