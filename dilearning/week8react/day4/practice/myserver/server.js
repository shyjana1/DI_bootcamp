const exp = require('express')
const cors = require('cors')
const DB = require('./modules/db')


const app = exp()
app.use(cors())

app.get('/getCountries', (req, res) =>{
    DB.getCountries()
    .then(countries =>{
        res.send(countries)

    })
    .catch(err =>{
        console.log(err);
    })
})
app.get('/getCities/:id', (req, res) =>{
    DB.getCities(req.params.id)
    .then(cities =>{
        res.send(cities)

    })
    .catch(err =>{
        console.log(err);
    })
})

app.listen(4000, ()=>{
    console.log("listening to port 4000");
})