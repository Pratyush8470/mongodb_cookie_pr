const bcrypt = require('bcrypt');
const collection = require('../model/db/config');


const login = (req, res) => {
    res.render('index')
}

const login_submit = async (req, res) => {
    console.log("login_submit", req.body);

    const username = await collection.findOne({ user: req.body.user });
    console.log("username", username);

    if (username > 0) {
        bcrypt.compare(req.body.password, username[0].password, (err, result) => {
            console.log("ok", result);

            if (result) {
                res.cookie('userId', user[0]._id.toString());
                res.cookie('firstname', user[0].fname);
                res.cookie('lastname', user[0].lname);
                res.cookie('username', user[0].user);
                res.cookie('email', user[0].email);
                res.redirect('/');
            } else {
                res.redirect('/login');
            }
        });
    } else {
        res.redirect('/signup');
    }
}

module.exports = {
    login,
    login_submit
}