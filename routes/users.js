const express = require("express")
const userController = require("../controllers/user.controller")
const router = express.Router()

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* POST signin. */
router.post('/signin',userController.signIn)
/* POST signup. */
router.post('/signup',userController.signUp)
/* POST checkemail. */
router.post('/checkEmail',userController.checkEmail)
/* POST checknickname. */
router.post('/checkNickName',userController.checkNickName)

module.exports = router