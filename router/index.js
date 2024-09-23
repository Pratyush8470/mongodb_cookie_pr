const express = require('express');
const router = express.Router();
const con = require('../controller/controller');
const loginpage = require('../controller/loginpage');
const signuppage = require('../controller/signuppage');

router.get('/', con.index);

router.get('/loginForm', loginpage.login);
router.post('/login', loginpage.login_submit);

router.get('/signupForm', signuppage.signup);
router.post('/signup', signuppage.signup_data);

module.exports = router;