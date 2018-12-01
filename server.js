const config = require('./config');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const v1Routes = require('./v1/routes');

const port = config.port;

app.use(express.json());

app.use('/api/v1', v1Routes);

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