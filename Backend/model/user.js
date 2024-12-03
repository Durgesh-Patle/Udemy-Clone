let mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

let User = mongoose.model('user', userSchema);
module.exports = User;