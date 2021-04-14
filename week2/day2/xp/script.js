//exercise 1

/* let x = +prompt("enter a number"); */
/* let y = +prompt("enter a number"); */
/*  */
/* if (x > y) { */
/*     console.log("x is the biggest number"); */
/* } */
/*  */

//exercise 2

/* let newDog = "Chihuahua"; */
/* console.log(newDog.length); */
/* console.log(newDog.toUpperCase()); */
/* console.log(newDog.toLowerCase()); */
/* if (newDog === "Chihuahua") { */
/*     console.log("I love Chihuahuas, it’s my favorite dog breed"); */
/* } else console.log("I dont care, I prefer cats"); { */
/* } */

//exercise 3

/* let X = +prompt("Enter a number: "); */
/*  */
/* //check if the number is even */
/* if (number % 2 == 0) { */
/*     console.log("x is an even number."); */
/* } */
/*  */
/* // if the number is odd */
/* else { */
/*     console.log("x is an odd number."); */
/* } */


//exercise 4
/* let direction = prompt("Choose a direction: forward,back, right, left", ); */
/* let whatHappens; */
/* switch (direction) { */
/*     case "forward": */
/*         break; */
/*         whatHappens = "you encounter a monster"; */
/*     case "back": */
/*         whatHappens = "you arrived home"; */
/*         break; */
/*         break; */
/*     case "right": */
/*         whatHappens = "you found a river"; */
/*         break; */
/*     case "left": */
/*         break; */
/*         whatHappens = "you run into a troll"; */
/*         break; */
/*     default: */
/*         whatHappens = "please enter a valid direction"; */
/* }; */
/* console.log(direction + ":" + whatHappens); */
/*  */
//exercise 5

let users = prompt("Enter Username:" ["Lea123", "Princess45", "cat&doglovers", "helooo@000"]).split(',');
if (users[0] === "") {
    users = [];
}
console.log(users);
switch (users.length) {
    case 0:
    case users[0] === "":
        console.log("no one is online");
        break;
    case 1:
        console.log(users[0] + " is online");
        break;
    case 2:
        console.log(users[0] + users[1] + " are online");
        break;
    default:
        console.log((users[0] + ", " + users[1]) + " and " + (users.length - 2) + (" more are online"));
}