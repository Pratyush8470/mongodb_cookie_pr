const index = (req, res) => {
    console.log(req.cookies);

    if (req.cookies.userId) {
        const fname = req.cookies.fname;
        const lname = req.cookies.lname;
        const email = req.cookies.email;
        const username = req.cookies.user;
        const path = req.cookies.path;

        console.log(fname, lname, email, username, path);
        res.render('index', { fname, lname, email, username, path });
    } else {
        res.redirect('/loginForm');
    }
}
const cardprofile = (req,res)=>{
    res.render('/card');
}

module.exports = { index , cardprofile};








