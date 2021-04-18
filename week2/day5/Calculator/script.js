// let firstNum = [];
// let secondNum = [];
// let opr;
// let sum = 0

// function number(num) {
//     firstNum.push(num);
// }

// function operator(opr) {
//     secondNum = +(firstNum.join(''));
//     firstNum = [];
//     operation = opr;

// }

// function equal(mysum) {
//     firstNum = +(firstNum.join(''));
//     sum = eval(firstNum + secondNum);
// }
// console.log(sum);

let firstNum = [];
let secondNum;
let operation;

function number(num) {
    firstNum.push(num);
}

function operator(op) {
    secondNum = parseInt(firstNum.join(''));
    firstNum = [];
    operation = op;
}

function equal() {
    firstNum = parseInt(firstNum.join(''));
    if (operation === '+') {
        console.log(secondNum + firstNum)
    } else if (operation === '-') {
        console.log(secondNum - firstNum)
    } else if (operation === '*') {
        console.log(secondNum * firstNum)
    } else {
        console.log(secondNum / firstNum)
    }
}

function del(deleted) {

    if (operation === 'delete') {


        firstNum = parseInt(secondNum.pop(secondNum));

    }

}
console.log(firstNum);
console.log(secondNum);