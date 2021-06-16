const fs = require('fs')
fs.readFile('./steps.txt', (err, data) => {

    let count = 0;

    if (err) {
        console.log(err);
    }
    else {
        for (i=0; i<data.toString().length; i++) {
            
            if(data.toString()[i] === '>'){
                count++
            }
            else if(data.toString()[i] === '<'){
                count--
            }
            if(count === -1){
            console.log(i)
            break;
            }
        }
        console.log(count);
    }
})