// const num = 2;

// const req = require('./script.js')

// req.exports = {
//     username: 'Delphine', 
// }

const u = require('./script.js')

u.users().then(res => console.log(res))