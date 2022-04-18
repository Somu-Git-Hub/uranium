const authorModel = require("../models/authorModel")
const newAuthorModel = require("../models/newAuthorModel");
const newBookModel = require("../models/newBookModel");
const bookModel = require("../models/newBookModel")
const newPublisherModel = require("../models/newPublisherModel")

const createBook = async function (req, res) {
    let flag1 = true;
    let flag2 = true;
    let data = req.body;
    let id_author = data.author;
    let id_publisher = data.publisher;
    let createBookEntry;
    if(id_author && id_publisher){
        if(await newAuthorModel.findById(id_author) && await newPublisherModel.findById(id_publisher)){
            createBookEntry = await bookModel.create(data);
        }else if(!(await newAuthorModel.findById(id_author))){ 
            flag1 = false;
        }if(!(await newPublisherModel.findById(id_publisher))){
            flag2 = false;
        }if(flag1 == true && flag2 == true){
            res.send({Data : createBookEntry})
        }else if(flag1 == false && flag2 == false){
            res.send({error: "The author_id is not present in the Author collection and the publisher_id is not present in the Publisher collection.."})
        }else if(flag1 == true && flag2 == false){
            res.send({error: "The publisher_id is not present in the Publisher collection.."})
        }else if(flag1 == false && flag2 == true){
            res.send({error: "The author_id is not present in the Author collection.."})
        }
    }else{
        if(!id_author && !id_publisher){
            res.send({error : "The autor_id and publisher_id is rquired.!!!" });
        }else if(!id_publisher){
            res.send({error : "The publisher_id is rquired.!!!" });
        }else if(!id_author){
            res.send({error : "The author_id is required.!!!"});
        }
    }
}


const getBooks = async function (req, res) {
    let Books = await bookModel.find().populate('author').populate('publisher');
    res.send({Data : Books});

}

const books = async function(req,res){
    let fetchData = await newPublisherModel.find({name :{$in : ['Penguin','HarperCollins']}}).select({_id : 1})
    let arr = [];
    for(let i = 0 ; i < fetchData.length ; i++){
        arr.push(fetchData[i].id)
    }
    let updatedData= await newBookModel.updateMany({publisher :{$in : arr}},{isHardCover : true});
    res.send({Data : updatedData});
}

/*const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}*/


module.exports.createBook = createBook

module.exports.books = books

module.exports.getBooks = getBooks

module.exports.books = books

//module.exports.getBooksData = getBooksData