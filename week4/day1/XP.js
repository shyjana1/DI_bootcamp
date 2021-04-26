// let b = 3,
//     d = b,
//     u = b;
// // const tree = ++d * d * b * b++ +    4*4*3*3*= 144
// // + --d+ + +b-- +    144 + 3+4
// // + +d * b + +   3*3 = 9
// // u     3

// console.log(tree);


// function makeWorker() {
//     let name = "Pete";
//     return function () {
//         return name;
//     };
// }
// let name = "John";
// let work = makeWorker();
// work(); // what will it show?


// XP!
// exercise 1

// #1
// function q1() {
//     var a = 5;
//     if (a > 1) {
//         a = 3;
//     }
//     alert(a);
// }
// the answer is 3


//#2
// var a = 0;

// function q2() {
//     a = 5;
// }

// function q22() {
//     alert(a);
// }
// console.log(q2())
// q22()
// the answer is: undefined(does not return anything), 0


//#3
// function q3() {
//     window.a = "hello";
// }


// function q32() {
//     alert(a);
// }
// the answer is hello
// //#4
// var a = 1;

// function q4() {
//     var a = "test";
//     alert(a);
// }
// the answer of q4 is test
//#5
// var a = 2;
// if (true) {
//     var a = 5;
//     alert(a);
// }
// alert(a);

// the answers are 5 and 5


// exercises2

// Change the conditional into a ternary and assign the function to a variable called experiencePoints.
// function experiencePoints() {
//     if (winBattle()) {
//         return 10;
//     } else {
//         return 1;
//     }
// }
// experiencePoints = winBattle() ? 10 : 1;

// exercise  3

// Exercise 3 : Colors

// let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// colors.forEach((item, i) => {
//     console.log("#" + i, item)
// })

// let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// let ordinal = ["th", "st", "nd", "rd"];
// // Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// // Hint : Use the array methods taught in class.

// console.log();

// #5
// let a = "hello"
// let b = [1, 2, 4, 0]

// function isString(b) {
//     if (typeof b !== 'string');
//     return true;
// }else{
//     return false;
// }

// console.log(isString(a));
//true
// console.log(isString(b));
//false

// In this exercise, you have to decide which type of variables you have to use:
var bankAmount = [a]
var VAT = (17 % 100)

// Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
// Create an array with all your monthly expenses - both positive and negative (money made and money spent).
Example: let details = ["+200", "-100", "+146", "+167", "-2900"]
// Create a program that modifies the expenses so that they will include taxes (multiply each expense by the VAT).
// Display your current bankAccount standing at the end of the month.