'use strict';

const express = require('express'),
  port = 8305;

let app = express();

app.use('/build', express.static('build'));
app.get('/', (req, res) => res.sendFile('index2.html', { root: __dirname }));

app.listen(port);

module.exports = app;
