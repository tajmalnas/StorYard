const bcypt = require('bcryptjs');
const User = require('../model/user.model');
const { errorHandler } = require('../utils/error');
const jwt = require('jsonwebtoken');

const signup = async (req, res,next) => {
    const {username, email, password} = req.body;
    console.log(req.body);
    if (!username || !email || !password) {
        next(errorHandler(400, 'All fields are required'));
    }
    try {
        const user = await User.findOne({email})
        if (user) {
            return res.status(400).json({msg: 'User already exists'});
        }
        const hashedPassword = await bcypt.hashSync(password, 10);
        const newUser = new User({
            username,
            email,
            password: hashedPassword    
        });
        await newUser.save()
        res.json({msg: 'User added successfully'});
    } catch (error) {
        next(error);
    }
}

const login = async (req, res, next) => {
    const {email, password} = req.body;
    if (!email || !password) {
        next(errorHandler(400, 'All fields are required'));
    }
    try {
        const user = await User.findOne({email});
        if (!user) {
            next(errorHandler(400, 'Invalid credentials'));
        }
        const validPassword = await bcypt.compare(password, user.password);
        if (!validPassword) {
            next(errorHandler(400, 'Invalid passord'));
        }
        const {password: pass, ...rest} = user._doc;

        const token = jwt.sign({
            id:user._id
        },
        process.env.JWT_SECRET,
        {
            expiresIn: '1d'
        })
        res.json({msg: 'Login successful', token:token, user:rest});
    }
    catch (error) {
        next(error);
    }
}

module.exports = { signup,login };