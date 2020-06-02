var express = require('express');
const util = require('../modules/util');
const statusCode = require('../modules/statusCode');
const resMessage = require('../modules/responseMessage');
var router = express.Router();
let Product = require('../models/product');

//test
router.get('/', async(req,res)=>{
    const result = await Product.testproduct();

    res.status(statusCode.OK)
        .send(util.success(statusCode.OK, resMessage.OK, result));
})

// 추천 작품
router.get('/recommend', async(req, res) => {
    const result = await Product.getRecommendProduct();

    res.status(statusCode.OK)
        .send(util.success(statusCode.OK, resMessage.RECOMAND_FIND_ALL, result));
})

// 실시간
router.get('/live', async(req, res) => {
    const result = await Product.getLiveProduct();

    res.status(statusCode.OK)
        .send(util.success(statusCode.OK, resMessage.LIVE_FIND_ALL, result));
})


module.exports = router;