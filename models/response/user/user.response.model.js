const {BaseResponseModel} = require("../base.response.model")

class UserResponseModel extends BaseResponseModel{

    password
    userInfo = {}

    constructor() {
        super()
    }
    setUserInfo(userInfo){
        for(const key in userInfo){
            if(key !== "password") this.userInfo[key] = userInfo[key]
            else this.password = userInfo[key]
        }
    }
}

module.exports = {
    UserResponseModel
}