const fs = require('fs');

// read
// fs.readFile('./data.txt', (error, data) => {
//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log(JSON.parse(data.toString())[0].name);
//     }
// })
// console.log('after reading from a file');

// const data = fs.readFileSync('./data.txt')
// console.log(data.toString());
// console.log('after reading from a file');

// let data = {name: 'daniel'};
// fs.appendFile('./data.txt', JSON.stringify(data), (error) => {
//     if(error){
//         console.log(error);
//     }
// })

// write (overwrites, not appends)

let data = 'lorom epsome dulure'
// fs.writeFile('./data',data,err => {
//     if(err){
//         console.log(err);
//     }
// })

// delete - deletes a file from a folder

// fs.unlink('./one', err=> {
//     if(err){
//         console.log(err);
//     }
// })

// copy

fs.copyFile('./data','./data1',err =>{
    if(err){
        console.log(err);
    }
})