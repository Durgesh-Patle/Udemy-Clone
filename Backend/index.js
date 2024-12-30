let mongoose = require('mongoose');
let express = require('express');
const User = require('./model/User');
let app = express();
require('dotenv').config();
let Sign = require('./Router/Sign');
let Login = require('./Router/Login');
let forget = require('./Router/Forget')
let Reset = require('./Router/Reset')
let Course = require('./Router/Course')
let Status = require('./Router/StatusCheack')
let Review = require('./Router/Review')
let GetUser = require('./Router/Getuser')
let AllCourse = require('./Router/AllCourse')
let mainAdmin = require('./Router/MainAdmin')
let Payment = require('./Router/Payment')
let ChatBot = require('./Router/ChatBot')
let upload = require('./Router/Upload')
let Delete = require('./Router/Delete')
let cors = require('cors');

// Middleware
app.use(cors());
app.use(express.json());

// Serve uploaded files

const apiUrl = process.env.DATABASE_URL;

// MongoDB Connection
mongoose.connect(apiUrl).then(() => {
    console.log('MongoDB Connected');
}).catch((err) => {
    console.log('Error connecting to MongoDB:', err);
});

app.use("/uploads", express.static("uploads"));

// Routes
app.get('/', (req, res) => {
    res.send("Home Page");
});

// Sign Page Using Middleware.
app.use('/api', Sign)

// Login Page Using Middleware.
app.use('/api', Login)

// Main-Admin
app.use('/api', mainAdmin)

// forget Password.
app.use('/api', forget);

// Reset Password.
app.use('/api', Reset)

// Courses 
app.use('/api', Course)

// Status Cheack Pending Reject Approv
app.use('/api', Status)

// Revieww   Page..
app.use('/api', Review)

// All Users Seee. 
app.use('/api', GetUser)

// All AllCourses Seee. 
app.use('/api', AllCourse)

// payment Integration
app.use('/api', Payment)

// ChatBot Aii..
app.use('/api', ChatBot)

// Multer Uploads Files..
app.use('/api', upload)

// Delete user
app.use('/api', Delete)


// Admin Page.
// app.get('/admin', cheackRole('Admin'), (req, res) => {
//     res.send("Admin Access This Page");
// })

// User Page.
// app.get('/instructors', cheackRole('Instructors'), (req, res) => {
//     res.send("Student Access This Page");
// })


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started on Port ${port}`);
});
