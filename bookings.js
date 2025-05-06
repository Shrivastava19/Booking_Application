
const express = require('express');
const bookingsController = require('../controllers/bookingsController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, bookingsController.getMyBookings);

module.exports = router;
