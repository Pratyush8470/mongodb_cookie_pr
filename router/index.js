const express = require('express');
const router = express.Router();
const con = require('../controller/controller');
const loginpage = require('../controller/loginpage');
const signuppage = require('../controller/signuppage');
const userData = require('../controller/userprofile')
const upload = require('../middleware/multer');

router.get('/', con.index);

router.get('/loginForm', loginpage.login);
router.post('/login', loginpage.login_submit);

router.get('/signupForm', signuppage.signup);
router.post('/signup', upload.single('img') ,signuppage.signup_data);

router.get('/userinfo', userData.userinfo);
router.post('/userdata', userData.userdata);

router.get('/')

module.exports = router;