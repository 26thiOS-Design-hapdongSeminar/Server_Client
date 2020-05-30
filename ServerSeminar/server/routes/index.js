var express = require('express');
var router = express.Router();

router.use('/class', require('./class'));
router.use('product', require('./product'));

module.exports = router;
