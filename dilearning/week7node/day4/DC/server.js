const exp = require('express');
const cors = require('cors')
const bp = require('body-parser')
const Client = require('pg').Client
const path = require('path');
const fs = require('fs')

const app = exp()

const registerAndLogin = new Client({
    user: 'postgres',
    password: 'password369',
    host: 'localhost',
    client: 'pg',
    database: 'node_daily'
});


app.use(cors());
app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());
app.use('/static', exp.static('public'))

const sendRegisterDataToDb = async(data) => {
    try {
        await registerAndLogin.connect()
        console.log('connect')
        await registerAndLogin.query(`insert into  Register values ($1, $2, $3, $4, $5)`, [0, data.firstName, data.lastName, data.email, data.username, data.password])
        const result = await registerAndLogin.query('SELECT * FROM  users')
        console.table(result.rows)
    } catch (err) { err, 'at sendRegisterDataToDb' }
    finally {
        await registerAndLogin.end()
    }
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
})


app.listen(5500)

