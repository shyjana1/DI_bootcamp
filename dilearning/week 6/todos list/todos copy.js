// grabbing the wrapper from the html
const wrapper = document.getElementById('chart-wrapper')
// creating the array of days


let week = ['sun','mon','tue', 'wed', 'thu', 'fri', 'satur']
// console.log(colors);
// creating a function to loop the array of days
const days = () =>{
    // adding an ul
    let myDays = document.createElement('ul')
    myDays.setAttribute('id', 'chart-values')
    week.forEach(item =>{
        let createdDays = document.createElement('li')
        createdDays.innerText = `${[item]}day`
        // appending the ul to the createdDays
        myDays.appendChild(createdDays)
        return myDays
    })
    wrapper.appendChild(myDays)
}
days()

const myColors = () =>{
    let colors =[]; 


    let bars = document.createElement('ul')
    bars.setAttribute('id', 'chart-bars')
    for (i=0; i<9; i++) {
        let colorList = document.createElement('li')
        // let randomColor = Math.floor(Math.random()*16777215).toString(16);
        color.push(colorList)
    }
    console.log(colors);

}
myColors()
// selector
const todoInput = document.querySelector(".todo-input")
// event listeners
todoButton.addEventListener('click',addTodo)
todoList.addEventListener('click',deleteCheck)
// function
function addTodo(e) {
    // prevent form from submitting:
    e.preventDefault();
    // todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // create li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

}