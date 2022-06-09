const {UserSignInModel, UserSignUpModel} = require("../models/request/user.request.model")
const {getUserInfo, addUser} = require("../models/query/user");
const { checkNull } = require("../utils/dataUtils");
const {UserResponseModel} = require("../models/response/user/user.response.model");

async function signIn (req,res){

    const userModel = new UserSignInModel(req.body)

    const response = new UserResponseModel()

    if(!checkNull(userModel)){
        console.log("/signin params is null")
        sendError(response, res, 400, "bad request")
        return
    }

    const userInfo = await getUserInfo("email", userModel.email)

    if(userInfo === {} || userInfo.password !== userModel.password) {
        sendError(response, res, 401, "Not match User")
    }

    response.responseCode = 200
    response.responseMsg = "success"
    response.setUserInfo(userInfo)

    res.send(response)
}

async function signUp(req,res){
    const userModel = new UserSignUpModel(req.body)

    const response = new UserResponseModel()

    if(!checkNull(userModel)){
        console.log("/signup params is null")
        sendError(response, res, 400, "bad request")
        return
    }

    const addResult = await addUser(userModel.email,userModel.password,userModel.name,userModel.nickName)

    if(!addResult) {
        sendError(response, res, 401, "db not connected")
    }

    response.responseCode = 200
    response.responseMsg = "success"
    response.userId = addResult.userId

    res.send(response)

}

function sendError(response, res, code, msg){
    response.responseCode = code
    response.responseMsg = msg
    res.send(response)
}

module.exports = {
    signIn,
    signUp
}