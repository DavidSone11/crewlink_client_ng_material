var express = require('express');
var router = express.Router();

var auth = require('./auth.js');


router.post(['/auth', '/api/v1/auth', '/login'], auth.login);
module.exports = router;
