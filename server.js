var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var Products = require('./js/products');
var orders = require('./js/Order');
var carts = require('./js/Cart');
var user = require('./js/User')



var app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/suh');

app.post('/api/products', function(req, res) {

  Products.create(req.body, function(err, savedProducts){
    if (err){
      res.status(500).json(err);
    }else {
      res.status(200).json(savedProducts);
    }

  });
    console.log('Posted dude');
});

app.get('/api/products', function(req, res) {

  Products.find(req.body, function(err, savedProducts){
    if (err){
      res.status(500).json(err);
    }else {
      res.status(200).json(savedProducts);
    }

  });
  console.log('GET products');
});

app.get('/api/products/:id', function(req, res) {

  Products.findById(req.params.id, function(err, products){
    if (err){
      res.status(500).json(err);
    }else {
      res.status(200).json(products);
    }

  });
    console.log('Got it by Id bro');
});


app.put('/api/products/:id', function(req, res) {

  Products.findOneAndUpdate(req.params.id, req.body, function(err, products){
    if (err){
      res.status(500).json(err);
    }else {
      res.status(200).json(products);
    }

  });
    console.log('Updated Bro');
});

app.delete('/api/products/:id', function(req, res) {

  Products.findOneAndRemove(req.params.id, req.body, function(err, products){
    if (err){
      res.status(500).json(err);
    }else {
      res.status(200).json(products);
    }

  });
    console.log('Deleted breh');
});

var port = 3000;
app.listen(port, function() {
  console.log("Started server on port", port);
});
