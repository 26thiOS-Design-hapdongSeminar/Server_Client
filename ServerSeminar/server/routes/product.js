var express = require('express');
const util = require('../modules/util');
const statusCode = require('../modules/statusCode');
const resMessage = require('../modules/responseMessage');
var router = express.Router();

// 추천 작품

router.get('/recommand', async(req, res) => {
    const result = [
        {
            "recommandIdx": "1",
            "name": "예쁜꽃 긴사각접시 소",
            "img" : "https://image.idus.com/image/files/957b8ceeeb2649b5b819f6217aed8fec_1440.jpg",
            "price": "17000",
            "explain": "예나도예",
            "Like" : "695",
        },
        {
            "recommandIdx": "2",
            "name": "고양이 숨숨집 카펫 스크래쳐 방석",
            "img" : "https://image.idus.com/image/files/53679b0aecdd43bcb62244999da88d5e_1440.jpg",
            "price": "7400",
            "explain" : "코쿠모노", 
            "Like" : "143",
        },
        {
            "recommandIdx": "3",
            "name": "결혼 청첩장 액자",
            "img" : "https://image.idus.com/image/files/59d324f9b8374f9797f51b4f8bdbe750_1440.png",
            "price": "35000",
            "explain" : "담야캘리그라피", 
            "Like" : "451",
        },
        {
            "recommandIdx": "4",
            "name": "청춘목장 목장애 수제요거트",
            "img" : "https://image.idus.com/image/files/a4d159efde754e78afd606bc61cee38f_1440.jpg",
            "price": "1900",
            "explain" : "청충목장", 
            "Like" : "135",
        },
        {
            "recommandIdx": "5",
            "name": "케이크캔틀 로투스 캔틀 생일선물",
            "img" : "https://image.idus.com/image/files/42ee7e3572374709a8c56f57853570e0_1440.jpg",
            "price": "17000",
            "explain" : "우주라이트 캔들", 
            "Like" : "132",
        },
        {
            "recommandIdx": "6",
            "name": "상큼 과일 수세미",
            "img" : "https://image.idus.com/image/files/5b29ab45c8c749ebb7bedcaf49dca9de_1440.png",
            "price": "4500",
            "explain" : "슬로팅", 
            "Like" : "219",
        },
    ]

    res.status(statusCode.OK)
        .send(util.success(statusCode.OK, resMessage.RECOMAND_FIND_ALL, result));
})

// 실시간

router.get('/live', async(req, res) => {
    const result = [
        {
            "liveIdx": "1",
            "name": "제주귤 키링+에어팟케이스 세트",
            "img" : "https://image.idus.com/image/files/8ce0263b5024406481e9b1b6957d026e_1440.png",
            "price": "9900",
            "explain": "어바웃 푸켓",
            "Like" : "200",
        },
        {
            "liveIdx": "2",
            "name": "골드링 로즈 유리컵",
            "img" : "https://image.idus.com/image/files/819a349db83d4667990b63d3667f6c43_1440.png",
            "price": "15000",
            "explain": "오키프스튜디오",
            "Like" : "300",
        },
        {
            "liveIdx": "3",
            "name": "마크라메 터키석 팔찌",
            "img" : "https://image.idus.com/image/files/e070877142e24955a1fad8416b9139fa_1440.jpg",
            "price": "15000",
            "explain": "에이노트",
            "Like" : "231",
        },
        {
            "liveIdx": "4",
            "name": "하트 유리 찻잔 & 커피잔",
            "img" : "https://image.idus.com/image/files/deb87c0937244569819d941bd739e566_1440.png",
            "price": "12000",
            "explain": "오키프스튜디오",
            "Like" : "125",
        },
        {
            "liveIdx": "5",
            "name": "1+1 폰케이스",
            "img" : "https://image.idus.com/image/files/4409238ee1b94596897d02c37b4fff97_1440.jpg",
            "price": "5900",
            "explain": "룬룬",
            "Like" : "251",
        },
        {
            "liveIdx": "6",
            "name": "디큐저 커플선물",
            "img" : "https://image.idus.com/image/files/bcdaec8bd49d45bf9a9a4fe029a89b0f_1440.jpg",
            "price": "15900",
            "explain": "유얼어데이",
            "Like" : "140",
        },
    ]

    res.status(statusCode.OK)
        .send(util.success(statusCode.OK, resMessage.LIVE_FIND_ALL, result));
})

module.exports = router;