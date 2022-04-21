const mid = function ( req, res, next) {
    //console.log(req.headers.isfreeappuser);
    if(req.headers.isfreeappuser){
        next();
    }else{
        res.send({error : "isFreeAppUser is missing....!"});
    }
}


module.exports.mid = mid;
