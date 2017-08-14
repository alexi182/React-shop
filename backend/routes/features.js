var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Features = mongoose.model('Features');

router.get('/', function (request, response, next) {
   Features.find({}, function (err, features) {
      if (err) {
         return next(err);
      }
      response.json(features);
   });
});

module.exports = router;