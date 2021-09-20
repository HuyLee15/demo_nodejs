const asyncHandle = require("../middlewares/asyncHandle");
const Author = require("../models/Author");

module.exports = {
    create: asyncHandle(async(req, res, next) => {
        const author = await Author.create(req.body);
        res.json({
            success: true,
            data: author,
        });
    }),

    getAuthor: asyncHandle(async(req, res, next) => {
        const authors = await Author.findOne().select("+pass");

        res.json({
            success: true,
            data: authors,
        });
    }),
}