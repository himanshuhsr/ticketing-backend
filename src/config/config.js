const dotenv = require('dotenv');
dotenv.config();

const MONGO_URL = process.env.MONGO_URL;
const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 2005;

module.exports = {
    mongo: {
        url: MONGO_URL
    },
    server: {
        port: SERVER_PORT
    }
};
