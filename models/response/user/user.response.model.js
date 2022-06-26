const {BaseResponseModel} = require("../base.response.model")

class UserResponseModel extends BaseResponseModel{

    userInfo = {}
    
    constructor() {
        super()

    }

    setUserInfo(userInfo){
        this.userInfo["userId"] = userInfo["userId"]
        this.userInfo["email"] = userInfo["email"]
        this.userInfo["name"] = userInfo["name"]
        this.userInfo["nickName"] = userInfo["nickName"]
    }
}

module.exports = {
    UserResponseModel
}