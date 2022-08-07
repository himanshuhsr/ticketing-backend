const { newTicket, allTicket, tickets, markAsClosed, deleteTicket } = require('../controllers/Ticket');
const { verifyTokenAndAdmin, verifyToken, verifyTokenAuthorization } = require('../controllers/VerifyToken');

const router = require('express').Router();

router.post('/new', verifyTokenAndAdmin, newTicket);
router.get('/', verifyToken, allTicket);
router.get('/all', verifyToken, tickets);
router.post('/markAsClosed', verifyTokenAuthorization, markAsClosed);
router.post('/delete', verifyTokenAndAdmin, deleteTicket);

module.exports = router;
