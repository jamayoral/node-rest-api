var restful = require('node-restful');
var CategorySchema = require('../models/Category.js');

module.exports = function (app) {
    var Category = app.resource = restful.model('category', CategorySchema)
        .methods(['get', 'post', 'put', 'delete']);
    return Category;
}

