let express = require('express');
let router = express.Router();
const Course = require('../model/courseModel');
let { Role, protect } = require('../middlewares/roleCheck');
const User = require('../model/User');
let { sendEmail } = require('../utils/sendEmail');
// let roleCheack = require('../middlewares/roleCheck')

router.post('/add-course', Role('Admin'), protect, async (req, res) => {
    let course = req.body;
    let newCourse = new Course({
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

    const users = await User.find();
    // console.log(users, "Userrrrrrr");

    const emailList = users
        .map((user) => user.Email)
        .filter((email) => email);


    // console.log(emailList, "EmailList");

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
        `

    for (const Email of emailList) {
        // console.log(subject, text, "Subject Or Text  ");

        await sendEmail(Email, subject, text);
    }

    res.status(201).json({ message: 'Course added successfully and emails sent.' });
});


module.exports = router;

router.get('/get-course', async (req, res) => {
    const getCourse = await Course.find();
    res.send(getCourse);
})

// router.post('/course', roleCheck('Admin'), (req, res) => {
//     res.send('Course added successfully.');
// });