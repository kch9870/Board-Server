const express = require("express")
const boardController = require("../controllers/board.controller")
const router = express.Router()

// test
/* POST registerBoard. */
router.post('/registerBoard',boardController.registerBoard)


/* GET boardCategoryList. */
router.get('/categoryList',boardController.categoryListBoard)
/* GET detailBoard. */
router.get('/detailBoard',boardController.detailBoard)

module.exports = router