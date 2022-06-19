const {BaseResponseModel} = require("../base.response.model")

class BoardResponseModel extends BaseResponseModel{

    pageNo
    totalCount
    lastPage
    boardList = []

    constructor(addResult, pageNo, lastPage) {
        super()

        this.pageNo = pageNo
        this.totalCount = addResult.totalCount
        this.lastPage = lastPage

        for(var i = 0; i < addResult.board.length; i++){
            const board = {}       // 초기화
    
            board["boardId"] = addResult.board[i]["board_id"]
            board["title"] = addResult.board[i]["title"]
            board["category"] = addResult.board[i]["category"]
            board["date"] = addResult.board[i]["date"]
            board["views"] = addResult.board[i]["views"]
            board["nickName"] = addResult.board[i]["nick_name"]
            board["commentCount"] = addResult.board[i]["commentCount"]
    
            this.boardList.push(board)
        }

    }

    // 추후 responsemodel 구축 하는 걸로 변경하기
}

module.exports = {
    BoardResponseModel
}