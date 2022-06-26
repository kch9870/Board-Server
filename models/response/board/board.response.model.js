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
            const _ = {}
            for(const key in item){
                _[key] = item[key]
            }
            this.boardList.push(_)
        }
    }

}

module.exports = {
    BoardResponseModel
}