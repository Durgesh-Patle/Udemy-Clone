let express = require('express');
let router = express.Router();
let Course = require('../model/courseModel');
let { Role } = require('../middlewares/roleCheck');

// Approved Function
const approveCourse = async (req, res) => {
    try {
        const { _id } = req.body;

        const course = await Course.findById(_id);
        if (!course) {
            return res.status(404).json({ error: 'Course not found' });
        }

        course.status = "Approved";
        await course.save();

        return res.status(200).json({ message: "Course Approved!" });
    } catch (error) {
        console.error("Error approving course:", error);
        return res.status(500).json({ error: "An error occurred while approving the course." });
    }
};

// Reject Function
const rejectCourse = async (req, res) => {
    try {
        const { _id, reason } = req.body;

        const course = await Course.findById(_id);
        if (!course) {
            return res.status(404).json({ error: 'Course not found' });
        }

        course.status = "Rejected";
        course.reason = reason || "No reason provided";
        await course.save();

        return res.status(200).json({ message: "Course Rejected!", reason: course.reason });
    } catch (error) {
        console.error("Error rejecting course:", error);
        return res.status(500).json({ error: "An error occurred while rejecting the course." });
    }
};

// Main Route
router.post('/course-status', Role('Admin'), async (req, res) => {
    try {
        const { action, _id, reason } = req.body;

        // Validate input
        if (!action || !_id) {
            return res.status(400).json({ error: "Invalid request. Missing action or _id." });
        }

        if (action === "Approved") {
            return await approveCourse(req, res);
        } else if (action === "Rejected") {
            return await rejectCourse(req, res);
        } else {
            return res.status(400).json({ error: "Invalid action. Must be 'Approved' or 'Rejected'." });
        }
    } catch (error) {
        console.error("Error handling course status request:", error);
        return res.status(500).json({ error: "An unexpected error occurred." });
    }
});

module.exports = router;
