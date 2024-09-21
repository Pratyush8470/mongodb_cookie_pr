const bcrypt = require('bcrypt');
const collection = require('../model/db/config');
const fs = require('fs');
const saltRounds = 10;


const signup = (req, res) => {
    res.render('sign-up')
}

const signup_data = async (req, res) => {
    if (req.body.password === req.body.con_password) {
        bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
            if (err) throw err;
            const info = new collection({
                name: req.body.name,
                email: req.body.email,
                user: req.body.user,
                password: hash,
            })
            console.log(info);

            try {
                const userData = await info.save();
            } catch (err) {
                console.log("error!", err);
                res.redirect('/login');
            }

        });
    } else {
        res.redirect('/signup');
    }
}
module.exports = { signup, signup_data }