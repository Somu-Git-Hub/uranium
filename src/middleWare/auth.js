const jwt = require("jsonwebtoken");

const mid = function ( req, res, next) {
    try{
        let token = (req.headers["x-Auth-token"] || req.headers["x-auth-token"]);
        if(!token){
            res.status(400).send({error : "Token must be present...!"});
        }else{
            let decodedToken = jwt.verify(token, "functionup-thorium");
            if (!decodedToken){
                res.status(400).send({ status: false, msg: "Token is invalid" });
            }else{
                let userToBeModified = req.params.userId;
                let userLoggedIn = decodedToken.userId;
                if(userToBeModified == userLoggedIn){
                    next();
                }else{
                    return res.status(500).send({status: false, msg: "User logged is not allowed to access or modify the requested users data"});
                }    
            }
        }
    }
    catch(err){
        res.status(500).send({ msg: "Error", error: err.message})
    }
}

module.exports.mid = mid;