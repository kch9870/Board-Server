class UserRequestModel{

    email
    password
    name
    nickname

    constructor(req) {
        this.email = req.email
        this.password = req.password
        this.name = req.name
        this.nickname = req.nickname
    }
}

module.exports = {
    UserRequestModel
}