const {BaseResponseModel} = require("../base.response.model")
// test git
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
        
        for(const item of boardDetailResult.comment){
            const comment = {}
            for(const key in item){
                comment[key] = item[key]
            }
            this.commentList.push(comment)
        }

    }

    // 추후 responsemodel 구축 하는 걸로 변경하기
}

module.exports = {
    BoardDetailResponseModel
}