const { response } = require('express');
const User = require('../Database/User');

module.exports.join = (req, res, next) => {
    // body의 id 요청
    const id = req.body.id;
    const pw = req.body.pw;
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;

    //id: 고유값(중복X)
    User.find({id : id})
        .then((result) => {
        
        if(result[0]){
            //id가 있을 때 실행(값이 있는 것/동일한 아이디가 있는 것)
            res.statusCode(401).json({
                message: "이미 등록된 사용자입니다."
            })
        }
        //id가 없을 때 실행(값이 없는 것/동일한 아이디가 없는 것)
        const nUser = new User({
            id: id,
            pw: pw,
            name: name,
            email: email,
            phone: phone
        })
        nUser.save()
            .then(() => {
                console.log('저장에 성공하였습니다.');
                res.status(201).json({
                    message: "저장이 완료되었습니다."
                })
            })
            .catch((error) => {
                console.log(error);
                console.log('error: save 실패!');
                res.status(500).json({
                    message: "저장과정에서 알 수 없는 에러가 발생하였습니다. Back-end 개발자에게 문의하세요.",
                    location: "저장"
                })
            })
    })
    .catch((error) => {
        console.log(error);
        console.log('error: find 실패!');
        res.status(500).json({
            message: "알 수 없는 에러가 발생하였습니다. Back-end 개발자에게 문의하세요",
            location: "찾기"
        })
    })
}