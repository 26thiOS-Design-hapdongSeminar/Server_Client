var express = require('express');
var router = express.Router();

router.use('/class', require('./class'));
router.use('/recommand', require('./recommand'));
router.use('/live', require('./live'));

module.exports = router;
