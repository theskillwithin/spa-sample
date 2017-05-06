'use strict';

const express = require('express');
const app     = express();
const path    = require('path');
const render  = require('./src/server/render');

const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res, next) => {
    render(req, res);
});

app.listen(port, () => {
    console.log(`Listening on port ${port} ...`);
});
