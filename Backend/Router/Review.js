const express = require('express');
const Course = require('../model/courseModel');
const Review = require('../model/reviewModel');
const { protect, tokenCheack } = require('../middlewares/roleCheck');
const router = express.Router();

// router.post('/review', roleCheck(['Admin', 'Instructors', 'Student']), async (req, res) => {
router.post('/review', protect, tokenCheack, async (req, res) => {
    const { _id, rating, comment } = req.body;

    console.log(req.user._id, "user id");

    const course = await Course.findById(_id);
    if (!course) {
        return res.send('Course not found!');
    }

    const alreadyReviewed = await Review.findOne({
        course: _id,
        user: req.user._id,
    });

    if (alreadyReviewed) {
        return res.send('You have already reviewed this course');
    }

    const reviewCourse = new Review({
        course: _id,
        user: req.user._id,
        rating,
        comment,
    });

    res.send(reviewCourse)

    await reviewCourse.save();
    res.send('Course review added successfully!');
});

module.exports = router;
