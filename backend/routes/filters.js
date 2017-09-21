var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Filters = mongoose.model('Filters');

router.get('/:productType', function (request, response, next) {
   var productType = request.params.productType;
   Filters.findOne({productType:productType}, function (err, filter) {
      if (err) {
         return next(err);
      }
      response.json(filter);
   });
});

module.exports = router;