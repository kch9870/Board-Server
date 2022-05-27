const {BaseResponseModel} = require("./base.response.model")

class TestResponseModel extends BaseResponseModel{

    testText

    constructor(result) {
        super()

        this.responseCode = result.responseCode
        this.testText = result.testText
    }
}

module.exports = {
    TestResponseModel
}