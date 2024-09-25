const userdata = async (req, res) => {
    const fname = await req.cookies.fname;
    const lname = await req.cookies.lname;
    const email = await req.cookies.email;
    const username = await req.cookies.user;
    const path = await req.cookies.path;

    res.render('profile', { fname, lname, email, username, path });
}

module.exports = { userdata };