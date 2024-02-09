const bcypt = require('bcryptjs');
const User = require('../model/user.model');
const { errorHandler } = require('../utils/error');

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

module.exports = { signup };