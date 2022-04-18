const newDeveloperModel = require("../models/developerModel");
const newBatchModel = require("../models/batchModel");

const developers = async function(req,res){
    let data = req.body;
    let developerData = await newDeveloperModel.create(data);
    res.send({Data : developerData});
}    

const scholarship_developers = async function(req,res){
    let developerList = await newDeveloperModel.find({percentage : {$gte : 70},gender :"female"});
    res.send({Data : developerList});
}


const developer = async function(req,res){
    let data1 = req.query.percentage;
    let data2 = req.query.batch;
    let objId1 = await newBatchModel.find({name : data2}).select({_id : 1});
    let id = objId1[0].id;
    let objId2 = await newDeveloperModel.find({percentage : { $gte : data1}, batch : id });
    res.send({Data : objId2});
}

module.exports.developers = developers;

module.exports.scholarship_developers = scholarship_developers;

module.exports.developer = developer;