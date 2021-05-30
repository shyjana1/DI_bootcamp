let fs = require('fs');
let newContent = "hello"
//APPEND FILE
fs.appendFile('hi.txt', 'hello' , function (err) {
    if (err) {
        console.error(err)
    }
});

fs.readFile('hi.txt', 'utf-8', function (err, data) {
    if (err) {
        console.error(err)
        return
    }

    console.log(data);
});

//DELETE FILE
let fs = require('fs');
fs.unlink('hi.txt', function (err) {
    console.log('write operation complete.');
});