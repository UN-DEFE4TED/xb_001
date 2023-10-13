const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('./public'))

const router = require('./router/router')

app.use('/', router)

module.exports = app;