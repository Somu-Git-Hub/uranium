const mongoose = require('mongoose');

/*const userSchema = new mongoose.Schema( {
    firstName: String,
    lastName: String,
    mobile: {
        type: String,
        unique: true,
        required: true
    },
    emailId: String,
    gender: {
        type: String,
        enum: ["male", "female", "LGBTQ"] //"falana" will give an error
    },
    age: Number,
    // isIndian: Boolean,
    // parentsInfo: {
    //     motherName: String,
    //     fatherName: String,
    //     siblingName: String
    // },
    // cars: [ String  ]
}, { timestamps: true });*/

const BookSchema = new mongoose.Schema( {
    bookName : {
        type : String,
        required : true
    },
    price : {
        type : String , 
        
    }
}, { timestamps: true });



module.exports = mongoose.model('User', userSchema) //users



// String, Number
// Boolean, Object/json, array