const express = require('express');
const router = express.router;

const employeesController  = require('../controllers/employees')

router.get('/', (req, res) => {
  res.send('getting employees...');
})
router.get('/:id', (req, res) => {
  res.send('getting employees...');
})
router.get('/firstname/:first_name', (req, res) => {
  res.send('getting employees...');
})
module.exports = router;