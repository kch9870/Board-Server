const {BaseResponseModel} = require("../models/response/base.response.model")
const {UserRequestModel} = require("../models/request/user.request.model")
const {getUserInfo, addUser} = require("../models/query/user");
const { checkNull } = require("../utils/dataUtils");

async function signIn (req,res){

    let userModel = new UserRequestModel(req)

    const response = new BaseResponseModel()

    // Bad request
    if(checkNull(userModel)){

        response.responseCode = 400
        response.responseMsg = "b"

        res.send('null check')
    }
    res.send(BaseResponseModel)
}

module.exports = {
    signIn
}