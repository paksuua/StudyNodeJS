var express = require('express');
const user = require('../models/user');
var router = express.Router();
let UserModule = require('../models/user');
const responseMessage = require('../modules/responseMessage');
const statusCode = require('../modules/statusCode');

// 1. 회원가입
router.post('/signup', async (req, res) => {
  const { id, name, password, email } = req.body;
  // rUserModuleequest data 확인 - 없다면 Bad Request 반환
  if (!id || !name || !password || !email) {
    return res.status(400).send(util.fail(400, 'BAD REQUEST'));
  }
  // 이미 가입된 id
  if (UserModule.filter(user => user.id == id).length > 0) {
    return res.status(400).send(util.fail(400, 'ALREADY SIGNED ID'));
  }
  // 회원가입 성공
  UserModule.push({ id, name, password, email });
  res.send(200).send(util.success(200, '회원가입 성공', { userId: id }));
});

// 2. 로그인
router.post('/signin', async (req, res) => {
  const {
    id,
    password
  } = req.body;

  // request data 확인
  if(!id||!password ){
    res.status(statusCode.BAD_REQUEST)
    .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
    return;
  }
  // 유저 정보가 없으면
  if(user.length==0){
    res.stasud(statusCode.BAD_REQUEST)
    .send(util.fail(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER)));
    return;
  }
  // 비밀번호 틀림
  if(user[0].password !== password){
    res.status(statusCode.BAD_REQUEST)
    .send(util.fail(statusCode.BAD_REQUEST, responseMessage.UNMATCHED_PW));
    return;
  }
  // 관리자 계정 접속 // 추후 처리
  if(id=="admin"&&password=="admin"){
    res.status(statusCode.ADMIN_OK)
  .send(util.success(statusCode.OK, responseMessage.LOGIN_SUCCESS, {userId: id}));
  }

  // 로그인 성공
  res.status(statusCode.OK)
  .send(util.success(statusCode.OK, responseMessage.LOGIN_SUCCESS, {userId: id}));

  // 프로필 조회
});
module.exports = router;
