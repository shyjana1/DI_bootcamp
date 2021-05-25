// // creating a button from html
// //  function button(){
// //     console.log("hello");
// // }
// // creating a button from JS (dom) there are more event listeners in w3 school
// const root = document.getElementById("root");
// let button2 = document.createElement("button");
// root.appendChild(button2);
// button2.addEventListener('click', mybutton)
// button2.innerText = "button"
// function mybutton(){
//     let button3 = document.createElement('button')
//     button3.addEventListener('onsubmit', function(){
//         mybutton();
//     })
//     root.appendChild(button3)
//     button3.innerText = "button3"

// }

// const inputs = document.createElement("input", () => {
//     inputs.setAttribute("type", "text");
// });

// inputs.addEventListener('keypress', (event) => {
//     console.log(inputs.value);
// })
// let newlist= [];
// let list = [];
// // printing the value of the input
// const mysubmit = () => {
//     const s = document.getElementById('shysinput')
//     let newlist = list.push(s.value);
//     const displayer = (arr) => {
        
//         newli = document.createElement('div')
//         root.appendChild(newli)
//         newli.innerText = s.value
//         list.forEach(s => {
//             let n = newli.s;
//         }) 
//         const myli = list.map(s => {
//             return `your item is: ${s}`
//         });
//         console.log(myli);
//     }
//     displayer()
// }

// // targeting the root
// const root = document.getElementById("root");
// const textbox = () => {
//     // creating an input box
//     const input = document.createElement("input");
//     input.setAttribute('type','text');
//     root.appendChild(input);
//     // creating a button
//     const mybutton = document.createElement('button');
//     mybutton.innerText = "Submit";
//     root.appendChild(mybutton);
//     input.setAttribute("id","shysinput")
//     // creating an event listener that when we click it will run the onsubmit function
//     mybutton.addEventListener('click', ()=>{
//         mysubmit()
//     })
// }
// textbox()

// vat = 1.17
const cars = [
    {brand:'Porshe', price:'1000000',},
    {brand:'Audi', price:'500000',},
    {brand:'Toyota', price:'250000',},
  ]

const carsPrice = cars.map( item => {
    // return {brand:item.brand, price: item.price , priceVat:item.price*vat}
    // item.priceVat=item.price*vat
    // item["priceVat"] = item.price*vat
    // return item
    return {...item,priceVat:item.price * 1.17}
    
})
console.log(cars);
console.log(carsPrice)
//   const newCars = [
//     {brand:'Porshe', price:'1000000',pricePlusVat:'1170000'},
//     {brand:'Audi', price:'500000',pricePlusVat:'570000'},
//     {brand:'Toyota', price:'250000',pricePlusVat:'320000'},
//   ]

// const number = [{1:2},{3:4},{5:6},{7:8}]
// const nums = number.map(item => {
//     item["nums"] = item.number +1
//     return item["nums"]
// })
// console.log(nums);
