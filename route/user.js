const express = require('express');
const {
  register,
  login,
  logout,
} = require('../controllers/user');

const router = express.Router();

router.post('/register', register);

module.exports = router;