const newBatchModel = require("../models/batchModel");

const batches = async function(req,res){
    let data = req.body;
    let batchData = await newBatchModel.create(data);
    res.send({Data : batchData});
}

module.exports.batches = batches;