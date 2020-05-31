var express = require('express');
const util = require('../modules/util');
const statusCode = require('../modules/statusCode');
const resMessage = require('../modules/responseMessage');
var router = express.Router();


router.get('/recommand', async(req, res) => {
    const result = [
        {
            "classIdx": "1",
            "name": "나만의 세안/바디 비누만들기",
            "img" : "https://image.idus.com/image/files/325e2056c0d3414e938844f3d1ab7fca_1440.jpg",
            "price": "24000",
            "difficulty": "하",
            "term": "10일",
            "category": "뷰티",
            "Like" : "113"
        },
        {
            "classIdx": "2",
            "name": "강아지 수제간식 케이크만들기",
            "img" : "https://image.idus.com/image/files/194c225c8d714a388e84188a6dc857ab_1440.jpg",
            "price": "52000",
            "difficulty": "하",
            "term": "15일",
            "category": "체험 및 기타",
            "Like" : "521"
        },
        {
            "classIdx": "3",
            "name": "꽃다발or꽃바구니 원데이클래스",
            "img" : "https://image.idus.com/image/files/79d3bb1e67af485eac0356729fd49887_1440.jpg",
            "price": "65000",
            "difficulty": "중",
            "term": "19일",
            "category": "플라워",
            "Like" : "124"
        },
        {
            "classIdx": "4",
            "name": "공예",
            "img" : "https://image.idus.com/image/files/d088163684114de4afd89d6e67ac3957_1440.jpg",
            "price": "36000",
            "difficulty": "중",
            "term": "8일",
            "category": "공예",
            "Like" : "90"
        },
        {
            "classIdx": "5",
            "name": "레고 토이비누",
            "img" : "https://image.idus.com/image/files/81c5801dd1f0478faa6845b2d848bbaf_1440.png",
            "price": "29000",
            "difficulty": "하",
            "term": "23일",
            "category": "체험 및 기타",
            "Like" : "332"
        },
        {
            "classIdx": "6",
            "name": "리얼 감자빵 원데이 클래스",
            "img" : "https://image.idus.com/image/files/b3f30dbf770740f38fcf9823c1da8239_1440.jpg",
            "price": "47000",
            "difficulty": "중",
            "term": "5일",
            "category": "요리",
            "Like" : "412"
        },
        {
            "classIdx": "7",
            "name": "여행 풍경 인생사진 수채화 클래스",
            "img" : "https://image.idus.com/image/files/71de40b38f024655bb9e17d5237b4324_1440.jpg",
            "price": "32000",
            "difficulty": "중",
            "term": "32일",
            "category": "미술",
            "Like" : "355"
        },
    ]
    
    res.status(statusCode.OK)
        .send(util.success(statusCode.OK, resMessage.CLASS_FIND_ALL, result));
})

module.exports = router;
