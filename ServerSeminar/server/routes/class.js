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
            "term" : "2개월",
            "remain": "10일",
            "category": "뷰티",
            "Like" : "113"
        },
        {
            "classIdx": "2",
            "name": "강아지 수제간식 케이크만들기",
            "img" : "https://image.idus.com/image/files/194c225c8d714a388e84188a6dc857ab_1440.jpg",
            "price": "52000",
            "difficulty": "하",
            "term" : "3개월",
            "remain": "15일",
            "category": "체험 및 기타",
            "Like" : "521"
        },
        {
            "classIdx": "3",
            "name": "꽃다발or꽃바구니 원데이클래스",
            "img" : "https://image.idus.com/image/files/79d3bb1e67af485eac0356729fd49887_1440.jpg",
            "price": "65000",
            "difficulty": "중",
            "term" : "4개월",
            "remain": "19일",
            "category": "플라워",
            "Like" : "124"
        },
        {
            "classIdx": "4",
            "name": "공예",
            "img" : "https://image.idus.com/image/files/d088163684114de4afd89d6e67ac3957_1440.jpg",
            "price": "36000",
            "difficulty": "중",
            "term" : "2개월",
            "remain": "8일",
            "category": "공예",
            "Like" : "90"
        },
        {
            "classIdx": "5",
            "name": "레고 토이비누",
            "img" : "https://image.idus.com/image/files/81c5801dd1f0478faa6845b2d848bbaf_1440.png",
            "price": "29000",
            "difficulty": "하",
            "term" : "3개월",
            "remain": "23일",
            "category": "체험 및 기타",
            "Like" : "332"
        },
        {
            "classIdx": "6",
            "name": "리얼 감자빵 원데이 클래스",
            "img" : "https://image.idus.com/image/files/b3f30dbf770740f38fcf9823c1da8239_1440.jpg",
            "price": "47000",
            "difficulty": "중",
            "term" : "2개월",
            "remain": "5일",
            "category": "요리",
            "Like" : "412"
        },
        {
            "classIdx": "7",
            "name": "여행 풍경 인생사진 수채화 클래스",
            "img" : "https://image.idus.com/image/files/71de40b38f024655bb9e17d5237b4324_1440.jpg",
            "price": "32000",
            "difficulty": "중",
            "term" : "4개월",
            "remain": "32일",
            "category": "미술",
            "Like" : "355"
        },
    ]
    
    res.status(statusCode.OK)
        .send(util.success(statusCode.OK, resMessage.CLASS_FIND_ALL, result));
})

router.get('/progress', async(req, res) => {
    const result = [
        {
            "classIdx": "1",
            "name": "빈 종이를 채워가는 아날로그 취미, 딥펜캘리그래피",
            "img" : "https://image.idus.com/image/files/3a5fcb5c261c4c73b4c1323acc9059f3_1080.jpg",
            "price": "37000",
            "difficulty": "하",
            "term" : "3개월",
            "remain": "15일",
            "category": "캘리그라피/레터링",
            "Like" : "926"
        },
        {
            "classIdx": "2",
            "name": "나만의 속도에 맞춰 즐기는 따뜻한 취미, 뜨개질 클래스",
            "img" : "https://image.idus.com/image/files/194c225c8d714a388e84188a6dc857ab_1440.jpg",
            "price": "41500",
            "difficulty": "중",
            "term" : "3개월",
            "remain": "18일",
            "category": "뜨개/퀼트/재봉",
            "Like" : "565"
        },
        {
            "classIdx": "3",
            "name": "나의 손끝으로 직접 표현하는 반지, 은공예 클래스",
            "img" : "https://image.idus.com/image/files/ff2e8a71c3994c0a9b1a9a2e8cdf0ea2_1080.jpg",
            "price": "65000",
            "difficulty": "하",
            "term" : "6개월",
            "remain": "24일",
            "category": "레진/점토/글라스",
            "Like" : "1058"
        },
        {
            "classIdx": "4",
            "name": "문지르면 피어나는 풍경화, 오일파스텔 클래스",
            "img" : "https://image.idus.com/image/files/2177f7657904449caf619de4e6e5f5ac_1080.jpg",
            "price": "38333",
            "difficulty": "중",
            "term" : "6개월",
            "remain": "8일",
            "category": "스케치/드로잉",
            "Like" : "1119"
        },
        {
            "classIdx": "5",
            "name": "레고",
            "img" : "https://image.idus.com/image/files/81c5801dd1f0478faa6845b2d848bbaf_1440.png",
            "price": "29000",
            "difficulty": "하",
            "term" : "4개월",
            "remain": "23일",
            "category": "체험 및 기타",
            "Like" : "332"
        },
        {
            "classIdx": "6",
            "name": "내 손으로 직접 피워내는 꽃, 페이퍼 플라워 클래스",
            "img" : "https://image.idus.com/image/files/4c232e23b8f5439499b01b44a0583fd4_1080.jpg",
            "price": "36667",
            "difficulty": "하",
            "term" : "3개월",
            "remain": "10일",
            "category": "종이/페이퍼",
            "Like" : "252"
        },
        {
            "classIdx": "7",
            "name": "꽃 향기가 느껴지는 특별함, 초콜릿크림 플라워 케이크",
            "img" : "https://image.idus.com/image/files/750996c288ac44af9994558b9c741033_1080.jpg",
            "price": "46667",
            "difficulty": "하",
            "term" : "3개월",
            "remain": "4일",
            "category": "쿠킹/디저트",
            "Like" : "549"
        },
    ]

    res.status(statusCode.OK)
        .send(util.success(statusCode.OK, resMessage.CLASS_FIND_ALL, result));
})



module.exports = router;
