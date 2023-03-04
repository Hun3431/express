//미들웨어 관리

const express = require('express');

const mongoose = require('mongoose');

const app = express();

const authcontroller = require('./auth/auth.controller');

// 미들웨어
app.use(express.json());    // 클라이언트에서 들어오는 정보가 모두 json형식으로 들어옴

app.use('/auth', authcontroller);

app.use('contents', () => {
    console.log('hi');
});

mongoose
    .connect('mongodb+srv://limdohun77:lim3431@cluster0.wivixgj.mongodb.net/?retryWrites=true&w=majority', {dbName: 'auth'})
    .then(() => {
        console.log('DB에 연결되었습니다.')
        app.listen(8080);
        console.log('서버가 실행되었습니다.')
    })
    .catch(() => {
        console.log('DB연결에 실패하였습니다.')
        console.log(error);
    })

//app.listen(8080);