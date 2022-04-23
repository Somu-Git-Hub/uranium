const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  try {
    let data = req.body
    if ( Object.keys(data).length != 0 ) {
      let savedData = await userModel.create(data);
      res.status(201).send({ msg: savedData });
    }
    else{
      res.status(400).send({ msg: "Data is not present ...!"});
    } 
  }
  catch (err) {
    res.status(500).send({ msg: "Error", error: err.message });
  }
};



const loginUser = async function (req, res) {
  try{
    let userName = req.body.emailId;
    let password = req.body.password;
    if(!(userName && password)){
      res.status(400).send({err : "Username and Password must be provided...!"});
    }else{
      let user = await userModel.findOne({ emailId: userName, password: password });
      if (!user){
        res.status(401).send({status: false, msg: "Username or the Password is not corerct...!"});
      }else{
        let token = jwt.sign(
          {
            userId: user._id.toString(),
            batch: "thorium",
            organisation: "FUnctionUp",
          },
          "functionup-thorium"
        );
        //res.setHeader("x-auth-token", token);
        res.status(200).send({ status: true, data: token });
      }
    }
  }  
  catch(err){
    res.status(500).send({ msg: "Error", error: err.message });
  }
};



const getUserData = async function (req, res) {
  try{
    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    /*if (!userDetails){
      return res.send({ status: false, msg: "No such user exists" });
    }*/
    res.status(200).send({ status: true, data: userDetails });
  }
  catch(err ){
    res.status(500).send({ msg: "Error", error: err.message });
  }
};



const updateUser = async function (req, res) {
  try{
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    let userData = req.body;
    if(Object.keys(userData).length == 0){
      res.status(400).send({err: "Data is not present in the body..!"});
    }else{
      let updatedUser = await userModel.findOneAndUpdate({ _id: userId },userData,{new : true});
      res.status(200).send({ status: true, data: updatedUser});
    }
  }
  catch(err){
    res.status(500).send({ msg: "Error", error: err.message });
  }
};



const deleteUser = async function (req, res) {
  try{
    let userId = req.params.userId;
    let user = await userModel.findById(userId);  
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, { $set: {isDeleted: true}} , { new: true });
    
    res.status(200).send({ status: true, data: updatedUser });
  }
  catch(err){
    res.status(500).send({ msg: "Error", error: err.message });
  }
};



module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser;