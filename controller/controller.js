const homecon = (req, res) => {
    res.render('index')
}
const login = (req, res) => {
    res.render('login')
}
const signup = (req, res) => {
    res.render('sign-up')
}

module.exports = {homecon,login,signup};