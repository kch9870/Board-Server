const {UserSignInModel, UserSignUpModel, UserCheckEmailModel, UserCheckNickName} = require("../models/request/user.request.model")
const {getUserInfo, addUser} = require("../models/query/user");
const { checkNull } = require("../utils/dataUtils");
const {UserResponseModel} = require("../models/response/user/user.response.model");
const { BaseResponseModel } = require("../models/response/base.response.model");

// 로그인
async function signIn (req,res){

    const userModel = new UserSignInModel()

    if(!userModel.checkPrams(req.body)){
        console.log("/signin params is null")
        sendError(response, res, 400, "bad request")
        return
    }

    const response = new UserResponseModel()

    const userInfo = await getUserInfo("email", userModel.email)

    if(!userInfo || userInfo.password !== userModel.password) {
        sendError(response, res, 401, "Not match User Password")
    }
    else{
        response.responseCode = 200
        response.responseMsg = "success"
        response.setUserInfo(userInfo)
        
        res.send(response)
    }
}

// 회원가입
async function signUp(req,res){
    const userModel = new UserSignUpModel()

    if(!userModel.checkPrams(req.body)){
        console.log("/signup params is null")
        sendError(response, res, 400, "bad request")
        return
    }

    const response = new BaseResponseModel()

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
    const userEmail = new UserCheckEmailModel()

    if(!userEmail.checkPrams(req.body)){
        console.log("/emailCheck params is null")
        sendError(response, res, 400, "bad request")
        return
    }

    const response = new BaseResponseModel()

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
    const userNickName = new UserCheckNickName()

    if(!userNickName.checkPrams(req.body)){
        console.log("/emailCheck params is null")
        sendError(response, res, 400, "bad request")
        return
    }

    const response = new BaseResponseModel()

    if(!checkNull(userNickName)){
        console.log("/checkNickName params is null")
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

// 유저 pk로 닉네임 불러오기
async function getUserNickName(req,res){
    const userId = req.query.userId

    const response = new BaseResponseModel()

    if(!checkNull(userId)){
        console.log("/getUserNickName params is null")
        sendError(response, res, 400, "bad request")
        return
    }

    const getNickName = await getUserInfo("user_id", userId)

    if(!getNickName) {
        sendError(response, res, 401, "Not Exist UserId")
    }
    else{
        console.log(getNickName)

        response.responseCode = 200
        response.responseMsg = "success"
        response.nickName = getNickName["nick_name"]
    
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
    checkNickName,
    getUserNickName
}