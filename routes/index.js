var express = require('express');
var router = express.Router();

var auth = require('./auth.js');


router.get(['/auth', '/api/v1/login', '/login'], auth.login);
module.exports = router;
