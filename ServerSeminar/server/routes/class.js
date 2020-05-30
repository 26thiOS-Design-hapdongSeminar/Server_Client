var express = require('express');
const util = require('../modules/util');
const statusCode = require('../modules/statusCode');
const resMessage = require('../modules/responseMessage');
var router = express.Router();


router.get('/recommand', async(req, res) => {
    const result = {
        "classIdx": "1",
        "name": "나만의 미니멀한 도자 컵, 클래스",
        "img" : "https://previews.123rf.com/images/picsfive/picsfive1402/picsfive140200177/26001533-%ED%9D%B0%EC%83%89-%EB%B0%B0%EA%B2%BD%EC%97%90-%ED%9D%B0%EC%83%89-%EC%BB%B5%EC%9D%98-%EB%8B%AB%EC%8A%B5%EB%8B%88%EB%8B%A4.jpg",
        "price": "41600",
        "difficulty": "중",
        "term": "32일",
        "category": "공예/도자",
        "Like" : "274"
    }
    
    res.status(statusCode.OK)
        .send(util.success(statusCode.OK, resMessage.CLASS_FIND_ALL, result));
})

module.exports = router;
