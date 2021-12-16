var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    const result = {
        status:200,
        message: "api~!"
    }
    res.status(200).send(result);
});
router.use('/api', require('./api')); // 생성한 폴더의 index.js로 접근
module.exports = router;

// 1~2: express 모듈 & Router() 미들웨어 불러오기
// 4: get method로 api/ 요청이 들어오면
// 5~10: 해당 로직을 실행
// 12줄: 생성한 router 객체를 모듈로 반환