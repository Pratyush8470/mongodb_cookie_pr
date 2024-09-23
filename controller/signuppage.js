const collection = require('../model/db/config');
const bcrypt = require('bcrypt');
const saltRounds = 10;


const signup = (req, res) => {
    res.render('sign-up')
}

const signup_data = async (req, res) => {
    console.log("signup_data", req.body);

    if (req.body.password === req.body.con_pass) {

        bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {

            const info = new collection({
                fname: req.body.fname,
                lname: req.body.lname,
                email: req.body.email,
                userName: req.body.userName,
                password: hash,
            })
            try {

                const userData = await info.save();
                console.log("userData", userData);
            } catch (err) {
                res.redirect('/loginForm');
            }

        });
    } else {
        res.redirect('/signupForm');
    }
}
module.exports = { signup, signup_data }