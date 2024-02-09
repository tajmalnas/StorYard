const bcypt = require('bcryptjs');
const User = require('../model/user.model');

const signup = async (req, res) => {
    const {username, email, password} = req.body;
    console.log(req.body);
    if (!username || !email || !password) {
        return res.status(400).json({msg: 'Please enter all fields'});
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
        res.json({msg: error.message});
    }
}

module.exports = { signup };