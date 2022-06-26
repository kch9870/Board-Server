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

        for(const item of addResult.board){
            for(const key in item){
                this.boardList[key] = item[key]
            }
        }
    }

}

module.exports = {
    BoardResponseModel
}