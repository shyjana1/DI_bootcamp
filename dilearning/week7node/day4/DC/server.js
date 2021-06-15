const exp = require('express');
const cors = require('cors')
const bp = require('body-parser')
const axios = require('axios')
const path = require('path');
const fs = require('fs')

const app = exp()

app.use(cors());
app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());
app.use('/static', exp.static('public'))

app.route('/register')
.get((res,req)=>{
    console.log("get register");
    let newList = [];
    const listJson= fs.readFileSync('./public/register.txt')
    console.log(listJson);
})



app.listen(5500)