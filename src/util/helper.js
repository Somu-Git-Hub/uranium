let today = new Date();

let printDate = function(){
    console.log("The current date is : " + today.getDate());
}

let printMonth = function(){
    console.log("The current Month is : " + today.getMonth());
}

let getBatchInfo = function(){
    console.log("The name of the batch is : Uranium ,this is W3D3 and the topic for today is intro to nodejs.");
}

module.exports.printDate = printDate;
module.exports.printMonth = printMonth;
module.exports.getBatchInfo = getBatchInfo;