let express = require('express');
let router = express.Router();
let { protect, Role } = require('../middlewares/roleCheck');
const User = require('../model/User');

router.get('/users', protect, Role('Admin'), async (req, res) => {
    let users = await User.find();
    let studentUsers = users.filter(user => user.role === 'Student');
    // let InstructorUsers = users.filter(user => user.role === 'Instructors');

    res.status(200).json({ students: studentUsers });
});

module.exports = router;
