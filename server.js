const express = require('express')
const app = express()
const port = 7870

app.get('/', (req, res) => res.send('Hello World!'))
app.post('/', (req, res) => {
    console.log('Hi From GitHub')
    console.log(req);
    res.sendStatus(200);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))