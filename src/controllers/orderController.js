const orderModel = require("../models/orderModel");
const userModel = require("../models/userModel");
const productModel = require("../models/productModel");

const createOrder = async function(req,res){
    let data = req.body;
    let user =  req.body.userId;
    let product = req.body.productId;

    if(!(req.body.userId)) {
        return res.send({message: "Please enter a userId.."})   
    }

    if(!(await userModel.findById(req.body.userId))){
        return res.send({error :"The entered user doesn't exist.. Please enter a valid userId."});
    }

    if(!(req.body.productId)) {
        return res.send({message: "Please enter a productId.."})   
    }

    if(!(await productModel.findById(req.body.productId))){
        return res.send({error :"The entered product doesn't exist.. Please enter a valid productId."});
    }

    let detUser = await userModel.findOne({_id : user}).select({balance : 1,name :1, _id : 0})
    console.log(detUser);
    let detProduct = await productModel.findOne({_id : product}).select({price : 1,name :1,category :1, _id : 0})
    console.log(detProduct);


    if(req.headers.isfreeappuser == "false"){
        if(detUser.balance < detProduct.price){
            return res.send({Message : "Insufficient balance..."})
        }
    }

    if(req.headers.isfreeappuser == "false"){
        if(detUser.balance > detProduct.price){
            let createdData = await orderModel.create(data);
            let updatedData = await orderModel.findByIdAndUpdate({_id : createdData._id},{$set : {amount :detProduct.price,isFreeAppUser : false}},{upsert : true});S
            return res.send({Created : updatedData});
        }
    }

    if(req.headers.isfreeappuser == "true"){
        let createdData = await orderModel.create(data);
        let updatedData = await orderModel.findByIdAndUpdate({_id : createdData._id},{$set : {amount :0,isFreeAppUser : true,date : new Date()}},{upsert : true});
        return res.send({Created : updatedData});
    }
}

module.exports.createOrder = createOrder;