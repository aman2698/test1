const express = require('express');
const {
  add,
  get
} = require('../controllers/contactus');

const router = express.Router();

router.post('/add', add);
router.get('/get', get);
module.exports = router;