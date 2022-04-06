const express = require('express');
const _ = require('lodash');
const print = require('../logger/logger');
const date = require('../util/helper');
const month = require('../util/helper');
const getInfo = require('../util/helper');
const trimmed = require('../validator/formatter');
const text1 = require('../validator/formatter');
const text2 = require('../validator/formatter');
const text3 = require('../validator/formatter');


const router = express.Router();

router.get('/test-me', function (req, res) {
    /*console.log('I am inside the first route handler')
    console.log('The endpoint value is', logger.endpoint)
    console.log('Calling log function')
    logger.logging()*/
    print.welcome();
    date.printDate();
    month.printMonth();
    getInfo.getBatchInfo();
    trimmed.newText;
    text1.text1;
    console.log(text1.text1);
    text2.text2;
    console.log(text2.text2);
    text3.text3;
    console.log(text3.text3);
    res.send('My first ever api!')
});

router.get('/hello', function(req,res){
    let arr = ['Jan','Feb','March','April','May','June','July','August','September','October','November','December'];
    console.log(_.chunk(arr,3));



    let ar = [1,3,5,7,9,11,13,15,17,19];
    console.log(_.tail(ar));



    let a = [1,2,3];
    let b = [2,4,5];
    let c = [5,6,7];
    let d = [6,7,8];
    let e = [6,8,11];
    console.log(_.union(a,b,c,d,e));



    console.log(_.fromPairs([["Web Dev.", "node.js"],["Android Dev.","Android Studio"],["Competitive Programming","Codeforces"]]));
});

/*router.get('/test-me2', function (req, res) {
    console.log('I am inside the second route handler')
    res.send('My second ever api!')
});


router.get('/test-me5', function (req, res) {
    res.send('My final ever api!')
});

router.get('/test-me3', function (req, res) {
    res.send('My first ever api!')
});

router.get('/test-me4', function (req, res) {
    res.send('My first ever api!')
});*/

module.exports = router;
// adding this comment for no reason