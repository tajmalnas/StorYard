const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();

dotenv.config();

mongoose.connect(process.env.MONGO).then(
    () => {
        console.log('Connected to database');
    }
    ).catch(
        () => {
            console.log('Connection failed');
        }
    );

app.get('/', (req, res) => {
    res.send('Hello World');
    }
);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
    }
);
