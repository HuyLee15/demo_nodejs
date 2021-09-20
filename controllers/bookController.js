const asyncHandle = require("../middlewares/asyncHandle");
const Book = require("../models/Book");

module.exports = {
    getAllBook: asyncHandle(async(req, res, next) => {

        const books = await Book.getName();

        res.json({
            err: 0,
            success: true,
            data: books,
        });
    }),

    getBook: asyncHandle(async(req, res, next) => {
        const book = await Book.findById(req.params.id);
        console.log(book);

        res.json({
            err: 0,
            success: true,
            data: book,
        });
    }),

    postBook: asyncHandle(async(req, res) => {
        const { bookName, price, author, nxb } = req.body;

        const book = await Book.create({
            bookName,
            price,
            author,
            nxb,
            categoryID: req.body.categoryID,
        });

        res.json({
            err: 0,
            success: true,
            data: book,
        });
    }),

    putBook: asyncHandle(async(req, res) => {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });

        res.json({
            err: 0,
            success: true,
            data: book,
        });
    }),

    deleteBook: asyncHandle(async(req, res) => {
        const book = await Book.findOneAndDelete(req.params.id);

        if (!book) {
            return res.json({
                err: 1,
                success: false,
                data: `Cannot find Book with ID ${req.params.id}`,
            });
        };
        res.json({
            err: 0,
            success: true,
            data: {},
        });
    }),
};