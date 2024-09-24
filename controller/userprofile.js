const collection_d = require("../model/db/config");

const userinfo = async (req, res) => {
    const img = await req.cookie.path;
    const fname = await req.cookie.fname;
    const lname = await req.cookie.lname;
    const email = await req.cookie.email;

    res.render('userinfo.ejs', { img, fname, lname, email });
}

const userdata = async (req, res) => {
    const img = await req.cookie.path;
    const fname = await req.cookie.fname;
    const lname = await req.cookie.lname;
    const email = await req.cookie.email;

    res.render('card.ejs', { img, fname, lname, email });
}


module.exports = {
    userinfo, userdata
}