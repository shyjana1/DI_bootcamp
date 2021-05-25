
// const exp = require('express');
// const app = express();

// app.get('/',)
// const server = http.createServer((req,res) => {
//     // console.log(url);
//     // res.setHeader('Content-Type', 'text/html');
//     res.setHeader('Content-Type', 'application/json');
//     res.end(JSON.stringify(user))
// })
// server.listen(3000);
// exercise 1
// const user = {
//     firstName: 'John',
//     lastName: 'Doe'
//     }

// console.log('hello');

const exp = require('express');

const app = exp();

// app.use('/',exp.static(__dirname+'/public'))

// app.get('/', (req, res) => {

//     res.send(user)
// })
app.listen(3000);
// console.log(user);

// exercise 2: 
const rootid = {
    id: '1234'
}
app.get('/:id', (req, res) => {
    res.send(rootid)
})

console.log(rootid);

// exercise