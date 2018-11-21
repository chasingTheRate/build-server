const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 7870;
const v1Routes = require('./v1/routes');

app.use(express.json());

app.use('/api/v1', v1Routes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))