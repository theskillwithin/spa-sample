'use strict';

const express = require('express');
const app     = express();
const path    = require('path');
const render  = require('./src/server/render');

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res, next) => {
    render(req, res);
});

app.listen(8080, () => {
    console.log('Listening on port 8080 ...');
});
