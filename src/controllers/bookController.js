const { count } = require("console")
const BookModel= require("../models/bookModel")
const AuthorModel = require("../models/authorModel")

/*const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {
    let allBooks= await BookModel.find( {authorName : "HO" } )
    console.log(allBooks)
    if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
    else res.send({msg: "No books found" , condition: false})
}


const updateBooks= async function (req, res) {
    let data = req.body // {sales: "1200"}
    // let allBooks= await BookModel.updateMany( 
    //     { author: "SK"} , //condition
    //     { $set: data } //update in data
    //  )
    let allBooks= await BookModel.findOneAndUpdate( 
        { authorName: "ABC"} , //condition
        { $set: data }, //update in data
        { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
     )
     
     res.send( { msg: allBooks})
}

const deleteBooks= async function (req, res) {
    // let data = req.body 
    let allBooks= await BookModel.updateMany( 
        { authorName: "FI"} , //condition
        { $set: {isDeleted: true} }, //update in data
        { new: true } ,
     )
     
     res.send( { msg: allBooks})
}*/


const createBook = async function (req, res) {
    let data = req.body;
    let dbData = await BookModel.create(data);
    res.send({msg: dbData});
}

const createAuthor = async function (req, res) {
    let data = req.body;
    let dbData = await AuthorModel.create(data);
    res.send({msg: dbData});
}

const List = async function(req,res){
    let idarray = await AuthorModel.find({author_name : "Chetan Bhagat"});
    let idNum1 = idarray[0].author_id;
    let book = await BookModel.find({author_id : idNum1}).select({name : 1, _id :0});
    res.send({book});
}

const findAndUpdate = async function(req,res){
    let authobj = await BookModel.findOneAndUpdate({name : "Two States"},{ price : 100 },{new : true});
    let idNum2 = authobj.author_id;
    let authName = await AuthorModel.find({author_id : idNum2}).select({author_name : 1,_id :0});
    let prc = await BookModel.find({name : "Two States"}).select({price : 1, _id : 0});
    res.send({Author : authName , UpdatedPrice : prc});
} 

const findBooks = async function(req,res){
    let boooks = await BookModel.find({price : {$gte : 50 , $lte : 100 }}).select({author_id : 1,_id : 0});

    const ids = boooks.map(inp => inp.author_id)
    let arr = [];
    let elem;
    for(let i = 0 ; i < boooks.length ; i++){
        let refreshId = ids[i];
        elem = await AuthorModel.find({ author_id : refreshId }).select({author_name : 1 , _id : 0});
        arr[i] = elem;
    }
    res.send({AuthorsName : arr});
}

// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE



module.exports.createBook = createBook;
module.exports.createAuthor = createAuthor;
module.exports.List = List;
module.exports.findAndUpdate = findAndUpdate;
module.exports.findBooks = findBooks;

//module.exports.getBooksData= getBooksData
//module.exports.updateBooks= updateBooks
//module.exports.deleteBooks= deleteBooks
