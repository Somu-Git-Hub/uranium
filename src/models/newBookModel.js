const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    name : String,
    author :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "NewAuthor",
        required : true
    },
    price : Number,
    ratings : Number,
    publisher :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "NewPublisher",
        required : true
    },
    isHardCover :{
        type : Boolean,
        default : false
    }
}, {timestamps : true});


module.exports = mongoose.model('NewBook',BookSchema);