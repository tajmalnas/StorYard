const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/user.route');

const app = express();

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
        console.log('Connected to database');
    }).catch(() => {
        console.log('Connection failed');
    }
);


app.use('/api/user', userRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
    }
);
