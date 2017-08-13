var mongoose = require('mongoose');
var deviceSchema = new mongoose.Schema({
   _id: mongoose.Schema.Types.ObjectId,
   type: {
      type: String,
      required: true
   },
   featuresId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'features'
   },
   id: {
      type: String,
      required: true
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
      type: String,
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
});

mongoose.model('Device', deviceSchema, 'devices');