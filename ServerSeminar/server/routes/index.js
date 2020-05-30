var express = require('express');
var router = express.Router();

router.use('/class', require('./class'));
router.use('/recommand', require('./recommand'));

module.exports = router;
