const express = require('express');
const { getReviews, createReview, deleteReview } = require('../controllers/reviewController');
const router = express.Router();

router.get('/reviews', getReviews);
router.post('/reviews', createReview);
router.delete('/reviews/:id', deleteReview);

module.exports = router;
