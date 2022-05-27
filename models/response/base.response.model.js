class BaseResponseModel{

    responseCode
    responseMsg

    constructor() {

    }
    isSuccess(){
        return this.responseCode === '200'
    }
}

module.exports = {
    BaseResponseModel
}