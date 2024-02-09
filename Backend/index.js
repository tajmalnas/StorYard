const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const userRoutes = require('./routes/user.route');
const userAuth = require('./routes/auth.route');



const app = express();
app.use(cors());    
app.use(express.json());
dotenv.config();


mongoose.connect(process.env.MONGO).then(() => {
        console.log('Connected to database');
    }).catch(() => {
        console.log('Connection failed');
    }
);


app.use('/api/user', userRoutes);
app.use('/api/auth', userAuth);


app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
    }
);