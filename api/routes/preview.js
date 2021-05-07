var express = require('express');
var router = express.Router();
const yup = require('yup')
const yupPhone = require('yup-phone')

var { check, validationResult, matchedData } = require('express-validator')
var nodemailer = require("nodemailer");
var csrf = require('csurf');
var csrfProtection = csrf({ cookie: true });


var generateHTMLEmail = require('../utils/htmlEmail')

router.post('/',async(req,res) => {
    console.log(req.body)
    res.send({
        __html: generateHTMLEmail(req.body.emailHeading,req.body.emailTopics,req.body.aboveTOC,req.body.belowTOC)
    })
})

module.exports = router;