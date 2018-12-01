const config = require('./config');
const express = require('express');
const app = express()

const port = config.port;

app.get('/', (req, res) => {
    console.log("get '/'");
    res.send('Hello World!')
});

app.post('/', (req, res) => {
    console.log('Hi From GitHub')
    console.log(req);
    res.sendStatus(200);
});

app.listen(port), () => {
    console.log(`Example app listening on port ${port}!`);
}