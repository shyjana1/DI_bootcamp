/* for (let i = 0; i < 16; i++) {
    if (i % 2 === 0) {
        console.log(i + "your number is even");
    } else {
        console.log(i + "your number is odd");
    }



} */
//exercise 1
/*  */
/* let colors = ["green", "blue", "red"]; */
/* for (i in colors) { */
/*     console.log(`my number ${+i + 1} color is ${colors[i]}`) */
;
/*  */
/* } */

//exercise 2
/* let newName = ("Jason") */
/* let people = ["Greg", "Mary", "Devon", "James"]; */
/* people.shift(); */
/* console.log(people); */
/*  */
/* people.splice(2, 1, newName); */
/* console.log(people); */
/* people.push("Shy"); */
/* console.log(people); */
/* for (i in people) { */
/*     console.log(`your name is ${people[i]}`); */
/*     if (people[i] == newName) { */
/*         break; */
/*     }; */
/* } */
/*  */
/* console.log(people.slice(1, 3)); */
/* console.log(people.indexOf("Mary")); */
/* console.log(people.indexOf("Foo")); //Answer: foo is not place inside the array// */
/* let last = people[people.length - 1]; */
/* console.log(last); */


//exercise 3
// let code = +prompt("enter your code", "0");
// let i = (`${code}`);
// while (i in code < 10) {
//     console.log(code);
// }

// exercise 4
// let guestList = {
//     randy: "Germany",
//     karla: "France",
//     wendy: "Japan",
//     norman: "England",
//     sam: "Argentina"
// }

// let student = prompt("what is your name?", "??");
// if (student in guestList) {
//     console.log(`Hi! I'm ${student}, and I'm from ${guestList[student]}.`);
// } else {
//     console.log("Hi! I'm a guest");
// };

// exercise 5
/* Create an object called family with a few key value pairs.
Console.log the keys. (using a for loop).
Console.log the values. (using a for loop).
 */

// let family = {
//     Shy: "Israel",
//     Anthony: "Canada",
//     Steven: "Australia",
// }

// // for (i in family) {
// //     console.log(i);
// // }
// let values = Object.values(family)
// console.log(values);


// exercise 6
//   Given the object above, console.log “my name is Rudolf the raindeer”

// let details = {
//     my: 'name',
//     is: 'Rudolf',
//     the: 'raindeer'
// }
// let values = Object.values(details)
// console.log("my " + values[0] + " is " + values[1] + " the " + values[2])

//exercise 7

let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]
names.sort()
firstOfNames = []
for (let i = 0; i < names.length; i++) {
    firstOfNames.push(names[i][0]);
    console.log(firstOfNames);
}