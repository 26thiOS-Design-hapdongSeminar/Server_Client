var express = require('express');
const util = require('../modules/util');
const statusCode = require('../modules/statusCode');
const resMessage = require('../modules/responseMessage');
var router = express.Router();

router.get('/recommand', async(req, res) => {
    const result = [
        {
            "recommandIdx": "1",
            "name": "베리베리 미니멀 파우치",
            "img" : " ",
            "price": "6200",
            "explain": "브라이트 컨셉",
            "Like" : "695",
        },
        {
            "recommandIdx": "2",
            "name": "찹싸루니 6종 선물 센트",
            "img" : " ",
            "price": "15000",
            "explain" : "찹싸루니", 
            "Like" : "143",
        },
    ]

    res.status(statusCode.OK)
        .send(util.success(statusCode.OK, resMessage.RECOMAND_FIND_ALL, result));
})

router.get('/live', async(req, res) => {
    const result = [
        {
            "liveIdx": "1",
            "name": "비치 수제 핸드백",
            "img" : " ",
            "price": "41600",
            "explain": "하늬하늬",
            "Like" : "200",
        },
        {
            "liveIdx": "2",
            "name": "천연 핸드크림 & 바디로션",
            "img" : " ",
            "price": "18000",
            "explain": "려을팩토리",
            "Like" : "300",
        },
    ]

    res.status(statusCode.OK)
        .send(util.success(statusCode.OK, resMessage.LIVE_FIND_ALL, result));
})

module.exports = router;