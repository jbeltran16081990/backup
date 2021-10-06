const router = require('express').Router()

const  {sendMail} = require('../controllers/mail.controllers')


router.post('/send-email',sendMail);

module.exports = router