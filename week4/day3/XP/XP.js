// exercise 1

// Analyze these pieces of code before executing them. What will be the outputs ?
// ------1------
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result);
// results = ['bread', 'carrot', 'potato' , 'chicken', 'apple', 'orange'];
// ------2------
// const country = "USA";
// console.log([...country]);
// "usa"
// ------Bonus------
// let newArray = [...[, , ]];
// console.log(newArray);
// []


// exercise 2
let users = [{
        firstName: 'Bradley',
        lastName: 'Bouley',
        role: 'Full Stack Resident'
    },
    {
        firstName: 'Chloe',
        lastName: 'Alnaji',
        role: 'Full Stack Resident'
    },
    {
        firstName: 'Jonathan',
        lastName: 'Baughn',
        role: 'Enterprise Instructor'
    },
    {
        firstName: 'Michael',
        lastName: 'Herman',
        role: 'Lead Instructor'
    },
    {
        firstName: 'Robert',
        lastName: 'Hajek',
        role: 'Full Stack Resident'
    },
    {
        firstName: 'Wes',
        lastName: 'Reid',
        role: 'Instructor'
    },
    {
        firstName: 'Zach',
        lastName: 'Klabunde',
        role: 'Instructor'
    }
];
const hello = "hello"
const hi = users.map[i => {
    (hello + `${firstName}`);
    return hi;
}];
console.log(hi);
// Using the map() method, say hello to the users using only their firstname(ie.“Hello Bradley”, “Hello Chloe” ect…)
// Using the filter() method, congratulate only the Full Stack Residents.

// const congrats = users.filter(i =>(i['role']==='Full Stack Resident')? item["firstname"] {
//     `hello + ${firstname}`;
// });
// console.log(hi);