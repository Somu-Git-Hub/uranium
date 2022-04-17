const PublisherModel = require("../models/newPublisherModel");

const createPublisher = async function(req,res){
    let data = req.body;
    publisherCreated = await PublisherModel.create(data);
    res.send({data : publisherCreated});
}

module.exports.createPublisher = createPublisher;