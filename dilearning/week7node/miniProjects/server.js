const exp = require('express');
const bp = require('body-parser');
const cors = require('cors')
const path = require('path');
// const fs = require('fs');

const directories = path.dirname('/public/user.txt')
app.use('/',exp.static(__dirname+'/public'));
app.use(cors())
const app = exp()
console.log(directories);
app.use(bp.urlencoded({extended: false}))
app.use(bp.json())

app.use(function(req, res) {
    res.setHeader('Content-Type', 'text/plain')
    res.write(``)
    res.end(JSON.stringify(req.body, null, 2))
})


// app.get('/', function(req,res) {
//     res.send('Hello from Shooping list')
// })

app.post('/', function(req,res) {

        res.send('Content-Type', 'text/plain')
        res.write('you posted:\n')
        res.end(JSON.stringify(req.body, null, 2))
})

app.listen(5000)

