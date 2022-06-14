const {RegisterBoardModel} = require("../models/request/board.request.model")
const {addBoard} = require("../models/query/board");
const { checkNull } = require("../utils/dataUtils");
const {BoardResponseModel} = require("../models/response/board/board.response.model");
const { BaseResponseModel } = require("../models/response/base.response.model");

// 게시글 등록
async function registerBoard (req,res){

    const registerBoardModel = new RegisterBoardModel(req.body)

    const response = new BaseResponseModel()

    if(!checkNull(registerBoardModel)){
        console.log("/registerBoard params is null")
        sendError(response, res, 400, "bad request")
        return
    }

    const addResult = await addBoard(registerBoardModel.title,registerBoardModel.content,registerBoardModel.userId,registerBoardModel.category)

    if(!addResult) {
        sendError(response, res, 401, "db not connected")
    }

    response.responseCode = 200
    response.responseMsg = "success"
    response.boardId = addResult.boardId
    
    res.send(response)
}




function sendError(response, res, code, msg){
    response.responseCode = code
    response.responseMsg = msg
    res.send(response)
}

module.exports = {
    registerBoard
}