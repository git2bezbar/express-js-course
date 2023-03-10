const express = require('express');
const router = express.Router();

router.route('/')
  .get(function(req, res) {
  res.send('List products');
})
  .post(function(req, res) {
  res.send('Create product');
});

router.route('/:id')
  .get(function(req, res) {
  res.send('Read product');
})
  .put(function(req, res) {
  res.send('Update product');
})
  .delete(function(req, res) {
  res.send('Delete product');
});

module.exports = router;