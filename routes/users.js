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
/* POST checkEmail. */
router.post('/checkEmail',userController.checkEmail)
/* POST checkNickName. */
router.post('/checkNickName',userController.checkNickName)


/* GET /getUserNickName. */
router.get('/getUserNickName',userController.getUserNickName)


module.exports = router