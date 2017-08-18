var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Test = mongoose.model('Test');

router.get('/', function (request, response, next) {
   Test.find({}, function (err, test) {
      if (err) {
         return next(err);
      }
      response.json(test);
   });
});

module.exports = router;