const mid = function ( req, res, next) {
    if(req.headers["x-Auth-token"] || req.headers["x-auth-token"]){
        next();
    }else{
        res.send({error :"token must be prsent...!"});
    }
}

module.exports.mid = mid;