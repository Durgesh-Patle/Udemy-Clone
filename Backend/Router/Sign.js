// sign page
let express = require('express');
const User = require('../model/User');
let router = express.Router();
let bcypt= require("bcryptjs")

router.post('/sign', async (req, res) => {
    let user = req.body;
    // console.log(user);
    let data = await User.findOne({ Email: user.Email });

    if (data) {
        res.send('Acoount Alreadyy Bna huaa Haiiiiiiii');
    } else {
        let hashPass = await bcypt.hash(user.Password, 10);

        let dbUser = new User({
            fullName: user.fullName,
            Email: user.Email,
            Password: hashPass,
            role: user.role || 'Student'
        })
        await dbUser.save();
        res.send('Succsessfully Account Created')
    }
})

module.exports = router;