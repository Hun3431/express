const express = require('express');
const router = express.Router();    // 라우터 사용
const { login } = require('./auth.login.service');
const { join } = require('./auth.join.service');

// auth/join
router.post('/join',  join);

// auth/login
router.post('/login', login);

// auth/join 
router.get('/join', () => {
    console.log('GET으로 받았습니다.');
})




// 외부 파일에서 라우터를 사용 가능
module.exports = router;