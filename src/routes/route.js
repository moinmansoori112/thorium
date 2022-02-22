//const obj = require('./logger')
const express = require('express');
const router = express.Router();

router.get('/students/:name', function (req, res) {
    let studentName = req.params.name
  //  obj.printMessage('Call Welcome')
    console.log(studentName)
   // res.send('Welcome to my application. I am Moin and a part of Function Up Thorium Cohort!')
   res.send('123456')
});

module.exports = router;