const bcrypt = require('bcrypt');
const collection_d = require('../model/db/config');


const login = (req, res) => {
    res.render("login")
}

const login_submit = async (req, res) => {
    console.log("login_submit", req.body);

    const userEmail = await collection_d.find({ email: req.body.email });
    console.log("userEmail", userEmail);

    if (userEmail.length > 0) {
        bcrypt.compare(req.body.password, userEmail[0].password, (err, result) => {
            console.log("ok", result);

            if (result) {
                res.cookie('userId', userEmail[0]._id.toString());
                res.cookie('email', userEmail[0].email);
                res.cookie('user', userEmail[0].userName);
                res.cookie('fname', userEmail[0].fname);
                res.cookie('lname', userEmail[0].lname);
                res.cookie('path', userEmail[0].path);

                res.redirect('/');
            } else {
                console.log("errr");
                res.redirect('/loginForm');
                
            }
        });
    } else {
        res.redirect('/signupForm');
        console.log("errr");
        
    }
}

module.exports = {
    login,
    login_submit
}