var mongoose = require('mongoose');

var GuestListSchema = new mongoose.Schema({
  name: String,
  qty: Number
});

module.exports = mongoose.model('GuestList', GuestListSchema, 'guestList');
