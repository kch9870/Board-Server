const {BaseResponseModel} = require("../base.response.model")

class BoardResponseModel extends BaseResponseModel{

    boardList = {}

    constructor() {
        super()
        
    }

}

module.exports = {
    BoardResponseModel
}