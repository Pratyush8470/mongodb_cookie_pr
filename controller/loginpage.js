const bcrypt = require('bcrypt');
const collection = require('../model/db/config');


const login = (req, res) => {
    res.render("login")
}

const login_submit = async (req, res) => {
    console.log("login_submit", req.body);

    const userEmail = await collection.find({ email: req.body.email });
    console.log("userEmail", userEmail);

    if (userEmail.length > 0) {
        bcrypt.compare(req.body.password, userEmail[0].password, (err, result) => {
            console.log("ok", result);

            if (!result) {
                res.cookie('userId', userEmail[0]._id.toString());

                res.redirect('/');
            } else {
                res.redirect('/loginForm');
            }
        });
    } else {
        res.redirect('/signupForm');
    }
}

module.exports = {
    login,
    login_submit
}