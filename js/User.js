var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Cart = require('./Cart')

var userSchema = new Schema({
  Fname: {
    type: String,
    required: true
  },
  Lname: {
    type: String
  },
  orders: [
    {type: mongoose.Schema.Types.ObjectId, ref: 'Order'}
]
});


module.exports = mongoose.model('User', userSchema);
