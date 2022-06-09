class UserSignInModel{

    email
    password

    constructor(req) {
        this.email = req.email
        this.password = req.password
    }
}

class UserSignUpModel{
    email
    password
    name
    nickName

    constructor(req) {
        this.email = req.email
        this.password = req.password
        this.name = req.name
        this.nickName = req.nickName
    }
}

module.exports = {
    UserSignInModel,
    UserSignUpModel
}