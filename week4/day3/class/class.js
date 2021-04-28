// exercise
// sort any array using a for loop with nested _loop
// do not use the array.sort

// given this array [5,0,9,1,7,4,2,6,3,8]
// result [987654321]
// use temporary arrays
// let arr = [5, 0, 9, 1, 7, 4, 2, 6, 3, 8];
// exercise 1
// const sum = (a, b) => a + b;

// exercise 2
// Analyse the code below, and before executing it, predict the outcome of the last line.
// const addTo = x => y => x + y;
// var addToTen = addTo(10);
// outcome: 13

// exercise 3
// Analyse the code below, and before executing it, predict the outcome of the last line.
// const sum = (a, b) => a + b
// const curriedSum = (a) => (b) => a + b
// curriedSum(30)(1)
// outcome: 31

// exercise 4
// const sum = (a, b) => a + b
// const curriedSum = (a) => (b) => a + b
// const add5 = curriedSum(5)
// add5(12);
// outcome: 17

// exerecise 5
// const compose = (f, g) => (a) => f(g(a));
// const add1 = (num) => num + 1;
// const add5 = (num) => num + 5;
// compose(add1, add5)(10)
// outcome: 16


// Exercise reverse
//  reverse each word in a given String
//  For example:
// *  Given this 'word in a given String'
// *  result 'drow ni a nevig gnirtS'
// const string = "word in a given String";
// const str1 = string.split(" ")
// looping through the sentence
// seperate the rows
// return the functinos
// const rev = str1.reverse("");
// console.log(rev);

// Create an function that get an array of Numbers as input
//  and return a new array with all numbers greater than 3
// * For example:
// * Give this array [0,1,1,2,3,5,8]
// * result [5,8]

// const arr = [0, 1, 1, 2, 3, 5, 8];
// const arr2 = arr.filter((i) => {
//     return (i > 3);
// });
// console.log(arr2);


// const dragons = ['Tim', 'JohnatSahan', 'Sandy', 'Sarah'];
// // get all names that start with Sa / contain Sa
// const sa = dragons.filter(i => {
//     return i.startsWith('Sa') //or includes
// })

// console.log(sa)

// Create an function that get an array of Numbers as input
// * and return the sum of all numbers
// * For example:
// * Give this array [2, 5, 10,100]
// * result 117

function arr = [2, 5, 10, 100]
let account = [{
    dolars: 2
}, {
    dolars: 5
}, {
    dolars: 10
}, {
    dolars: 100
}];
// use reduce to calc the sum of dolars