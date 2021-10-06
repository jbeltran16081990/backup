'use strict'
const router = require('express').Router();
const {wakeUpBack} = require('../controllers/home.controller');

router.get('/home',wakeUpBack);

module.exports = router
