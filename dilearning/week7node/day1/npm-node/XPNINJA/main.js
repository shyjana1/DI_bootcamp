const { address } = require('faker');
const faker = require('faker')
// console.log(faker.name.findName());
const prompt = require('prompt')
// for example:
// let randomName = faker.name.findName(); // Rowan Nikolaus
//     let randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
//     let randomCard = faker.helpers.createCard(); // random contact card containing many properties
let users =[];
const allUsers = (name,address,country)=>{
    // for(i=0; i<6; i++){
        users.push({
            name: name,
            address_street: address,
            country: country
        })
        console.log(users);
    
}

prompt.start();
prompt.get(['name','address','country'], function (err, result) {
        if (err) { return onErr(err); }
        console.log(`your name is:${result.name}.`);
        console.log(`your address is:${result.address_street}.`);
        console.log(`your are from:${result.country}.`);
        // console.log('your age is:' + result.age);
        allUsers(result.name,result.address,result.country)
    });
    
    function onErr(err) {
        console.log(err);
        return 1;
    }
