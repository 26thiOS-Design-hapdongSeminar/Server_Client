var express = require('express');
const util = require('../modules/util');
const statusCode = require('../modules/statusCode');
const resMessage = require('../modules/responseMessage');
var router = express.Router();

router.get('/write', async (req, res) => {
    const result = [ 
        {
            "classIdx": "1",
            "explain" : "321팩토리",
            "Like" : "234",
            "img" : "",
        },
        {
            "classIdx": "2",
            "explain" : "김보람 초콜릿",
            "Like" : "123",
            "img" : "",
        },
        {
            "classIdx": "3",
            "explain" : "소유템",
            "Like" : "99",
            "img" : "",
        },
    ]

    res.status(statusCode.OK)
        .send(util.success(statusCode.OK, resMessage.POPULAR_WRITE_FIND_ALL, result));
})

module.exports = router;