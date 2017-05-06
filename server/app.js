'use strict';

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const compression = require('compression');
const authenticator  = require('./controller/authenticator');
const app = express();

app.use(compression());
app.use(express.static(path.resolve(__dirname, '..', 'build')));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.post('/login/authenticate', authenticator.authenticate);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});


module.exports = app;
