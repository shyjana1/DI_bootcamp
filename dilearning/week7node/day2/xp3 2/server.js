
const express = require('express');
const app = express();
app = exp()


app.use(express.static(__dirname + "/public"));

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get("/hobby/:hobby", (req, res) => {
  res.send("cooking");
});


app.get("/pic/", (req, res) => {
  console.log('get');
  res.send(<img src="/about.jpg"></img>);
  
});


app.get("/form", (req, res) => {
  console.log('get');
  console.log(req.query);
  console.log(req.text);
  console.log(req.email);

});


app.post("/form", function (req, res) {
  console.log(req.body);
  res.send("form sent");
});

app.listen(7000);
