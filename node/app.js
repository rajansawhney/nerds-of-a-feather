const express = require('express');

const app = express();

const port = 3000 || process.env.port;

app.get('/', (req, res, next) => res.send({ msg: 'Hello World'}));

app.listen(port, () => console.log(`App Listening on port: ${port}`));