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

router.use('/review', async(req, res) => {
    const result = [
        {
            "reviewIdx" : "1",
            "classIdx" : "1",
            "nickName" : "다 괜찮을거야",
            "img" : "https://image.idus.com/image/files/7591d39c8f4742eebbb251185dfa340d_1440.jpg",
            "className" : "여름용 쿨~ 청정마스크",
            "mainText" : "작가님 작업도 빠르게 요청사항도 다 반영해주셔서 감사합니다 애들 꺼 사이즈 안 맞음 어쩌나 햇는데 아주 딱이네요.더운 여름에 에어메쉬로 된 마스크 쓰니 시원합니다.",
        },
        {
            "reviewIdx" : "2",
            "classIdx" : "2",
            "nickName" : "김성엽",
            "img" : "https://image.idus.com/image/files/03f47335b7b84fdba3a5a37ff911c01c_1440.jpg",
            "className" : "라이트 스마트폰 장지갑",
            "mainText" : "블랙 색상 구매해서 사용하고 있는데 안에 수납공간도 넉넉해서 영수증 잔뜩 넣고도 인감도장이나 핸드폰도 잘 들어가요.",
        },
        {
            "reviewIdx" : "3",
            "classIdx" : "4",
            "nickName" : "이효정",
            "img" : "https://image.idus.com/image/files/bcf2d249d7e1401cb8f5a185829d81a8_1440.jpg",
            "className" : "반짝반짝 빛이나는 캘리골프공",
            "mainText" : "너무 예쁘게 잘 만들어 주셔서 감사합니다. 엄빠가 받으시고 넘 예쁘다고 좋아하셨어요~월요일에 골프 가시는데 이공으로 쳐야겠대요.",
        },
        {
            "reviewIdx" : "4",
            "classIdx" : "6",
            "nickName" : "차지예",
            "img" : "https://image.idus.com/image/files/1a4a33ccdd5b4536bd433494d360d27d_1440.jpg",
            "className" : "컬러자수 스크런치 곱창끈",
            "mainText" : "스크런치의 자수 부분에 엉성한 느낌이 없이 화사하고 탄성 또한 적절합니다 증정으로 보내주신 키링도 좋아하는 색감에다 앙증맞아서 아주아주 만족스럽습니다",
        }
    ]

    res.status(statusCode.OK)
    .send(util.success(statusCode.OK, resMessage.PRODUCT_REVIEW_FIND_ALL, result));
})

module.exports = router;