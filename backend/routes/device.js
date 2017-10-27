var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Devices = mongoose.model('Device'); // mongoose превратит Devices.find в db.Devices.find - знать к какой таблице данных обратится к серверу, т.е. преобразует всё в запрос
// var Features = mongoose.model('Features');

router.get('/', function (request, response, next) {
   Devices.find({}, function (err, devices) {  //ошибка и результат выполнения
      if (err) { //если ошибка, то вызвать след. обработчик роута
         return next(err);
      }
      // var q = devices.map(function(device){
      //        return new Promise(function (resolve, reject) {
      //           Features.find({
      //                    _id: device.featuresId
      //               },
      //               function (err,features) {
      //                  if(err) {
      //                     reject(err)
      //                  }
      //                  device.features = features;
      //                  resolve();
      //               }
      //           )
      //        })
      //     }
      // );
      // Promise.all(q).then(function () {
      response.json(devices);  // преобразуем наши devices в json и отдаём в качестве резалта
      // })
   });
});

router.get('/find/:id', function (request, response, next) {
   var id = request.params.id;
   console.log(id);
   Devices.findOne({id:id}, function (err, device) {
      if (err) { console.log(err);
         return next(err);
      }
      console.log(device);
      response.json(device);
   });
});

router.post('/filter', function (request, response, next) {
   var filter = request.body; // все переданные фильтры
   console.log(filter);

   //строим query или $and
   var $and = [];
   for (var x in filter) {
      var selected = filter[x];
      var name = selected.name;
      var filters = selected.filters;
      var q = {};

      if (!filters || !filters.length) {
         continue;
      }
      if (filters.length == 1) {

         q[name] = filters[0];
      } else {
         q['$or'] = [];
         filters.forEach(function (e, index) {
            var qq = {};
            qq[name] = e;
            q['$or'].push(qq);
         })
      }
      $and.push(q)
   }

   console.dir($and);

   Devices.find({'$and': $and}, function (err,devices) {
      if (err) { console.log(err);
         return next(err);
      }
      console.log(devices);
      response.json(devices);
   })
});

module.exports = router;