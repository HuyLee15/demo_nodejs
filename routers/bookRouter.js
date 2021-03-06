const express = require("express");

const router = express.Router({ mergerParams: true });

const bookController = require("../controllers/bookController");

router
    .route("/")
    .get(bookController.getAllBook)
    .post(bookController.postBook);
router
    .route("/:id")
    .get(bookController.getBook)
    .put(bookController.putBook)
    .delete(bookController.deleteBook);

module.exports = router;