var express = require('express');
var router = express.Router();

const emailcollection = require('../models/userSchema');
const { sendMail } = require("../utils/nodemailer");

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});



router.get('/sentmail', function (req, res, next) {
  res.render('sentmail')
})

router.post('/sentmail', function (req, res, next) {
  res.render('sentmail')
})

module.exports = router;
