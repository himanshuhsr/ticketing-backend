const dotenv = require('dotenv');
dotenv.config();

const MONGO_URL = process.env.MONGO_URL;
const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 2005;
const JWT_SECRET = process.env.JWT_SECRET;

module.exports = {
    mongo: {
        url: MONGO_URL
    },
    server: {
        port: SERVER_PORT
    },
    jwt: {
        secret: JWT_SECRET
    }
};
