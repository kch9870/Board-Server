var express = require('express');
var router = express.Router();

/* GET home page. test*/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express11' });
});

router.get('/test', function(req, res, next) {
  res.send(
    {
      test1: "test1",
      test2: "test2",
      test3: {
        test: "test",
        test1: "test"
      }
    });
});

module.exports = router;
