let express = require('express');
let router = express.Router();
const Course = require('../model/courseModel');


router.post('/course', async (req, res) => {
    let course = req.body;
    // console.log(course);

    let newCourse = new Course({
        title: course.title,
        description: course.description,
        category: course.category,
        price: course.price,
        level: course.level,
        language: course.language,
        status: course.status,
        videos: course.videos,
        resources: course.resources
    })
    await newCourse.save();
    res.send('Succsessfully Course add');

})
router.get('/get-course', async (req, res) => {
    const { category } = req.body;
    const getCourse = await Course.findOne({ category });

    res.send({ course: getCourse });
})

module.exports = router;