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
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10)
// outcome: 16