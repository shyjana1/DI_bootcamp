// //exercise 1
// document.getElementById('navBar').setAttribute('id', 'socialNetworkNavigation');
// let list = document.createElement('li');
// let text = document.createTextNode('here is my text');
// list.appendChild(text);
// document.getElementsByTagName('ul')[0].appendChild(list);

//exercise 2
/* 

let names = document.getElementsByClassName("list");
names[0].lastElementChild.innerText = "Richard";


for (let x of names) {
    x.firstElementChild.innerText = "Shy";
    let list = document.createElement('li')
    let text = document.createTextNode("Hey students")
    list.appendChild(text)
    x.appendChild(list)
}
let sara = names[1].querySelector("li:nth-child(2)");
names[1].removeChild(sara); */

//exercise 3

/* 
<div>Users:</div>
  <ul>
    <li>John</li>
    <li>Pete</li>
  </ul>

For the following exercise use the HTML presented above:

Add a “light blue” background color and some padding to the <div>.
Do not display the first name (John) in the list.
Add a border to the second name (Pete).
Change the font size of the whole body.
Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).
 */

let users = document.body.querySelector("div");
let john = users.querySelector("ul:nth-child(1)");
// document.body.querySelector("div").style.background = "red"

users.style.background = "lightBlue", "padding: 200px";
john.style.display = "block";

// if (let x in div;);