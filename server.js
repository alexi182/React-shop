var path = require('path');
var express = require('express');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

require('./backend/models/features');
require('./backend/models/device'); //подключение моделей БД

var app = express(); //конструктор приложения на express
var deviceRoutes = require('./backend/routes/device');
var featuresRoutes = require('./backend/routes/features');

mongoose.connect('mongodb://localhost:27017/products');

app.set('view engine', 'html'); //настройка view движка

app.use(function (req, res, next) { //middleware для настроки CORS запросов
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "X-Requested-With");

   next();
}) ;

app.use(express.static(__dirname + '/public'));
app.use(logger('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: false
}));
app.use(cookieParser());
//app.use(favicon(__dirname + '/public/img/favicon.ico'));

app.use('/api/products', deviceRoutes);
app.use('/api/features', featuresRoutes);

app.use(function (req, res, next) {
   var err = new Error('Not Found');
   err.status = 404;
   next(err);
});

app.use(function (err, req, res, next) {
   res.status(err.status || 500);
   res.json({
      message: err.message,
      error: err
   });
});

app.listen(8085, function () { //запуск приложения на порте 8081
   console.log('Server listening on port 8085');
});