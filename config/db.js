var mongoose = require('mongoose');
var express = require('express');

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGO_DB)
  .then(() =>  console.log('Connection succesful to environment ' + process.env.ENV))
  .catch((err) => console.error(err));