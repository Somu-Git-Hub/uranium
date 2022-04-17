const AuthorModel = require("../models/newAuthorModel")

const createAuthor = async function (req, res) {
    let data = req.body
    let authorCreated = await AuthorModel.create(data)
    res.send({data: authorCreated})
}

const getAuthorsData= async function (req, res) {
    let authors = await AuthorModel.find()
    res.send({data: authors})
}

module.exports.createAuthor = createAuthor
module.exports.getAuthorsData = getAuthorsData