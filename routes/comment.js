const express = require("express")
const commentController = require("../controllers/comment.controller")
const router = express.Router()

/* POST registerComment. */
router.post('/registercomment',commentController.addComment)

module.exports = router