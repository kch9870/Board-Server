const express = require("express")
const boardController = require("../controllers/board.controller")
const router = express.Router()

/* POST registerBoard. */
router.post('/registerBoard',boardController.registerBoard)


/* GET boardCategoryList. */
router.get('/categoryList',boardController.categoryListBoard)

module.exports = router