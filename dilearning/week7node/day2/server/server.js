// const http = require('http');

// // server can only have one request and one response
// const server = http.createServer((req,res) => {
//     // console.log(url);
//     // res.setHeader('Content-Type', 'text/html');
//     res.setHeader('Content-Type', 'application/json');
//     let user = {
//         name: 'Gavin'
//     }
//     res.end(JSON.stringify(user.name))
// })

// server.listen(3000);

// creating an express server

// const exp = require('express');

// const app = exp();

// app.use('/',exp.static(__dirname+'/public'))

// app.get('/login', (req, res) => {
//    console.log(req.query.username, req.query.password);
//     res.send('login get')

// })

// app.listen(3000);

// const bp = require('body-parser')

const exp = require('express');

const app = exp();

// // parse application/x-www-form-urlencoded
// app.use(bp.urlencoded({ extended: false }))
// // parse application/json
// app.use(bp.json())

// app.route('/login')
//     .get((req,res)=>{
//         console.log(req.query);
//             res.send({message: 'OK'})
//     })
//     .post((req,res)=>{
//         console.log(req.body);
//         res.send('login post')
//     });


app.use('/',exp.static(__dirname+'/public'))

// restful api
app.get ('/user/:id', (req,res)=>{
    res.send('heelo user id:'+ req.params.id)
})
// app.post('/login', (req, res) => {
//    console.log(req.body);
//     res.send('login post')

// })

app.listen(3000);