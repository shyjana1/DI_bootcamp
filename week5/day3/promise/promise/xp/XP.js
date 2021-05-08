// Exercise 1:
// Write a function compareToTen that takes a number
// as an argument and returns a Promise that tests
// if the value is less than or greater than the value 10.

// const compareToTen = (a) => {
//     let promiseFunction = new Promise((resolve, reject) => {

//         if (a > 10) {
//             resolve("greater than ten");
//         } else {
//             reject("less than ten");
//         }
//     })
//     return promiseFunction;
// }

// compareToTen(60)
//     .then(data => {
//         console.log('resolve', data);
//     })
//     .catch(err => {
//         console.log('reject', err);
//     })


// exercise 2
// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('success')
//     }, 4000)
// })
// p.then(res => {
//         console.log(res)
//     })
//     .catch(reject => {
//         console.log('oops, something went wrong');
//     })


// exercise 3
// const p = Promise.resolve(3).then(res => {
//     console.log(res)
// })

// Promise.reject('boo').then(rej => {
//     console.log(rej);
// })


async function simpleAsync1() {
    return 1;
}
simpleAsync1().then(data => {
    console.log(data);
})

const simpleAsync2 = async () => {
    return 1
}
simpleAsync2().then(data => {
    console.log(data);
})


async function convert fetch("https://swapi.dev/api/starships/9/")
    .then(response => response.json())
    .then(console.log);