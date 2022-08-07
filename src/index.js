const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/config');
const morgan = require('morgan');
var fs = require('fs');
var path = require('path');

// Database connection
mongoose
    .connect(config.mongo.url)
    .then(() => console.log('DB Connection Successful!'))
    .catch((err) => {
        console.log(err);
    });

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

// setup the logger
app.use(morgan('combined', { stream: accessLogStream }));

app.use(express.json());

app.get('/', function (req, res) {
    res.send('hello, world!');
});

app.listen(config.server.port, () => {
    console.log('Backend Server is running!');
});
