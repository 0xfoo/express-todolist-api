var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('get users');
});
router.get('/:id', function(req, res, next) {
  res.send('get user');
});
router.post('/', function(req, res, next) {
  res.send('add user');
});
router.put('/', function(req, res, next) {
  res.send('update user');
});
router.delete('/', function(req, res, next) {
  res.send('delet user');
});

module.exports = router;
