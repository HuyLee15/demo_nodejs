const express = require("express");
const authorController = require("../controllers/authorController");

const router = express.Router();

router
    .route("/")
    .post(authorController.create)
    .get(authorController.getAuthor);

module.exports = router;