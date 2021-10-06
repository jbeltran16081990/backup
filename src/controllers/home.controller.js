'use strict'
const wakeUpBack = (req,res,next) => {
    res.status(200).json({
        message: 'wokrs'
    });
};

module.exports = {wakeUpBack};