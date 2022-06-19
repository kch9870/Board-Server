class RegisterBoardModel{

    title
    content
    userId
    category

    constructor(req) {
        this.title = req.title
        this.content = req.content
        this.userId = req.userId
        this.category = req.category
    }
}

class CategoryListBoardModel{

    pageNo
    numsOfPages
    category

    constructor(req) {
        this.pageNo = req.pageNo
        this.numsOfPages = req.numsOfPages
        this.category = req.category
    }
}

module.exports = {
    RegisterBoardModel,
    CategoryListBoardModel
}