// structure for building a server:
const exp = require('express');
const bp = require('body-parser')
const fs = require('fs');
const app = exp();
const cors = require('cors');
app.use('/',exp.static(__dirname+'/public'))
// static way to do it:
// app.listen(5000);
// example: server listens to port 5000. put the index.html inside a public folder
// creating a middleware: 
app.use((req, res, next) =>{
    res.header('Access-control-Allow-Origin', '*');
    res.header('Access-control-Allow-Headers', '*');
    next();
})


app.use(cors());
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

app.get('/showUsers', (req, res) =>{
    let userArr = [];
    const file = fs.readFileSync('./Users.txt')
    let fileString = file.toString()
    console.log(fileString);
    userArr = JSON.parse(fileString)
    res.send(userArr)
})



app.get('/search/:id', (req, res) =>{
    // console.log(req.params);
    res.send({message: 'ok2'})
    const file = fs.readFileSync('./Users.txt')
    let fileString = file.toString()
    console.log(fileString);
    userArr = JSON.parse(fileString)

    let filter = arr.fukter(item =>{
        return item.user === req.params.id
    })
    if (filter.length > 0){
    res.send({message: 'exist'})
}
    console.log({message: 'not exist'});

})
//   app.get('/addUser', (req, res) =>{
//     console.log(req.body);
//   })