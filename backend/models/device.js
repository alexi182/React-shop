var mongoose = require('mongoose');
var deviceSchema = new mongoose.Schema({
   _id: mongoose.Schema.Types.ObjectId,
   id: {
      type: String,
      required: true
   },
   type: {
      type: String,
      required: true
   },
   featuresId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'features'
   },
   articul: {
      type: Number,
      required: true
   },
   name: {
      type: String,
      required: true
   },
   description: {
      type: String,
      required: true
   },
   fullDescription: {
      type: String
   },
   img: {
      src: String,
      alt: String,
      title: String
   },
   price: {
      prefix: String,
      value: Number,
      postfix: {
         type: String,
         default: 'руб.'
      }
   },
   color: [{
      id: Number,
      name: String
   }],
   features: [{
      id: Number,
      item: String,
      name: String
   }]
});

mongoose.model('Device', deviceSchema, 'devices');