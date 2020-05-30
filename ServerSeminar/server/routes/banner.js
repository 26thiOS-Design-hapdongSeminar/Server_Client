var express = require('express');
const util = require('../modules/util');
const statusCode = require('../modules/statusCode');
const resMessage = require('../modules/responseMessage');
var router = express.Router();


router.get('/', async(req, res) => {
    const result = [
        {
            "imgIdx" : "1",
            "img" : ""
        },
        {
            "imgIdx" : "2",
            "img" : ""
        },
        {
            "imgIdx" : "3",
            "img" : ""
        },
    ]
    
    res.status(statusCode.OK)
        .send(util.success(statusCode.OK, resMessage.BANNER_IMG_FIND_ALL, result));
})

module.exports = router;