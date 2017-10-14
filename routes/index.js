var express = require('express');
var router = express.Router();
var csrf = require('csurf');

var Product = require('../models/products');



/* GET home page. */
router.get('/', function(req, res, next) {
  Product.find((err, docs)=>{
    var productChunks = [];
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i += chunkSize)
    {
      productChunks.push(docs.slice(i,i+chunkSize));
    }
    res.render('shop/index', { title: 'Shopping Cart', products: productChunks });    
  });
});


module.exports = router;
