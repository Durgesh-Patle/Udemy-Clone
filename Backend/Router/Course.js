let express = require('express');
let router = express.Router();
const Course = require('../model/courseModel');
const User = require('../model/User');
let { sendEmail } = require('../utils/sendEmail');
let { protect, Role } = require('../middlewares/roleCheck');


router.post('/add-course', protect, Role('Admin'), async (req, res) => {
    try {
        const course = req.body;

        if (!course.title || !course.description || !course.category || !course.price) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const newCourse = new Course({
            title: course.title,
            description: course.description,
            category: course.category,
            price: course.price,
            level: course.level,
            language: course.language,
            status: course.status || 'Pending',
            videos: course.videos,
            resources: course.resources
        });

        await newCourse.save();

        // Fetch students' email addresses
        const users = await User.find({ role: 'Student' });
        const emailList = users.map(user => user.Email).filter(email => email);

        // Send email notifications
        const subject = `New Course Added: ${course.title}`;
        const text = `
            Hello,

            A new course titled "${course.title}" has been added to our platform.

            Category: ${course.category}
            Price: $${course.price}
            Level: ${course.level}
            Language: ${course.language}

            Check it out on our website!

            Regards,
            Udemy Online Classes
        `;

        for (const email of emailList) {
            await sendEmail(email, subject, text);
        }

        res.status(201).json({ message: 'Course added successfully and emails sent.' });
    } catch (error) {
        console.error('Error adding course:', error);
        res.status(500).json({ error: 'An error occurred while adding the course.' });
    }
});


router.get('/get-course', async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json(courses);
    } catch (error) {
        console.error('Error fetching courses:', error);
        res.status(500).json({ error: 'An error occurred while fetching courses.' });
    }
});

module.exports = router;
