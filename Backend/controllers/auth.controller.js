const bcrypt = require('bcryptjs');
const User = require('../model/user.model');
const { errorHandler } = require('../utils/error');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const sendEmail = (username,email, otp,) => {

    let transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 587, 
      auth: {
        user: process.env.SMTP_USER, 
        pass: process.env.SMTP_PASSWORD,
      },
    });
    
    // Define email content
    let mailOptions = {
      from: "storyard7@gmail.com",
      to: email, 
      subject: "StorYard - Email Verification", 
      html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2>StorYard</h2>
                <p>Dear ${username},</p>
                <p>We would like to thank you for choosing us as your choice for story reading.</p>
    
                <h2 style="color:green">${otp}</h2>
                <p>Please Enter The Above OTP The Given Field</p>
    
                <p>Thank you once again for your interest in joining our platform.</p>
    
                <p>Best regards,<br>
                Taj Malnas<br>
                CEO, storyard</p>
            </div>
        `,
    };
    
    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      console.log(mailOptions);
      if (error) {
        console.error("Error occurred:", error);
      } else {
        console.log("Email sent:", info.response);
      }
    });      
}

const signup = async (req, res,next) => {
    const {username, email, password} = req.body;
    console.log(req.body);
    if (!username || !email || !password) {
        next(errorHandler(400, 'All fields are required'));
        return;
    }
    try {
        const user = await User.findOne({email})
        if (user) {
            return res.status(400).json({msg: 'User already exists'});
        }
        const hashedPassword = bcrypt.hashSync(password, 10);
        const otp = Math.floor(1000 + Math.random() * 9000);
        const newUser = new User({
            username,
            email,
            password: hashedPassword, 
            otp: otp,
            emailVerified: false
        });

        sendEmail(username,email,otp);

        await newUser.save()
        res.json({msg: 'User added successfully'});
    } catch (error) {
        next(error);
        return;
    }
}

const emailVerification = async (req, res, next) => {
    const {email, otp} = req.body;
    if (!email || !otp) {
        next(errorHandler(400, 'All fields are required'));
        return;
    }
    try {
        const user = await User.findOne({email});
        if (!user) {
            next(errorHandler(400, 'Invalid credentials'));
            return;
        }
        if (user.otp === otp) {
            user.emailVerified = true;
            await user.save();
            res.json({msg: 'Email verified successfully'});
        } else {
            next(errorHandler(400, 'Invalid OTP'));
            return;
        }
    }
    catch (error) {
        next(errorHandler(500, 'Internal server error'));
        return;
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
            return;
        }
        const validPassword = bcrypt.compareSync(password, user.password);
        console.log('Entered Password:', password);
        console.log('Hashed Password from DB:', user.password);
        console.log('Password Comparison Result:', validPassword);
        if (!validPassword) {
            next(errorHandler(400, 'Invalid passord'));
            return;
        }

        if(!user.emailVerified){
            next(errorHandler(400, 'Email not verified'));
            return;
        }

        const {password: pass,otp, ...rest} = user._doc;

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
        next(errorHandler(500, 'Internal server error'));
        return;
    }
}

const google = async (req,res,next) => {
    const {username, email, googlePhotoUrl} = req.body;
    try{
        if(username==="" || email==="" || googlePhotoUrl===""){
            next(errorHandler(400, 'All fields are required'));
            return;
        }
        const user = await User.findOne({email});
        if(user){
            const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn: '1d'})
            const {password, ...rest} = user._doc;
            res.json({msg: 'Login successful', token:token, user:rest});
        }
        else{
            const generatedPassword = email+1234;
            const hashedPassword = bcrypt.hashSync(generatedPassword, 10);
            const name = username.toLowerCase().split(' ').join('')
            const newUser = new User({
                username: name,
                email,
                password: hashedPassword,
                profilePicture: googlePhotoUrl,
                otp: 0,
                emailVerified: true
            });
            newUser.save()
            const token = jwt.sign({id:newUser._id},process.env.JWT_SECRET,{expiresIn: '1d'})
            const {password,otp, ...rest} = newUser._doc;
            res.json({msg: 'User added successfully', token:token, user:rest});
        }
    }catch(error){
        next(errorHandler(500, 'Internal server error'));
        return;
    }
}

module.exports = { signup, login, google,emailVerification};