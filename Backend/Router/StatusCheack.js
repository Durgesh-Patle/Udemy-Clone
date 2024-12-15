let express = require('express');
let router = express.Router();
let Course = require('../model/courseModel');
let roleCheck = require('../middlewares/roleCheck');

// Approved Function.
const approveCourse = async (req, res) => {
    const { _id } = req.body;
    // console.log(_id);

    const course = await Course.findById(_id);
    // console.log(course);

    if (!course) {
        return res.send('Course Not found!');
    }
    course.status = "Approved";
    await course.save();
    res.send("Course Approved!");
};

// Reject Function.
const rejectCourse = async (req, res) => {
    const { _id } = req.body;
    // console.log(_id);

    const course = await Course.findById(_id);
    // console.log(course);

    if (!course) {
        return res.send('Course Not found!');
    }
    course.status = "Rejected";
    course.reason = "Course is Froud !!"
    await course.save();
    res.send({ msg: "Course Rejected!", reson: "Course is Froud !!" });
};

router.post('/course-status', roleCheck(['Admin']), async (req, res) => {
    let { action, _id } = req.body;

    if (!action || !_id) {
        return res.send("Invalid Request !! ");
    }

    if (action == "Approved") {
        return await approveCourse(req, res);
    } else if (action == "Rejected") {
        return await rejectCourse(req, res);
    } else {
        return res.send("Invalid action!!");
    }
});

module.exports = router;
