const ErrorRespone = require("../helpers/ErrorRespone");

const errorHandle = (err, req, res, next) => {

    let error = {...err };

    console.log(err.name);

    if (err.name === "ValidationError") {
        const message = Object.values(err.errors).map(v => v.message);
        error = new ErrorRespone(400, message);
    }
    if (err.code === 11000) {
        const message = "Duplicate value.";
        error = new ErrorRespone(400, message);
    }
    if (err.name === "CastError") {
        const message = "can not find resource.";
        error = new ErrorRespone(404, message);
    }

    res.status(error.statusCode).json({
        err: 1,
        success: false,
        data: error.message,
    });

}

module.exports = errorHandle;