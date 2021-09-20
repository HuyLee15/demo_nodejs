const jwt = require("jsonwebtoken");
const secret = "123456789";
exports.adminMiddleware = (req, res, next) => {
    const token = req.headers["x-token"];
    try {
        const payload = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2MTYzMjI2NjMsImV4cCI6MTYxNjMyNjI2M30.g1psm6XBYOKMpJoRi9pPcaDIdNOHj-dNBHwiYK0ftsQ", secret);
        if (payload.role !== "admin") {
            res.status(401).send();
        }
        next();
    } catch (error) {
        res.status(401).send("Loi");
    }
};