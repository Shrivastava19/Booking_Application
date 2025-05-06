
const express = require('express');
const activitiesController = require('../controllers/activitiesController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();
router.get('/', activitiesController.listActivities);

router.post('/:id/book', authMiddleware, activitiesController.bookActivity);

module.exports = router;
