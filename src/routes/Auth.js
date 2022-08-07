const { register } = require('../controllers/Auth');

const router = require('express').Router();

router.post('/new', register);

module.exports = router;
