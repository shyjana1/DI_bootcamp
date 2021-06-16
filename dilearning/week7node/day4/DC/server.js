const exp = require('express');
const cors = require('cors')
const bp = require('body-parser')
// const Client = require('pg').Client
const knex = require('knex')
const path = require('path');
const fs = require('fs')

const app = exp()

const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'admin',
        database: 'node_daily'
    }
})
app.use(cors());
app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());
app.use('/static', exp.static('public'))

const sendRegisterDataToDb = async({lname,fname,email,password,username}) => {
    // insert the new information into the db
    return db("users").insert({'lname':lname,'fname':fname,'email':email,'password':password, 'username': username})
}
const checkuser = (email) => {//checking the email that is inserted matches the same email from the db
    return db.select('password','fname','id').from('users').whereRaw('email LIKE ?', email)
}

app.route('/register')
.get((res,req)=>{
    console.log("get register");
    let newList = [];
    const listJson= fs.readFileSync('./public/register.txt')
    console.log(listJson);
})
.post((req,res)=>{
    console.log("post register");
    console.log(req.body);
    sendRegisterDataToDb(req.body)
    checkuser(req.body.email)
    console.log(req.body.email)
    .then(data => {
            if (data[0].password === req.body.password){
            let response = (true)
        res.send(response)

        } else {
            let response = false
        res.send(response)

        }

    }) 
    // console.  log(data[0]);
})


app.listen(5500)

