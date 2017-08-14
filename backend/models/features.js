var mongoose = require('mongoose');
var featuresSchema = new mongoose.Schema({
   _id: mongoose.Schema.Types.ObjectId,
   type: {
      type: String,
   },
   diag: {
      type: Number,
   },
   wifi: {
      type: String,
   },
   screen: {
      type: String,
   },
   garanty: {
      type: String,
   },
   ram: {
      type: String,
   },
   sim: {
      type: Number,
   },
   accum: {
      type: String,
   },
   color: [{
      id: Number,
      name: String
   }]
});

mongoose.model('Features', featuresSchema, 'features');