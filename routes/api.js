var express = require('express');
var router = express.Router();
var sizeOf = require('image-size');

/* GET API . */
router.get('/photoList', function(req, res, next) {

  var images = ['portfolio-1.jpg','portfolio-2.jpg','portfolio-3.jpg','portfolio-4.jpg'];
  var imagePath = 'public/images/';

  var items = [];
  images.forEach(function(item) { 
    var dimensions = sizeOf('public/images/' + item);
    items.push({
            src: '/images/' + item,
            w: dimensions.width,
            h: dimensions.height
            });
  });
  res.json(items); 
});

module.exports = router;
