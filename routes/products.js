var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Product = require('../models/Product.js');

router.get('/', function (req, res, next) {
    Product.find((error, products) => {
        if (error) {
            return next(error);
        }
        res.json(products);
    });
});

router.get('/:id', function (req, res, next) {
    Product.findById(req.params.id, function (error, product) {
        if (error) {
            return next(error);
        }
        res.json(product);
    });
});

router.post('/', function (req, res, next) {
    Product.create(req.body, function (error, product) {
        if (error) {
            return next(error);
        }
        res.json(product);
    });
});

router.put('/:id', function (req, res, next) {
    Product.findByIdAndRemove(req.params.id, req.body, function (error, product) {
        if (error) {
            return next(error);
        }
        res.json(product);
    });
});

router.delete('/:id', function (req, res, next) {
    Product.findByIdAndRemove(req.params.id, req.body, function (error, product) {
        if (error) {
            return next(error);
        }
        res.json(product);
    });
});

module.exports = router;