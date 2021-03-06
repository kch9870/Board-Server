const {RegisterBoardModel} = require("../models/request/board.request.model")
const {addBoard, getBoardList, getBoardDetail} = require("../models/query/board");
const { checkNull } = require("../utils/dataUtils");
const { sendBadRequest, sendSystemError ,sendError} = require("../common/error");
const { BoardResponseModel} = require("../models/response/board/board.response.model");
const { BaseResponseModel } = require("../models/response/base.response.model");
const { BoardDetailResponseModel } = require("../models/response/board/boardDetail.response.model");

// 게시글 등록
async function registerBoard (req,res){
    
    const registerBoardModel = new RegisterBoardModel()
    const response = new BaseResponseModel()
    
    if(!registerBoardModel.checkPrams(req.body)){
        console.log("/registerBoard params is null")
        sendBadRequest(res)
        return
    }
    
    const addResult = await addBoard(registerBoardModel.title,registerBoardModel.content,registerBoardModel.userId,registerBoardModel.category)
    
    if(!addResult) {
        sendSystemError(res)
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
    
    const addResult = await getBoardList(pageNo , numsOfPages, category)
    const lastPage = parseInt((addResult.totalCount-1)/numsOfPages) + 1
    
    const response = new BoardResponseModel(addResult, pageNo, lastPage)
    
    response.responseCode = 200
    response.responseMsg = "success"
    
    res.send(response)
}

// 게시글 상세정보 불러오기
async function detailBoard (req,res){
    
    const boardId = req.query.boardId
    console.log(boardId)
    
    if(!boardId){
        console.log("/detailBoard params is null")
        sendBadRequest(res)
        return
    }
    
    const boardDetailResult = await getBoardDetail(boardId)
    const response = new BoardDetailResponseModel(boardDetailResult)

    console.log(response);
    

    if(response.title){
        response.responseCode = 200
        response.responseMsg = "success"
        
        res.send(response)            
    }else{
        sendBadRequest(res)
    }
}

module.exports = {
    registerBoard,
    categoryListBoard,
    detailBoard
}