const {BaseResponseModel} = require("../base.response.model")

class BoardDetailResponseModel extends BaseResponseModel{

    title
    content
    nickName
    category
    date
    commentList = []

    constructor(boardDetailResult) {
        super()

        this.title = boardDetailResult["title"]
        this.content = boardDetailResult["content"]
        this.nickName = boardDetailResult["nickName"]
        this.category = boardDetailResult["category"]
        this.date = boardDetailResult["date"]
 
        for(let i = 0; i < boardDetailResult.comment.length; i++){
            const comment = {}       // 초기화
    
            comment["commentId"] = boardDetailResult.comment[i]["commentId"]
            comment["nickName"] = boardDetailResult.comment[i]["nickName"]
            comment["date"] = boardDetailResult.comment[i]["date"]
            comment["comment"] = boardDetailResult.comment[i]["comment"]
    
            this.commentList.push(comment)
        }

    }

    // 추후 responsemodel 구축 하는 걸로 변경하기
}

module.exports = {
    BoardDetailResponseModel
}