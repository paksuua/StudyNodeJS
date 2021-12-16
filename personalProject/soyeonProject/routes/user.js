var express = require('express');
var router = express.Router();
let User = require('../models/user');

// 회원가입
router.post('/signup', async (req, res) => {
  // reqest 데이터 가져오기
  const {id, name, password, email} =req.body;
  // user.js에 유저 추가하기
  User.push({id, name, password, email});
  // response 데이터 내보내기
  res.status(200).send(User);
});

module.exports = router;
