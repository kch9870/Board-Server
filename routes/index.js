let express = require('express');
let router = express.Router();
let token = require('../middleware/token')
let indexController = require('../controllers/index.controller')

/* GET home page. */
router.get('/', (req, res, next)=>{
    res.send("ho")
})

router.post('/test', token.checkToken, indexController.test)

module.exports = router;
