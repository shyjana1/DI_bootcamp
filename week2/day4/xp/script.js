//exercise 1
// let age = +prompt("enter your age", "18+")

// function checkDriverAge(age) {
//     if (age < 18) {
//         alert(`sorry my friend, your age is ${age}  and you're too young to drive, go home.`);
//         return;
//     } else if (age === 18) {
//         alert(`Congratulations! your age is ${age}, this is your first year of driving. Enjoy the ride!`);
//         return;
//     } else(age > 18); {
//         alert(`You are ${age} years old enough to drive, Powering On. Enjoy the ride!`);
//         return;
//     }
// }
// checkDriverAge(age)

/* //exercise 2 */

// var values = [0.25, 0.10, 0.05, 0.01];

// function changeEnough(change, itemCost) {
//     var sum = 0
//     for (let i = 0; i < change.length; i++) {
//         sum += change[i] * values[i];
//     }
//     if (sum > itemCost) {
//         return (true);
//     } else {
//         return (false);
//     }
// }
// console.log(changeEnough([4, 2, 20, 100], 2));




//exercise 3
// var sum = 0;
// for (var x = 0; x < 500; x++) {
//     if (x % 23 === 0) {
//         sum += x;
//     }
// }
// console.log(sum);


//EXERCISE 4
// let amazonBasket = {
//     glasses: 1,
//     books: 2,
//     floss: 100
// };
// var item = prompt("Enter an item my friend");

// function checkBasket(myBasket) {
//     if (item in amazonBasket) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(checkBasket());

//exercise 5
/* The function should return the total price of your shoppingList. In order to do this you must follow these rules: */
/* The item must be in stock. */
/* If the item is in stock find out the price in the prices object. */
/* Call the myBill() function. */
/* Bonus: If the item is in stock, decrease the item’s stock by 1 */

let stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
}

let prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
}

// var shoppingList = ["banana"];

// function myBill() {
//     let sum = 0;
//     for (item of shoppingList) {
//         if (stock[item] > 0) {
//             sum += prices[item];
//             stock[item] -= 1;
//         };
//     };
//     return sum;
// };
// console.log(myBill());

//exercise 6


// function inclTip(bill) {
//     let tip = 0;
//     if (bill < 50) {
//         tip = 1.2
//     } else if (bill < 200) {
//         tip = 1.15
//     } else {
//         tip = 1.1
//     };
//     return (bill * tip);
// };
// console.log("you need to pay : " + inclTip(+prompt("My friend, John, how much was your bill today?")));
//exercise 7

var dests = {
    "London": 183,
    "Paris": 220,
    "other": 300
};

let hotel_cost = (nb) => nb * 140;

function plane_ride_cost(d) {
    if (d in dests) {
        return dests[d]
    } else {
        return dests["other"]
    };
};

let rental_car_cost = (nb) => nb * 40 * (1 - 0.05 * (nb > 10));

function total_vacation_cost() {
    let nbnights = 0;
    while (!(nbnights > 0)) {
        nbnights = +prompt("How many nights (positive number, please)? ");
    };
    let dest = "";
    while (dest.length === 0) {
        dest = prompt("Destination ? ");
    };
    let nbdays = 0;
    while (!(nbdays > 0)) {
        nbdays = +prompt("How many car rental days ? ");
    };
    let brkdwn = [hotel_cost(nbnights), plane_ride_cost(dest), rental_car_cost(nbdays)];
    let total = brkdwn.reduce((a, b) => a + b, 0);
    return `${nbnights} nights:${brkdwn[0]} + ${dest}:${brkdwn[1]} + ${nbdays} car rental days:${brkdwn[2]} = ${total}`;
};

console.log(total_vacation_cost());