const express = require('express');

const router = express.Router();

/*router.get('/test-me', function (req, res) {
    // let a = { msg: "My first ever API response in JSON !!"} 


    res.send( { msg: "My first ever API response in JSON !!"} )
});

router.get('/test-api1', function (req, res) {

    res.send( "hi FunctionUp " )
});

router.get('/test-api2', function (req, res) {

    res.send( { msg: "Hi FUnctionUp..again !"} )
});

router.get('/test-api3', function (req, res) {

    res.send( { msg: "Hi FUnctionUp..again..this is another similar api !"} )
});

router.get('/test-api4', function (req, res) {

    res.send( { msg: "Hi FUnctionUp..again..this is another similar api ..not I am getting bored!"} )
});


router.get('/test-api5', function (req, res) {

    res.send( { msg: "Hi FUnctionUp" , name:"FunctionUp", age: "100"} )
});

router.get('/test-api6', function (req, res) {

    res.send( {   data: [12, 24, 36, 48, 60]  }   )
});

router.post('/test-post1', function (req, res) {

    res.send( {  msg: "hi guys"  }   )
});

// to send data in  post request-> prefer sending in BODY -> click body-raw-json
router.post('/test-post2', function (req, res) {
    let data= req.body
    console.log(data)
    res.send( {  msg: "hi guys..my 2nd post req"  }   )
});*/

let players = [
    {
        "name" : "Virat",
        "dob" : "10/05/1995",
        "gender" : "male",
        "city" : "New Delhi",
        "sports" : ["cricket","swimming","hockey"]
    },
    {
        "name" : "Rohit",
        "dob" : "01/08/1990",
        "gender" : "male",
        "city" : "Mumbai",
        "sports" : ["football","hockey"]
    },
    {
        "name" : "Dhoni",
        "dob" : "25/01/1999",
        "gender" : "male",
        "city" : "Ranchi",
        "sports" : ["swiming","badminton"]
    },
    {
        "name" : "Sourav",
        "dob" : "15/11/1988",
        "gender" : "male",
        "city" : "Kolkata",
        "sports" : ["cricket","chess"]
    },
    {
        "name" : "Rohit",
        "dob" : "05/12/2000",
        "gender" : "male",
        "city" : "Chennai",
        "sports" : ["football"]
    }
];

let play = []; 

router.post('/players',function(req,res) {
    for(let ind = 0 ; ind < players.length ; ind++){
        play.push(players[ind]);
    }
    for(let i = 0 ; i < play.length ; i++){
        for( let j = i+1 ; j < play.length ; j++){
            if(play[i].name === play[j].name){
                play.splice(j,1);
            }
        }
    }
    res.send(play);
});


/*const randomController= require("../controllers/randomController.js")
//write a post request to accept an element in post request body and add it to the given array and return the new array
router.post('/test-post3', randomController.addToArray ); //HANDLER/CONTROLLER*/

module.exports = router;
