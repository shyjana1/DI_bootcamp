
// 3. Create react App
// 4. Create a select box that will show all the countries
// from your node server

const exp = require('express')
const cors = require('cors')
const DB = require('./modules/db.js')
const app = exp()

app.use(cors())

 
app.get('/getCountries', (req, res) => {
    
  DB.getCountries()
  .then(countries =>{
    res.send(countries)
  })


  .catch(err => {
      res.send({message: err})
  })
})
 
app.listen(4000, ()=>{
    console.log('listening on port 4000');
})