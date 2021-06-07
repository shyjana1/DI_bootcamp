const exp = require('express');
const app = exp();
const fs = require('fs')
const bp = require('body-parser')

app.use(exp.static(__dirname + "/public"));


app.get('/aboutMe/:hobby', (req, res) => {
    //check if the parameter retrieved is a number
    if (isNaN || isSrting(req.hobby)) {
        res.status(400).send('Bad request!') //error handler
    } else {
        console.log("In--aboutMe/:hobby----- ", req.params)
        res.send(`Tutorial about ${req.hobby}!`)
    }
})

app.get('/pic', (req, res) => {
    console.log("-----In the pic-----");
    res.send('<img src="tlv.jpg"/>');
});

app.listen(8000, () => console.log('Example app listening on port 8000!'));
