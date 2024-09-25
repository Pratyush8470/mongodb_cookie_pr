 const userdata = async (req, res) => {
    const path = await req.cookie.path;
    const fname = await req.cookie.fname;
    const lname = await req.cookie.lname;
    const email = await req.cookie.email;

    res.render('card', { path, fname, lname, email });
}

module.exports = { userdata };