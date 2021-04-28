// exercise 1
// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }

// const {
//     name,
//     location: {
//         country,
//         city,
//         coordinates: [lat, lng]
//     }
// } = person;

// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
// I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

// exercise 2
// Create a function called displayStudentInfo(studentObject) that accepts an object as a parameter.
// For example displayStudentInfo({first: 'Elie', last:'Schoppik'}).
// The function should return a string as seen in the example below.
// displayStudentInfo({first: 'Elie', last:'Schoppik'}) 
// 'Your full name is Elie Schoppik'`
// let obj = {
//     first: "Elie",
//     last: "Schoppik"
// }
// const displayStudentInfo = ({
//     first,
//     last
// }) => {
//     console.log(`Your full name is ${first} ${last}`);
// }
// displayStudentInfo(obj);

// exercise 3
// Using this object const users = { user1: 18273, user2: 92833, user3: 90315 }


const users = {
    user1: 18273,
    user2: 92833,
    user3: 90315
}

let user = Object.entries(users)
console.log(user);

let outcome = user.map((i) => {
    return (i[1]) * 2;
})

console.log(outcome);


// exercise 4
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const member = new Person('John');
// console.log(typeof member);

// type of member is an object



// exercise 5
// class Dog {
//     constructor(name) {
//         this.name = name;
//     }
// };
// //   Which constructor will successfully extend the Dog class?
// // 1
// class Labrador extends Dog {
//     constructor(name, size) {
//         this.size = size;
//     }
// };


// // 2
// class Labrador extends Dog {
//     constructor(name, size) {
//         super(name);
//         this.size = size;
//     }
// };


// // 3
// class Labrador extends Dog {
//     constructor(size) {
//         super(name);
//         this.size = size;
//     }
// };


// // 4
// class Labrador extends Dog {
//     constructor(name, size) {
//         this.name = name;
//         this.size = size;
//     }
// };

// the answer is: number two


// const student = {
//     name: 'John Doe',
//     age: 16,
//     scores: {
//         maths: 74,
//         english: 63
//     }
// };
// const {
//     name,
//     scores: {
//         maths,
//         science = 50
//     }
// } = student;



// DC   let myVid = new Video("My first video!", "cNolan", 57);
// myVid.watch();