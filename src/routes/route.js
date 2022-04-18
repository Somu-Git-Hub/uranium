const express = require('express');
const router = express.Router();

const authorController = require("../controllers/authorController")
const bookController = require("../controllers/bookController")
const publisherController = require("../controllers/publisherController");
const batchController = require("../controllers/batchController");
const developerController = require("../controllers/developerController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/batches",batchController.batches);

router.post("/developers",developerController.developers);

router.get("/scholarship_developers",developerController.scholarship_developers);

router.get("/developer",developerController.developer)

/*router.post("/createAuthor", authorController.createAuthor)

router.post("/creatPublisher", publisherController.createPublisher)

router.post("/createBook", bookController.createBook)

router.get("/getBooks", bookController.getBooks)

router.put("/books",bookController.books)*/

/*router.get("/getBooksData", bookController.getBooksData)

router.get("/getAuthorsData", authorController.getAuthorsData)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)*/

module.exports = router;