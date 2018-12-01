require('dotenv').config()
const express = require('express')
const app = express()
const port = 7880

app.get('/', (req, res) => res.send('Hello World!'))
app.post('/', (req, res) => {
    console.log('Hi From GitHub')
    console.log(req);
    res.sendStatus(200);
});

app.listen(process.env.PORT || 3001, () => console.log(`Example app listening on port ${process.env.PORT || 3001}!`))