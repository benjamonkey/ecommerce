var mongoose = require('mongoose');


var ObjectId = mongoose.Schema.Types.ObjectId;

var productsSchema = new mongoose.Schema({
  Title: {
    type: String,
    unique: true,
    required: true,
    index: true
  },
  Description: {
    type: String,
    required: true
  },
  Price: {
    type: Number,
    required: true,
    min: 0
  }
});

module.exports = mongoose.model('Product', productsSchema);
