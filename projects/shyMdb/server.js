const exp = require('express')
const bp = require('body-parser')
const fs = require('fs')
const axios = require('axios')
const knex = require('knex');
app = exp()

const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'admin',
        database: 'imdb'
    }
})


const insertIfNotExistToDb = async (titleList) => {
    for (title of titleList){
        app.get('/search', async (req, res) => {
            // console.log(req.query.q);
            let titleList = await searchImdb(req.query.q)
            console.log('titleList');
            await insertIfNotExistToDb(titleList.data.d)
            console.log(titleList.data);
            // console.log(req.query.i);
            // let arr = [];
            // arr.push({imageUrl:data.data.d['0'].i.imageUrl})
            const checkIfExists = async(existedInput) => {
                res = await db.query("SELECT * FROM films WHERE title = '"+ existedInput +"'")
                if(res.length === 0){
                    console.log("existed");
                }else {
                    await insertIfNotExistToDb(existedInput)
                }
            }
            // res.send(titleList.data.d);
        })
        console.log('insert title'+ title.l);
        if (title.q == 'TV series'){
           await db('series').insert({'title':title.l})
        } 
        else if (title.q == 'feature'){
            await db('films').insert({'title':title.l})

        }
    }
    
}

// db.database(req.query.q)


const searchImdb = async (value)=>{
const options = {
  method: 'GET',
  url: 'https://imdb8.p.rapidapi.com/auto-complete',
  params: {q: value},
  headers: {
    'x-rapidapi-key': '87c669598emshedb61a9db614e58p1028abjsn229b82d49d29',
    'x-rapidapi-host': 'imdb8.p.rapidapi.com'
  }
};

let res = await axios.request(options)
return (res)
}
app.use('/',exp.static(__dirname + "/public"));

app.get('/search', async (req, res) => {
    // console.log(req.query.q);
    let titleList = await searchImdb(req.query.q)
    console.log('titleList');
    await insertIfNotExistToDb(titleList.data.d)
    console.log(titleList.data);
    console.log(req.query.i);
    // let arr = [];
    // arr.push({imageUrl:data.data.d['0'].i.imageUrl})
    res.send(titleList.data.d);
    

})
app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());
app.listen(8000);