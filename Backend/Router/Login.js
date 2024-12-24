// Login Form.
let express = require('express');
let User = require('../model/User')
let router = express.Router();
let jwt = require('jsonwebtoken')
let bcypt = require("bcryptjs")

router.post('/login', async (req, res) => {
    let user = req.body;
    // console.log(user);
    let data = await User.findOne({ Email: user.Email });
    if (data) {
        // let validPass = await data.Password == user.Password;
        let validPass = await bcypt.compare(user.Password, data.Password)

        if (validPass) {
            // JWT token generate........
            let token = jwt.sign({ id: data._id, data: data.Email, role: data.role }, process.env.LOGINKEY, { expiresIn: '1h' });

            console.log(token, "JWt tokennn");
            res.send({ token, data, msg: "Loginn SuccessFully....!!" });
        } else {
            res.status(401).send({ message: 'Invalid password' });
        }
    } else {
        res.send("Please First registeration and then Login")
    }
})

module.exports = router;