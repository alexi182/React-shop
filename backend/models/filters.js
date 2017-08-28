var mongoose = require('mongoose');
var filtersSchema = new mongoose.Schema({
   _id: mongoose.Schema.Types.ObjectId,
   type: {
      type: String,
   },
   features: [{
      name: String,
      values: [String],
      display: String
   }]
});

mongoose.model('Filters', filtersSchema, 'filters');