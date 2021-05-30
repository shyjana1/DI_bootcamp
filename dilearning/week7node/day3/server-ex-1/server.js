const exp = require('express');
const bp = require('body-parser');
const fs = require('fs');

const app = exp();

app.use(bp.urlencoded({extended:false}));
app.use(bp.json());

app.use('/',exp.static(__dirname +'/public'));


app.get('/showUsers', (req,res)=> {
    let userArr = [];
    const file = fs.readFileSync('./users');
    let fileStr = file.toString();
    console.log(fileStr);
    userArr = JSON.parse(fileStr);
    res.send(userArr);
})



app.post('/addUser',(req,res)=>{
    console.log(req.body);
    let userArr = [];

    const file = fs.readFileSync('./users');
    let fileStr = file.toString();
    console.log(fileStr);
    userArr = JSON.parse(fileStr);

    console.log(userArr);

    userArr.push(req.body);

    fs.writeFile('./users', JSON.stringify(userArr), err=>{
      if(err){
        console.log(err);
      }
     })
    res.send({message:'ok'})
  })

// app.listen(5000);
app.set('port', 5000);
app.listen(app.get('port'), ()=>{
  console.log(`App started at port ${app.get('port')}`);
})
