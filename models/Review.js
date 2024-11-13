const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  bookTitle: { type: String, required: true },
  author: { type: String, required: true },
  reviewContent: { type: String, required: true },
  reviewerName: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5 }  // Optional field
});

module.exports = mongoose.model('reviews', reviewSchema);
