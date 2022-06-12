const {BaseResponseModel} = require("../base.response.model")

class UserResponseModel extends BaseResponseModel{

    userInfo = {}
    
    constructor() {
        super()

    }

    setUserInfo(userInfo){
        this.userInfo["userId"] = userInfo["user_id"]
        this.userInfo["email"] = userInfo["email"]
        this.userInfo["name"] = userInfo["name"]
        this.userInfo["nickName"] = userInfo["nick_name"]
    }
}

module.exports = {
    UserResponseModel
}