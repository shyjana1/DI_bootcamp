const exp = require('express');
const bp = require('body-parser');
const fs = require('fs');

const app = exp();

app.use(bp.urlencoded({extended:false}));
app.use(bp.json());

app.use('/',exp.static(__dirname+'/public'));


app.post('/addUser', (req,res)=>{
    console.log(req.body);
    let userArr =[]
    
    const file = fs.readFileSync('./users');
    let fileStr = file.toString();
    console.log(fileStr);
    userArr = JSON.parse(fileStr)

    console.log(userArr);
    // const userJson = fs.readFileSync('/./')
    // let userJsonString = userJson.toString();

    userArr.push(req.body)
    fs.writeFile('./users', JSON.stringify(userArr), err=>{
        if(err){
            console.log(err);
        }
    })
    res.send({message:'ok'})
})

// app.listen(5000);  
app.set('port',5000);  // here are other ways 
app.listen(app.get('port'),()=>{
    console.log(`App started at port ${app.get('port')}`);
})


// 5. Add an name input and a button to your html file
// 6. Send the data (the name from the input) to the server with POST method
// 7. console log it in the server side
// 8. response with a {message: 'ok'}
// 7. Save all names as a JSON file in your sever - use fs

// don't use append use write
//create a js file in public.
// add input and button to html in public folder
// 