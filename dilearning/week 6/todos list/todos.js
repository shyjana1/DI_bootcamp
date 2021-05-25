// Selectors
const todoInput = document.querySelector(".todo-input")
const todoButton = document.querySelector(".todo-button")
const todoList = document.querySelector(".todo-list")

// Event Listeners
todoButton.addEventListener('click',addTodo)
todoList.addEventListener('click',deleteCheck)


// Functions
function addTodo(event) {
    // prevent form from submitting:
    event.preventDefault();
    // todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // create li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    // add todo to localStorage
    saveLocalTodos(todoInput.value)
    // check mark button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class= "fas fa-check"></i>'
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    // trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class= "fas fa-trash"></i>'
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    // Append to list
    todoList.appendChild(todoDiv);
    // clear TODO input value
    todoInput.value = "";

}

function deleteCheck(e) {
    const item = e.target;
    // delete todo item
    if(item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        todo.remove();
    }
    // cross off completed items
    if(item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed")
    }
}
// create local storage
function saveLocalTodos(todo){
// checks if i already have anything inside the array
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}