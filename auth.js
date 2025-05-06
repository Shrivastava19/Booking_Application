
const express = require('express');
const { check } = require('express-validator');
const authController = require('../controllers/authController');

const router = express.Router();

router.post(
  '/register',
  [
    check('name',     'Name is required').notEmpty(),
    check('email',    'Valid email required').isEmail(),
    check('phone',    'Phone is required').notEmpty(),
    check('password', 'Password must be 6+ chars').isLength({ min: 6 })
  ],
  authController.register
);

router.post(
  '/login',
  [
    check('email', 'Valid email required').isEmail(),
    check('password', 'Password is required').exists()
  ],
  authController.login
);

module.exports = router;
