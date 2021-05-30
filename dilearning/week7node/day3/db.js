const knex = require("knex");

const db = knex ({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'admin',
      database : 'dvdrental'
    }
});
  
db('country')
.where({'country': 'Javascript3'})
// .update({'country': 'Isr'})
// .insert([
//     {'country': 'Javascript1'},
//     {'country': 'Javascript2'},
//     {'country': 'Javascript3'},
// ])
// .del()
.returning('*')
.then(data =>{
console.log(data);

})
.catch(err =>{
    console.log(err);
})