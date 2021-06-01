const knex = require('knex');
const DB = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        port: '5432',
        user: 'postgres',
        password: 'admin',
        database: 'dvdrental'
    }
})

const getCountries = () =>{
    return DB.select('*').from('country')
}
getCountries()
.then(data =>{
    console.log(data);
})
module.exports ={
    getCountries,
}