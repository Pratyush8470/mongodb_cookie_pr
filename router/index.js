const express = require('express');
const router = express.Router();
const con = require('../controller/controller.js');

router.get('/', con.homecon);
router.get('/login', con.login);
router.get('/signup', con.signup);


module.exports = router;