const {BaseResponseModel} = require("../base.response.model")

class BoardResponseModel extends BaseResponseModel{

    boardList = {}

    constructor() {
        super()
        
    }

    // 추후 responsemodel 구축 하는 걸로 변경하기
}

module.exports = {
    BoardResponseModel
}