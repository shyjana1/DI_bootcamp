// exercise 1

// const navBar = document.getElementById('navBar')
// const ul = document.getElementById('ul')
// navBar.setAttribute('div','socialNetworkNavigation')

// var li = document.createElement("li");
// li.innerHTML = "Logout";                   
// document.body.appendChild(li);  

// exercise 2
// 1:

// const li = document.getElementById("container")
// li.setAttribute('li','Richard')

// console.log(li);
// li.innerHTML = "Richard";                   
// 2:
const container = document.querySelectorAll('.list')
const ul1 = document.querySelectorAll('li')
// ul1.innerHTML = 'Shy'
// ul1.setAttribute('li',"Shy")
ul1.append(container)
ul1.innerText = "Shy"
console.log(ul1);
