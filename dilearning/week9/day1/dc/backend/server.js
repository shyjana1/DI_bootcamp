const exp = require('express')
const bp = require('body-parser');
const app = exp()
const cors = require('cors');
app.use(cors());
app.use(bp.urlencoded({ extended: false }))
app.use(bp.json())
app.get('/api/hello', (req, res) => {
    res.send({ 'data': 'Hello from express' })
})
app.post('/api/hello', (req, res) => {
    res.send({ 'post': 'Post to Server' })
})

app.listen(4000)
