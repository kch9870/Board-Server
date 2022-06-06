class UserSignInModel{

    email
    password

    constructor(req) {
        this.email = req.email
        this.password = req.password
    }
}

module.exports = {
    UserSignInModel
}