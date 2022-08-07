const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/config');
const morgan = require('morgan');
var fs = require('fs');
var path = require('path');
var authRoutes = require('./routes/Auth');
var ticketRoutes = require('./routes/Ticket');
const dotenv = require('dotenv');
dotenv.config();

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

// Connect routes
app.use('/api/v1/users', authRoutes);
app.use('/api/v1/tickets', ticketRoutes);

app.listen(process.env.PORT || config.server.port, () => {
    console.log('Backend Server is running!');
});
