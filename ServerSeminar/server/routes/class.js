var express = require('express');
const util = require('../modules/util');
const statusCode = require('../modules/statusCode');
const resMessage = require('../modules/responseMessage');
var router = express.Router();
let classmodels = require ('../models/class');

//추천 클래스
router.get('/recommend', async(req, res) => {
    const result = await classmodels.getRecommendClass();

    res.status(statusCode.OK)
        .send(util.success(statusCode.OK, resMessage.CLASS_FIND_ALL, result));
})

//진행중인 클래스 중 인기 클래스
router.get('/progress/popular', async(req, res) => {
    const result = await classmodels.getProgressClassPopular();

    res.status(statusCode.OK)
        .send(util.success(statusCode.OK, resMessage.CLASS_FIND_ALL, result));
})



module.exports = router;
