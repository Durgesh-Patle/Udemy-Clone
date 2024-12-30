let express = require('express')
let router = express.Router()
let { tokenCheack, protect, Role } = require('../middlewares/roleCheck');
const User = require('../model/User');

router.post('/main-admin', Role('Admin'), tokenCheack, protect, async (req, res) => {
    let { id, Urole } = req.body;
    // console.log(id,Urole, "Role main Adminnn");

    let roleUser = await User.findById(id);

    roleUser.role = Urole;
    await roleUser.save();
    res.send({ message: 'Role updated successfully' })
})

module.exports=router