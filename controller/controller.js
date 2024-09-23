const index = (req, res) => {
    console.log(req.cookies);

    if (req.cookies.userId) {
        const fname = req.cookies.fname;
        const lname = req.cookies.lname;
        const email = req.cookies.email;

        console.log(fname, lname, email);
        res.render('index', { fname, lname, email });
    } else {
        res.redirect('/loginForm');
    }
}

module.exports = { index };








