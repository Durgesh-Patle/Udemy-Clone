let express = require('express')
let router = express.Router()
const crypto = require('crypto');
let { sendEmail } = require('../utils/sendEmail');
const User = require('../model/User');

router.post('/forget-password', async (req, res) => {
    const { Email } = req.body;
    // console.log(Email);
    
    try {
        const user = await User.findOne({ Email });
        // User Not Find...
        if (!user) {
            return res.status(404).send('User not found');
        }

        //  User Find..
        const resetToken = crypto.randomBytes(20).toString('hex');
        user.resetToken = resetToken;
        user.resetTokenExpiry = Date.now() + 3600000;
        await user.save();

        const resetUrl = `${req.protocol}://${req.get('host')}/api/reset-password/${resetToken}`;
        // const resetUrl = `http://localhost:5173/api/reset-password/${resetToken}`;
        
        console.log(resetUrl);
        

        await sendEmail(
            user.Email,
            'Password Reset Request',
            `Click the link below to reset your password:\n\n${resetUrl}`
        );

        res.status(200).send('Password reset Email sent');
    } catch (error) {
        res.status(500).send('Error sending password reset Email: ' + error.message);
    }
});

module.exports = router;