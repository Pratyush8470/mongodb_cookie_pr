const express = require('express');
const router = express.Router();
const con = require('../controller/controller.js');

router.get('/', con.homecon);


module.exports = router;