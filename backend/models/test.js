var mongoose = require('mongoose');
var testSchema = new mongoose.Schema({
   _id: mongoose.Schema.Types.ObjectId,
   name: {
      type: String
   },
   age: {
      type: Number
   }
});

mongoose.model('Test', testSchema, 'test');