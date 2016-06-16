var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const cartSchema = require("./Cart");

var orderSchema = new Schema({
  user: {type: String, ref: "User"},
  products: [cartSchema]
});

module.exports = mongoose.model('orderModel', orderSchema);
