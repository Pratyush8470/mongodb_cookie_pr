const collection_d = require('../model/db/config');
const bcrypt = require('bcrypt');
const fs=require('fs')
const saltRounds = 10;


const signup = (req, res) => {
    res.render('sign-up')
}

const signup_data = async (req, res) => {
    console.log("signup_data", req.body);

    if (req.body.password === req.body.con_pass) {

        bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {

            const info = new collection_d({
                path: req.file.path,
                fname: req.body.fname,
                lname: req.body.lname,
                email: req.body.email,
                userName: req.body.userName,
                password: hash
            })

            console.log("info",info);
            
            try {

                const userData = await info.save();
                console.log("userData", userData);
                res.redirect('/loginForm');


            } catch (err) {
                res.redirect('/signupForm')
            }

        });
    } else {
        res.redirect('/signupForm');
    }
}
module.exports = { signup, signup_data }