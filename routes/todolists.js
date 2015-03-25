var express = require('express');
var router = express.Router();

/* GET todos. */
router.get('/', function(req, res, next) {
  res.send('get todolists');
});
router.get('/:id', function(req, res, next) {
  res.send('get todolist');
});
router.post('/', function(req, res, next) {
  res.send('add todolist');
});
router.put('/', function(req, res, next) {
  res.send('update todolist');
});
router.delete('/', function(req, res, next) {
  res.send('delet todolist');
});

module.exports = router;
