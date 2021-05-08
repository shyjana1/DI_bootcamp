// async function simpleAsync1() {
//     return 1;
// }
// simpleAsync1().then(data => {
//     console.log(data);
// })

// const simpleAsync2 = async () => {
//     return 1
// }
// simpleAsync2().then(data => {
//     console.log(data);
// })

// exercise 1
// let c = (async function () {
//         try {
//             return await fetch("https://swapi.dev/api/starships/9/")
//         } catch {
//             console.log("error");
//         }
//     })()
//     .then(data => data.json())
//     .then(data => (console.log(data)));

// exercise 2:
// result:
//  calling,
// waiting two seconds...  resolved