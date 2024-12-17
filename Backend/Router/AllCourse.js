let express = require('express');
let router = express.Router();
let { protect, Role } = require('../middlewares/roleCheck');
const Course = require('../model/courseModel');

router.get('/all-course', async (req, res) => {
    let course = await Course.find();
    
    res.status(200).json({ course });
});

module.exports = router;
