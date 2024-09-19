const express = require('express');
const router = express.Router();
const con = require('../controller/controller.js');

router.get('/', con.login);
router.get('/login', con.homecon);
router.get('/signup', con.signup);


module.exports = router;