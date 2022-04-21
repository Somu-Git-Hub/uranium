const productModel = require("../models/productModel");

const createProduct = async function(req,res){
    let data = req.body;
    let createProductData = await productModel.create(data);
    res.send({Data : createProductData});
}

module.exports.createProduct = createProduct;