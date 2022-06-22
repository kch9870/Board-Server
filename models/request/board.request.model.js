const {BaseRequestModel} = require("./base.request.model");

class RegisterBoardModel extends BaseRequestModel{

    title
    content
    userId
    category

    constructor() {
        super()
    }
}

class CategoryListBoardModel extends BaseRequestModel{

    pageNo
    numsOfPages
    category

    constructor() {
        super()
    }
}

module.exports = {
    RegisterBoardModel,
    CategoryListBoardModel
}