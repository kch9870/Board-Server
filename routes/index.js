const express = require('express');
const {getUserInfo, addUser} = require("../models/query/user");
const {addBoard, getBoardList, getBoardDetail} = require("../models/query/board");
const {insertComment} = require("../models/query/comment");
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express11' });
});

router.get('/test', function(req, res, next) {

    console.log(new Date())

    res.send(
    {
      test1: "test1",
      test2: "test2",
      test3: {
        test: "test",
        test1: "test"
      }
    });
});

router.get('/dbTest', async (req, res)=>{
    res.send(await getBoardDetail(1))
})

module.exports = router;
