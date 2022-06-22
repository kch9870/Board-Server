const {RegisterBoardModel,CategoryListBoardModel} = require("../models/request/board.request.model")
const {addBoard, getBoardList} = require("../models/query/board");
const { checkNull } = require("../utils/dataUtils");
const {BoardResponseModel} = require("../models/response/board/board.response.model");
const { BaseResponseModel } = require("../models/response/base.response.model");

// 게시글 등록
async function registerBoard (req,res){

    const registerBoardModel = new RegisterBoardModel()

    if(!registerBoardModel.checkPrams(req.body)){
        console.log("/registerBoard params is null")
        sendError(response, res, 400, "bad request")
        return
    }

    const response = new BaseResponseModel()

    const addResult = await addBoard(registerBoardModel.title,registerBoardModel.content,registerBoardModel.userId,registerBoardModel.category)

    if(!addResult) {
        sendError(response, res, 401, "db not connected")
    }

    response.responseCode = 200
    response.responseMsg = "success"
    response.boardId = addResult.boardId
    
    res.send(response)
}


// 카테고리 별 게시글 리스트 불러오기
async function categoryListBoard (req,res){

    const pageNo = req.query.pageNo ? req.query.pageNo : 1
    const numsOfPages = req.query.numsOfPages ? req.query.numsOfPages : 15
    const category = req.query.category ? req.query.category : 'all'

    const response = new BaseResponseModel()
    const addResult = await getBoardList(pageNo ,numsOfPages, category)

    response.responseCode = 200
    response.responseMsg = "success"
    response.pageNo = req.query.pageNo
    response.totalCount = addResult.totalCount
    response.lastPage = addResult.totalCount / req.query.numsOfPages
    response.list = addResult.board

    res.send(response)
}



function sendError(response, res, code, msg){
    response.responseCode = code
    response.responseMsg = msg
    res.send(response)
}

module.exports = {
    registerBoard,
    categoryListBoard
}