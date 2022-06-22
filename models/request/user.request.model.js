const {BaseRequestModel} = require("./base.request.model");

class UserSignInModel extends BaseRequestModel{

    email
    password

    constructor() {
        super()
    }
}

class UserSignUpModel extends BaseRequestModel{
    email
    password
    name
    nickName

    constructor() {
        super()
    }
}

class UserCheckEmailModel extends BaseRequestModel{

    email

    constructor() {
        super();
    }
}
class UserCheckNickName extends BaseRequestModel{

    nickName

    constructor() {
        super();
    }
}

module.exports = {
    UserSignInModel,
    UserSignUpModel,
    UserCheckEmailModel,
    UserCheckNickName
}