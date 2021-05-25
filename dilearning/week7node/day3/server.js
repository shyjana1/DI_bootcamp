// structure for building a server:
const exp = require('express');
const bp = require('body-parser')
const fs = require('fs');
const app = exp();

app.use('/',exp.static(__dirname+'/public'))
// static way to do it:
// app.listen(5000);
// example: server listens to port 5000. put the index.html inside a public folder


// dynamic way to do it:
app.set('port', 5050);
app.listen(app.get('port'), ()=>{
    console.log(`app started at port ${app.get('port')}`);
})
// meaning setting an "attribute" that we call port and then we listen to port 5000, but making it dynamic

// whenever we use post, we need to body parser: always the same syntax
app.use(bp.urlencoded({ extended: false }))
app.use(bp.json())
// call the post with a message: ok
app.post('/addUser', (req, res) =>{
    console.log(req.body);
    let userArr = [];
    const file = fs.readFileSync('./Users.txt')
    let fileString = file.toString()
    console.log(fileString);
    userArr = JSON.parse(fileString)
    console.log(userArr)
    userArr.push(req.body)
    fs.writeFile('./Users.txt', JSON.stringify(userArr), (error) => {
    
        if(error){
            console.log(error);
        }
    res.send({message: 'ok'})
    })
  })

app.get('/showUser', (req, res) =>{
    let userArr = [];
    const file = fs.readFileSync('./showUser')
    let fileString = file.toString()
    console.log(fileString);
    userArr = JSON.parse(fileString)
    res.send(userArr)
})

//   app.get('/addUser', (req, res) =>{
//     console.log(req.body);
//   })