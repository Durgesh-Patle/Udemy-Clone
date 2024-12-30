const express = require('express');
const router = express.Router();
const User = require('../model/User');
const { protect, Role } = require('../middlewares/roleCheck');

router.post('/users/remove', Role('Admin'), protect, async (req, res) => {
    let { _id } = req.body;

    try {
        const user = await User.findByIdAndDelete(_id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = router;
