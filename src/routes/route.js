const express = require('express');
const logger = require('./logger');
const router = express.Router();


//Problem 1

router.get('/movies', function(req, res) {
   let arr = ['Rang De Basanti','Padman','Sing is King','Border'];
   res.send(arr);
});


//Problem 2

router.get('/movies/:index', function(req, res) {
    let arr = ['Rang De Basanti','Padman','Sing is King','Border'];
    res.send(arr[req.params.index]);
 });


//Problem 3

 router.get('/movie/:index1', function(req, res) {
    let arr = ['Rang De Basanti','Padman','Sing is King','Border'];
    if(req.params.index1 > arr.length){
        res.send("Please enter a valid index.");
    }else{
        res.send(arr[req.params.index1]); 
    }
 });


//Problem 4

 router.get('/films', function(req, res) {
    let arr = [
        {
            "id" : 1,
            "name" : "Rang De Basanti"
        },
        {
            "id" : 2,
            "name" : "Padman"
        },
        {
            "id" : 3,
            "name" : "Sing is King"
        }
    ];
    res.send(arr);
 });


//Problem 5

router.get('/films/:filmId', function(req, res) {
    let arr = [
        {
            "id" : 0,
            "name" : "Rang De Basanti"
        },
        {
            "id" : 1,
            "name" : "Padman"
        },
        {
            "id" : 2,
            "name" : "Sing is King"
        }
    ];
    
    let flag = false;
    for(let i = 0 ; i < arr.length ; i++){
        if(req.params.filmId == arr[i].id){
            flag = true;
            break;
        }
    }
    if(flag == true){
        res.send(arr[req.params.filmId]);
    }else{
        res.send("No such movie is present!");
    }
});


/*router.get('/test-me', function (req, res) {
    console.log('------------------')
    console.log(req)
    console.log('------------------')
    console.log('These are the request query parameters: ', req.query)
    res.send('My first ever api!')
});*/

module.exports = router;
// adding this comment for no reason