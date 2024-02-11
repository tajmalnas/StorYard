const express = require('express');
const {signup, login,google, emailVerification} = require('../controllers/auth.controller');

const router = express.Router();

router.post('/signup',signup);
router.post('/login',login);
router.post('/google',google);
router.post('/email-verification',emailVerification);

module.exports = router;