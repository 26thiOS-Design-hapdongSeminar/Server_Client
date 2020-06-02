var express = require('express');
const util = require('../modules/util');
const statusCode = require('../modules/statusCode');
const resMessage = require('../modules/responseMessage');
var router = express.Router();
let writerModel = require ('../models/writer');

router.get('/writer', async (req, res) => {

    const result = await writerModel.getWriter();

    res.status(statusCode.OK)
        .send(util.success(statusCode.OK, resMessage.POPULAR_WRITE_FIND_ALL, result));
})

module.exports = router;