const gameInfo = [{
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
    },
    {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"]
    },
    {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"]
    },
    {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"]
    },
];

// let names = [];
// gameInfo.forEach(index => names.push(index.username + "!"));

// console.log(names);

let bigger = [];
gameInfo.forEach(index => bigger.push(index.score >= 5))

console.log(bigger);
// Create an array using forEach that contains the usernames of all players with a score bigger than 5.
// Tip: Use the ternary operator
// Find and display the total score of the users.

let arr = [1, 3];
let arr1 = [];
arr.forEach((item, index, newArr) => {
    let str = 'asdhk'
    newArr[index] =
})