let mongoose = require('mongoose');
let express = require('express');
const User = require('./model/User');
let app = express();
require('dotenv').config();
let Sign = require('./Router/Sign');
let Login = require('./Router/Login');
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

// Sign Page
app.use('/api', Sign)

// Login  Page
app.use('/api', Login)


function cheackRole(role) {
    return (req, res, next) => {
        let token = req.headers.authorization;

        if (!token) {
            return res.send('unAuthorization User...........!!!')
        } else {
            let decodeToken = jwt.verify(token, 'wduohuodihidhind')
            if (decodeToken.role !== role) {
                res.send('Access Denided........!!!!')
            } else {
                next();
            }
        }
    }
}

// Admin Page.
app.get('/admin', cheackRole('Admin'), (req, res) => {
    res.send("Admin Access This Page");
})

// User Page.
app.get('/student', cheackRole('Student'), (req, res) => {
    res.send("Student Access This Page");
})


const port = process.env.PORT || 3000; 
app.listen(port, () => {
    console.log(`Server started on Port ${port}`);
});
