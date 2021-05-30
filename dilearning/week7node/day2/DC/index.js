const exp = require('express');
const bp = require('body-parser')
const app = exp();
app.use(exp.static(__dirname + "/public"));
// create application/x-www-form-urlencoded parser
app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());

app.get("/form", (req, res) => {
    console.log('get');
    res.send(req.query);
    res.send(req.text);
    res.send(req.email);
  
  });

app.get('/hobby', (req, res) => {
    console.log("hobby");
    res.send('About Page');
});
app.get('/pic', (req, res) => {
    console.log("pic");
    res.send('About Page');
});
app.post('/form', (req, res) => {
    console.log("for");
    res.send('About Page');
});




// 
// 

// app.get("/hobby/:hobby", (req, res) => {
//     res.send("cooking");
//   });
  
  
//   app.get("/pic/", (req, res) => {
//     console.log('get');
    
//   });
  
  
//   app.get("/form", (req, res) => {
//     console.log('get');
//     console.log(req.query);
//     console.log(req.text);
//     console.log(req.email);
  
//   });
  
  
//   app.post("/form", function (req, res) {
//     console.log(req.body);
//     res.send("form sent");
//   });
app.listen(3500);
