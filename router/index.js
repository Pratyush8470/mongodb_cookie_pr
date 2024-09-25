const express = require('express');
const router = express.Router();
const con = require('../controller/controller');
const loginpage = require('../controller/loginpage');
const signuppage = require('../controller/signuppage');
const userProfile = require('../controller/profilepage')
const upload = require('../middleware/multer');

router.get('/', con.index);

router.get('/loginForm', loginpage.login);
router.post('/login', loginpage.login_submit);

router.get('/signupForm', signuppage.signup);
router.post('/signup', upload.single('img') ,signuppage.signup_data);

router.get('/profile', userProfile.userdata);

module.exports = router;