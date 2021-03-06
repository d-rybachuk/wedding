var express = require('express');
var router = express.Router();
var upload = require('./upload')(router);
var mongoose = require('mongoose');
var GuestList = require('../models/guestList.js');

/* POST ticket page. */
router.get('/', function(req, res, next) {
  res.render('voting/index');
});

/* GET ticket page. */
router.get('/result', function(req, res, next) {
  res.render('voting/result');
});

/*
router.get('/:locale/:guest', function(req, res, next) {
  res.cookie('locale', req.params.locale);
  var guest = req.params.guest;
  if (guest){
    GuestList.findOne( { 'name': req.params.guest }, 'name qty', function (err, param) {
        if(!param) {
            res.render('indexGuest');
        }
        if (!err && param ) {
            res.render('index',  {pageData: { guest: res.__(param.name), amount: param.qty  } });
        } else {
            res.render('indexGuest');
        }
    });
  }else{
    res.render('indexGuest');
  }
});
*/

module.exports = router;
