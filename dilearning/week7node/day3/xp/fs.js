// exp 1

const fs = require('fs');

// exercise 1
// fs.readFile("./data.txt", (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     {
//         console.log(data.toString());
//     }
// })
// exercise 2+3
let data = 'buy milk '
let data2 = 'buy more milk '
let data3 = 'buy orange juice'
// fs.writeFile("./text.txt", data ,(err,data) => {
//     if(err) {
//      console.log(err);
//     }
    fs.appendFile('./text.txt', (data2, data3), (err,data) => {
        console.log(err);
    })
    console.log('new data');
// }); 
fs.unlink('./text.txt', err=> {
        if(err){
            console.log(err);
        }
        {console.log("deleted");}
    })