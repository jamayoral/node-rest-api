
var mongoose = require('mongoose');

var CategorySchema = new mongoose.Schema({
  cat_name: String,
});

module.exports = CategorySchema;