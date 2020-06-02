var express = require('express');
const util = require('../modules/util');
const statusCode = require('../modules/statusCode');
const resMessage = require('../modules/responseMessage');
var router = express.Router();
let Banner = require('../models/banner');


router.get('/', async(req, res) => {
    const result = await Banner.getBanner();
    
    res.status(statusCode.OK)
        .send(util.success(statusCode.OK, resMessage.BANNER_IMG_FIND_ALL, result));
})

module.exports = router;