const index = async (req, res) => {
    console.log(req.cookies);

    if(req.cookies.user_id){
        const fname = req.cookies.fname;
        const lname = req.cookies.lname;
        const email = req.cookies.email;

        console.log(fname, lname, email);
        res.render('index', {fname, lname, email});
    }else{
        res.redirect('/login');
    }   
}

module.exports = {index};








