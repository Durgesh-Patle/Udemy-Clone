let mongoose = require('mongoose');
let express = require('express');
const User = require('./model/user');
let app = express();
let bcrypt = require('bcryptjs');
require('dotenv').config();

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
app.post('/sign', async (req, res) => {
    let { fullName, email, password } = req.body;

    try {
        let data = await User.findOne({ email: email });

        // Check if the user already exists
        if (data) {
            return res.status(400).send('Already Account Created');
        }

        // Hash the password
        let hashedPassword = await bcrypt.hash(password, 10);

        // Save new user to the database
        let dbUser = new User({
            fullName: fullName,
            email: email,
            password: hashedPassword
        });
        await dbUser.save();
        res.status(201).send("Your account has been successfully created");
    } catch (error) {
        res.status(500).send('Server error');
    }
});


// Login  Page
app.post('/login', async (req, res) => {
    let loginData = req.body;
    let data = await User.findOne({ email: loginData.email });

    if (data) {
        let validPass = await bcrypt.compare(loginData.password, data.password)
        if (validPass) {
            res.send('Loginnn SucessFullyy................!!!!!!!!!!')
        } else {
            res.send('Invalidd Password..........!!!')
        }
    } else {
        res.send('Phle Account Create Kro .......!!!!!!')
    }
})


const port = process.env.PORT || 3000; // Default to 3000 if PORT is not set
app.listen(port, () => {
    console.log(`Server started on Port ${port}`);
});
