const collection = require('../model/db/config');
const bcrypt=require('bcrypt');

const homecon = (req, res) => {
    res.render('login')
}
const login = (req, res) => {
    res.render('index')
}
const signup = (req, res) => {
    res.render('sign-up')
}

module.exports = {homecon,login,signup};