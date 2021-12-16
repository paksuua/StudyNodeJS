var express = require('express');
var router = express.Router();
let User = require('../models/user');

// 회원가입
router.post('/signup', async (req, res) => {
  const {id, name, password, email} = req.body;
  // request data 확인 - 없다면 Bad Request 반환
  if( !id || !name || !password || !email){
    return res.status(400).send({message: 'BAD REQUEST'});
  }
  // 이미 가입된 id
  if (User.filter(user => user.id == id).length > 0){
    return res.status(400).send({message: 'ALREADY ID'});
  }
});
module.exports = router;
