let mongoose = require('mongoose');
let express = require('express');
const User = require('./model/User');
let app = express();
require('dotenv').config();
let Sign = require('./Router/Sign');
let Login = require('./Router/Login');
let forget=require('./Router/Forget')
let Reset=require('./Router/Reset')
let Course=require('./Router/Course')
let Status=require('./Router/StatusCheack')
let Review=require('./Router/Review')
let GetUser=require('./Router/Getuser')
let AllCourse=require('./Router/AllCourse')
let cors=require('cors');

app.use(cors());

// Middleware
app.use(express.json());

const apiUrl = process.env.DATABASE_URL;

// MongoDB Connection
mongoose.connect(apiUrl).then(() => {
    console.log('MongoDB Connected');
}).catch((err) => {
    console.log('Error connecting to MongoDB:', err);
});

// Routes
app.get('/', (req, res) => {
    res.send("Home Page");
});

// Sign Page Using Middleware.
app.use('/api', Sign)

// Login Page Using Middleware.
app.use('/api', Login)

// forget Password.
app.use('/api',forget);

// Reset Password.
app.use('/api',Reset)

// Courses 
app.use('/api',Course)

// Status Cheack Pending Reject Approv
app.use('/api',Status)

// Revieww   Page..
app.use('/api',Review)

// All Users Seee. 
app.use('/api',GetUser)

// All AllCourses Seee. 
app.use('/api',AllCourse)


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
