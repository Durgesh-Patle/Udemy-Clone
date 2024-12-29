let express = require('express');
let router = express.Router();
let { protect, Role } = require('../middlewares/roleCheck');
const User = require('../model/User');

router.get('/users', protect, Role('Admin'), async (req, res) => {
    let users = await User.find();
    let studentUsers = users.filter(user => user.role === 'Student');

    res.send({ students: studentUsers });
});

module.exports = router;
