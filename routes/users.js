const express = require("express")
const userController = require("../controllers/user.controller")
const router = express.Router()

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* POST signin. */
router.post('/signin',userController.signIn)

module.exports = router