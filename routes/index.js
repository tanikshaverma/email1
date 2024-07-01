var express = require('express');
var router = express.Router();

const emailcollection = require('../models/userSchema');
const { sendMail } = require("../utils/sendmail");

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});+

router.post('/send-mail', function (req, res, next) {

  sendMail(req, res);
});

module.exports = router;
