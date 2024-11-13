const Review = require('../models/Review');

const getReviews = async (req, res) => {
  const reviews = await Review.find();
  res.json(reviews);
};

const createReview = async (req, res) => {
  const newReview = new Review(req.body);
  await newReview.save();
  res.json(newReview);
};

const deleteReview = async (req, res) => {
  await Review.findByIdAndDelete(req.params.id);
  res.json({ message: 'Review deleted' });
};

module.exports = {
    getReviews,
    createReview,
    deleteReview
}