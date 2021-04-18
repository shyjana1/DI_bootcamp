//exercise 1
/* let age = +prompt("enter your age", "18+") */
/*  */
/* function checkDriverAge(age) { */
/*     if (age < 18) { */
/*         alert(`sorry my friend, your age is ${age}  and you're too young to drive, go home.`); */
/*         return; */
/*     } else if (age === 18) { */
/*         alert(`Congratulations! your age is ${age}, this is your first year of driving. Enjoy the ride!`); */
/*         return; */
/*     } else(age > 18); { */
/*         alert(`You are ${age} years old enough to drive, Powering On. Enjoy the ride!`); */
/*         return; */
/*     } */
/* } */
/* checkDriverAge(age) */

/* //exercise 2 */
/*  */
/* var values = [0.25, 0.10, 0.05, 0.01]; */
/*  */
/* function changeEnough(change, itemCost) { */
/*     var sum = 0 */
/*     for (let i = 0; i < change.length; i++) { */
/*         sum += change[i] * values[i]; */
/*     } */
/*     if (sum > itemCost) { */
/*         return (true); */
/*     } else { */
/*         return (false); */
/*     } */
/* } */
/*  */
/*  */
/* console.log(changeEnough([4, 2, 20, 100], 2)); */
/*  */
/*  */
//exercise 3
/* var sum = 0; */
/* for (var x = 0; x < 500; x++) { */
/*     if (x % 23 === 0) { */
/*         sum += x; */
/*     } */
/* } */
/* console.log(sum); */
/*  */

/*  */
//EXERCISE 4
/* let amazonBasket = { */
/*     glasses: 1, */
/*     books: 2, */
/*     floss: 100 */
/* }; */
/* var item = prompt("Enter an item my friend"); */
/*  */
/* function checkBasket(myBasket) { */
/*     if (item in amazonBasket) { */
/*         return true; */
/*     } else { */
/*         return false; */
/*     } */
/* } */
/* console.log(checkBasket()); */

//exercise 5
/* The function should return the total price of your shoppingList. In order to do this you must follow these rules: */
/* The item must be in stock. */
/* If the item is in stock find out the price in the prices object. */
/* Call the myBill() function. */
/* Bonus: If the item is in stock, decrease the item’s stock by 1 */

/* let stock = { */
/*     "banana": 6, */
/*     "apple": 0, */
/*     "pear": 12, */
/*     "orange": 32, */
/*     "blueberry": 1 */
/* } */
/*  */
/* let prices = { */
/*     "banana": 4, */
/*     "apple": 2, */
/*     "pear": 1, */
/*     "orange": 1.5, */
/*     "blueberry": 10 */
/* } */
/*  */
/* var shoppingList = ["banana"]; */
/*  */
/* function myBill(basket, itemCost) { */
/*     if (shoppingList in stock) { */
/*         var sum = 0; */
/*         for (let i = 0; i < stock.length; i++) */
/*             sum += prices[i]; */
/*     } */
/*     if (sum > itemCost) { */
/*         return (true); */
/*  */
/*     } else { */
/*         return false; */
/*     } */
/* } */
/* console.log(myBill()); */

//exercise 6

/* let bill = +prompt("enter your bill", "150$") */
/* var tip = [+ */
/*     0.2, */
/*     0.15, */
/*     0.1, */
/* ] */
/* switch (bill) { */
/*     case 1: */
/*         var sum = 0; */
/*         bill < 50; */
/*         sum += +bill + (`${bill}` * tip[0]) + "$"; */
/*         console.log(sum); */
/*     case 2: */
/*         var sum = 0; */
/*         50 >= bill <= 200; */
/*         sum += bill + (bill * tip[1]) + "$"; */
/*         console.log(sum); */
/*     case 3: */
/*         var sum = 0; */
/*         bill > 200; */
/*         sum += bill + (bill * tip[2]) + "$"; */
/*         console.log(sum); */
/*  */
/* } */

//exercise 7

/* #1
It should ask the user for the number of nights they would like to stay in the hotel.
If the user doesn’t answer or if the answer is not a number, ask again.
The hotel costs $140 per night. The function should return the total price of the hotel.
*/
/*  */
/* var nights = +prompt("How many nights are you planning to stay?", "5") */
/* var price = 140 */
/* var i = 0; */
/* var result = 0; */
/*  */
/* function hotel_cost(hotelPrice) { */
/*     for (var sum = 0; i++;) { */
/*         if (nights === undefined || "") { */
/*             return nights */
/*  */
/*         } else { */
/*  */
/*         } { */
/*             sum = `${nights}` * price; */
/*             result += sum */
/*         } */
/*     } */
/* } */
/* console.log(hotel_cost()); */

/* #2 */
/* Define a function called plane_ride_cost(). */
/* It should ask the user for their destination. */
/* The function should return a different price depending on the location. */
/* “London”: 183$ */
/* “Paris” : 220$ */
/* All other destination : 300$ */
/* If the user doesn’t answer or if the answer is not a string, ask again. */
/* var trip = prompt("tell me where you want to go") */
/* var destination = { */
/*     "London": 183, */
/*     "Paris": 220, */
/*     "other": 300 */
/* } */
/* var flight = prompt("where would you like to go?", "Paris? London?") */
/*  */
/* function plane_ride_cost(travel) { */
/*     for (var sum = 0; i in flight;) { */
/*         if (flight == undefined || parseInt || parseFloat) */
/*         return false */
/*     } else { */
/*  */
/*     } */
/*  */
/*  */
/* } */
/* #3 */
/* Define a function called rental_car_cost(). */
/* It should ask the user for the number of days they would like to rent the car. */
/* If the user doesn’t answer or if the answer is not a number, ask again. */
/* Calculate the cost to rent the car. The car costs $40 everyday. */
/* If the user rents a car for more than 10 days, they get a 5% discount. */
/* The function should return the total price of the car rental. */

/* #4 */
/* Define a function called total_vacation_cost() that returns the total cost of the user’s vacation by calling the 3 functions that you creat ed above. */
/* Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z. */
/* Hint: You have to call the functions hotel_cost(), plane_ride_cost() and rental_car_cost() inside the function total_vacation_cost. */


/* #5 Call the function total_vacation_cost() */

/* # 6 Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the total_vacation_cost() function. */
/*  */