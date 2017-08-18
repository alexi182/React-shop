var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Devices = mongoose.model('Device');

router.get('/', function (request, response, next) {
   Devices.find({}, function (err, device) {
      if (err) {
         return next(err);
      }
      response.json(device);
   });
});

router.get('/find/:id', function (request, response, next) {
   var id = request.params.id;
   Devices.find({id:id}, function (err, device) {
      if (err) {
         return next(err);
      }
      response.json(device);
   });
});

module.exports = router;