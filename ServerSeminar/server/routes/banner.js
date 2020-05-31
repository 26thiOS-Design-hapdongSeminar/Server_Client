var express = require('express');
const util = require('../modules/util');
const statusCode = require('../modules/statusCode');
const resMessage = require('../modules/responseMessage');
var router = express.Router();


router.get('/', async(req, res) => {
    const result = [
        {
            "imgIdx" : "1",
            "img" : "https://image.idus.com/image/files/b34053a7dbf84a7abdf9d91c0a75910f.jpg"
        },
        {
            "imgIdx" : "2",
            "img" : "https://image.idus.com/image/files/42a3b4d58579414e9a701ffdc7357947.jpg"
        },
        {
            "imgIdx" : "3",
            "img" : "https://image.idus.com/image/files/08db9334ca304dd38a2f72822a51ae66.jpg"
        },
        {
            "imgIdx" : "4",
            "img" : "https://image.idus.com/image/files/70e36376ecdc424c965d664e0bf151b7.jpg"
        },
        {
            "imgIdx" : "5",
            "img" : "https://image.idus.com/image/files/17b0a44e163a496db152e1679b967c15.png"
        },
        {
            "imgIdx" : "6",
            "img" : "https://image.idus.com/image/files/a989f970b5994b8995bbd40edef29662.jpg"
        },
        {
            "imgIdx" : "7",
            "img" : "https://image.idus.com/image/files/1fcc98b600754f80aeec5e70a4ad43ef.jpg"
        },
    ]
    
    res.status(statusCode.OK)
        .send(util.success(statusCode.OK, resMessage.BANNER_IMG_FIND_ALL, result));
})

module.exports = router;