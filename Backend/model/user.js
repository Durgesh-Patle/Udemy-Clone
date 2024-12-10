let mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ["Admin", "Student", "Instructors"],
        default: 'Student'
    },
    resetToken: String,
    resetTokenExpiry: Date,
})

let User = mongoose.model('user', userSchema);
module.exports = User;