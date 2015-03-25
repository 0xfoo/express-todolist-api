var express = require('express');
var router = express.Router();

/* GET todos. */
router.get('/', function(req, res, next) {
  res.send('get todos');
});
router.post('/', function(req, res, next) {
  res.send('add todo');
});
router.put('/', function(req, res, next) {
  res.send('update todo');
});
router.delete('/', function(req, res, next) {
  res.send('delet todo');
});

module.exports = router;
