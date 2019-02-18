const mongoose = require('mongoose');

const listingSchema = mongoose.Schema({
  name: String,
  address: String,
  imageUrl: String,
  created: Date,
  modified: Date
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;
