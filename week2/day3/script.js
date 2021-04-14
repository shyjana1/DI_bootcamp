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
let code = prompt("enter your code", "0");
let i = 0;
while (i < +code) {
    console.log(i);
    i++ >= 10;
};