const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/config');

// Database connection
mongoose
    .connect(config.mongo.url)
    .then(() => console.log('DB Connection Successful!'))
    .catch((err) => {
        console.log(err);
    });

app.use(express.json());

app.listen(config.server.port, () => {
    console.log('Backend Server is running!');
});
