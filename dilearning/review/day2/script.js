// // creating a button from html
// //  function button(){
// //     console.log("hello");
// // }
// // // creating a button from JS (dom) there are more event listeners in w3 school
// // const root = document.getElementById("root");
// // catching the root element  
// const root= document.getElementById("root");
// // creating two buttons
// let btn = document.createElement("button");
// let submit = document.createElement("button");
// // appending the button to the root element
// root.appendChild(btn);
// // putting text inside the buttons elements
// btn.innerText = "button";
// submit.innerText = "submit";
// // appending the submit to the root element
// root.appendChild(submit);
// // creating the input element
// const input = document.createElement("input")
//   input.setAttribute("type", "text");
// // appending the input to the root element
// root.appendChild(input);
// // when pressing the button, the filterEmp is activated
// submit.addEventListener('click', async (event) => {
//   filterEmp();
// });
// // creating another button
// let button2 = document.createElement("button");
// // creating another button
// let sortButton = document.createElement("button");
// // appending the button to the root element
// root.appendChild(button2);
// // putting text inside the button element
// button2.innerText = "async"
// // when we click the button2, are calling the function asyncfetch
// button2.addEventListener('click',  asyncfetch)
// // when we click the button, are calling the function fetchEmployees
// btn.addEventListener('click',  fetchEmployees);
// // fitering the value of employees
// const sortAge = async() => {
//   let employees = await asyncfetch()
//   const sort = employees.sort((item1, item2) => {
//   let lower1 = item1.firstName.toLowerCase();
//   let lower2 = item2.firstName.toLowerCase();

//   if (lower1 > lower2) {
//     return 1;
//   }
//   if (lower1 < lower2) {
//     return -1;
//   }
//   return 0
//   })
  
//     console.log(sort);
//   };

// root.appendChild(sortButton);

// sortButton.addEventListener('click', sortAge)
// sortButton.innerText = "Sort"

// const filterEmp = async() => {
//   let employees = await asyncfetch()
//   const filter = employees.filter(item => {
//     return item.firstName.toLowerCase().includes(input.value.toLowerCase())
    
//   })
//   console.log(filter);
// }


// // 1 way of fetch
// function fetchEmployees (){
//   fetch('https://zivuch.github.io/employees.json')
//   .then(res => {
//     return res.json()
//   })
//   .then(data => {
//     console.log(data.employees);
//   })
//   .catch(err => {console.log(err);
//   })
// }
// // 2nd way of fetch
// async function asyncfetch (){
//   try{
//   const response = await fetch('https://zivuch.github.io/employees.json')
//   const json = await response.json()
//   return json.employees;
//   }
//   catch(err){console.log(err)}
// }
// async function matchFetch() {
  // let input1 = fname
  // let
//   try{
//     const response = await fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${fname}&sname=${sname}`, {
//       "method": "GET",
//       "headers": {
//         "x-rapidapi-key": "87c669598emshedb61a9db614e58p1028abjsn229b82d49d29",
//         "x-rapidapi-host": "love-calculator.p.rapidapi.com"
//       }
//     })
    
//     const res = await response.json();
//     console.log( res)

//   }
//   catch(err){console.log(err)}
// }
// matchFetch()

// YOGA API
// // grabbing the root from the html
// const root = document.getElementById('root');
// // declaring datas as a global variable
// let datas=[];
// // grabbing the inputs from the html
// let eng = document.getElementById('english');
// let san = document.getElementById('sanskrit');
// // fetching function from the api
// const yogaAPI = async (item) =>{
  
//   try{
//     // fetching the api
//     const response = await fetch("https://zivuch.github.io/yogaapi.json");
//     // getting the data
//     const getYoga = await response.json()
//     datas = getYoga
//     // calling showyoga function and grabbing the datas from the api in it
//     showYoga(datas)
//     // calling dropdown function for english and sanskrit
//     dropdown("english");
//     dropdown("sanskrit");
//     // catching the error
//   } catch(err){
//     console.log(`my error is` + err);
//   }
// }
// // calling the function
// yogaAPI()

// // creating the select filter
// const filterBySel = (event) =>{
//   // creating the filter
//   let f = datas.filter(a => a.id == event.target.value)
//   // calling the function with the filter
//   showYoga(f)
// }
// // displaying only the selected from the dropdown menu
// eng.addEventListener('change', filterBySel )
// san.addEventListener('change', filterBySel)


// // creating the yoga cards
// const showYoga =  (items)=> {
//   root.innerHTML = '';

//   for( item of items){
//     // creating a div for each cards
//     let card = document.createElement('div');
//     // setting how the card is shown
//     card.innerHTML = `<img src="${item.img_url}">  <p>${item.sanskrit_name}</p>  <p>${item.english_name}</p>`
//     root.appendChild(card)

//   }
  
// }
// // creating the dropdown
// const dropdown = (language)=> {
//   // creating the language menu
//   const menu = document.getElementById(language)
//   // looping through items in datas
//   for (item of datas ) {
//     // creating an option
//     let option = document.createElement('option')
//     // because we only have 2 languages, no need to loop
//     let lang = `${language}_name`
//     // putting the language key inside the option
//     option.innerHTML = item[lang]
    
//     option.setAttribute('value', item.id)
    
//     menu.appendChild(option)
    
//   }
// }
//     // creating the filter
// const filter = ()=>{
//   // filtering through the eng/san languages in data
//   let f = datas.filter(item => item.english_name.toLowerCase().includes(input.value.toLowerCase())||item.sanskrit_name.toLowerCase().includes(input.value.toLowerCase()))
//   // displaying only the selected card
//   showYoga(f)
// }
// // filtering the selected cards from the input
// let input = document.getElementById('input');
// input.addEventListener('keyup', filter)

const root = document.getElementById('root');
let datas=[];
let eng = document.getElementById('english');
let san = document.getElementById('sanskrit');

const yogaApi = async(item) =>{
  try{
    const response = await fetch("https://zivuch.github.io/yogaapi.json")
    const getYoga = await response.json()
    datas = getYoga
    showYoga(datas)
  }catch(err){
    console.log(`my error is` + err);
  }
}
yogaApi()

const showYoga= (items) => {
  root.innerHTML = '';
  for(item of items) {
    let card = document.createElement('div')
    card.innerHTML = `<img src= "${item.img_url}"> <p>${item.english_name}</p> <p>${item.sanskrit_name}</p>`
    root.appendChild(card)
  }
}
const filterBySel = (event) =>{
  
}