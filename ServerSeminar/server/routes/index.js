var express = require('express');
var router = express.Router();

router.use('/class', require('./class'));
router.use('/product', require('./product'));
router.use('/popular', require('./popular'));
router.use('/banner', require('./banner'));

module.exports = router;
