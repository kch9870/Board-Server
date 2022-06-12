const {UserSignInModel, UserSignUpModel} = require("../models/request/user.request.model")
const {getUserInfo, addUser} = require("../models/query/user");
const { checkNull } = require("../utils/dataUtils");
const {UserResponseModel} = require("../models/response/user/user.response.model");
const { BaseResponseModel } = require("../models/response/base.response.model");

// 로그인
async function signIn (req,res){

    const userModel = new UserSignInModel(req.body)
    
    const response = new UserResponseModel()

    if(!checkNull(userModel)){
        console.log("/signin params is null")
        sendError(response, res, 400, "bad request")
        return
    }

    const userInfo = await getUserInfo("email", userModel.email)

    if(!userInfo || userInfo.password !== userModel.password) {
        sendError(response, res, 401, "Not match User Password")
    }

    response.responseCode = 200
    response.responseMsg = "success"
    response.setUserInfo(userInfo)
    
    res.send(response)
}

// 회원가입
async function signUp(req,res){
    const userModel = new UserSignUpModel(req.body)

    const response = new BaseResponseModel()

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

// 아이디 중복 체크
async function checkEmail(req,res){
    const userEmail = req.body

    const response = new BaseResponseModel()

    if(!checkNull(userEmail)){
        console.log("/emailCheck params is null")
        sendError(response, res, 400, "bad request")
        return
    }

    const resultEmail = await getUserInfo("email", userEmail.email)

    if(resultEmail) {
        sendError(response, res, 401, "Exist User Email")
    }
    else{
        response.responseCode = 200
        response.responseMsg = "success"
    
        res.send(response)
    }
}

// 닉네임 중복체크
async function checkNickName(req,res){
    const userNickName = req.body

    const response = new BaseResponseModel()

    if(!checkNull(userNickName)){
        console.log("/nickNameCheck params is null")
        sendError(response, res, 400, "bad request")
        return
    }

    const resultNickName = await getUserInfo("nick_name", userNickName.nickName)

    if(resultNickName) {
        sendError(response, res, 401, "Exist User NickName")
    }
    else{
        response.responseCode = 200
        response.responseMsg = "success"
    
        res.send(response)
    }
}


function sendError(response, res, code, msg){
    response.responseCode = code
    response.responseMsg = msg
    res.send(response)
}

module.exports = {
    signIn,
    signUp,
    checkEmail,
    checkNickName
}