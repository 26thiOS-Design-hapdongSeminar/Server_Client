var express = require('express');
const util = require('../modules/util');
const statusCode = require('../modules/statusCode');
const resMessage = require('../modules/responseMessage');
var router = express.Router();

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