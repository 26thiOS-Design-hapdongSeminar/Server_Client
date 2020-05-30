var express = require('express');
var router = express.Router();

router.use('/class', require('./class'));

module.exports = router;
