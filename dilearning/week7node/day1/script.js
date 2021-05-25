// let a =7
// let b =8
// console.log(a+b);

// for (let i = 0; i < 10; i++) {
    // console.log(i);
    
// }
// let obj = {
//     a:8,
//     name: "shy"
// }
// console.log(obj.name);

// let arr = ['string',9,true]
// arr.forEach((item,i)=>{
//     console.log(item);
// })

// let j = 'java'
// let s = 'script'

// console.log(j+s);


// we dont have window on the node, we write global instead, which has some of the functions for instance:
// setTimeout( ()=>{
    //     console.log("node is here");
// },5000)
// to exit, write process.exit()
// shows the path of your folder
// console.log(__dirname);

// in order to import from a different file we need to write require.
// if its in the same folder you can write "./" if its a one foler above, we can write "../"
// const a = require('axios')

// a.get('https://jsonplaceholder.typicode.com/users')
// .then(data => console.log(data.website));

const axios = require('axios');
const getUser = async() => {
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        return res.data;
    }catch(e) {
        console.log(e);
    }
}

module.exports = {
    users: getUser
}