const index = async (req, res) => {
    
    if (req.cookies.userId) {
        const fname = await req.cookies.fname;
        const lname = await req.cookies.lname;
        const email = await req.cookies.email;
        const username = await req.cookies.user;
        const path = await req.cookies.path;

        res.render('index', { fname, lname, email, username, path });
    } else {
        res.redirect('/loginForm');
    }
}

module.exports = { index };








