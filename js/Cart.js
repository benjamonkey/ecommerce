var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

var cartSchema = new Schema({
  products: [{
    item: {type: String, ref: "Product", required: true},
    quantity: {type: Number}
}]
});

module.exports = cartSchema;
