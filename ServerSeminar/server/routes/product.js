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