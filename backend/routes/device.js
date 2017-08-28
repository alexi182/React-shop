var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Devices = mongoose.model('Device');
var Features = mongoose.model('Features');

router.get('/', function (request, response, next) {
   Devices.find({}, function (err, devices) {
      if (err) {
         return next(err);
      }
      var q = devices.map(function(device){
         return new Promise(function (resolve, reject) {
            Features.find({_id: device.featuresId}, function (err,features) {
               if(err) {
                  reject(err)
               }
               device.features = features;
               resolve();
            })
         })
      });
      Promise.all(q).then(function () {
         response.json(devices);
      })
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