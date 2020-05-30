var express = require('express');
const util = require('../modules/util');
const statusCode = require('../modules/statusCode');
const resMessage = require('../modules/responseMessage');
var router = express.Router();

router.get('/recommand', async(req, res) => {
    const result = {
        "classIdx": "1",
        "name": "나만의 미니멀한 도자기 컵",
        "img" : " ",
        "price": "41600",
        "difficulty": "중",
        "term": "32일",
        "category": "공예/도자"
    }
    
    res.status(statusCode.OK)
        .send(util.success(statusCode.OK, resMessage.CLASS_FIND_ALL, result));
})

module.exports = router;
