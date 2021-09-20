const jwt = require("jsonwebtoken");

const user = {
    name: "Huy",
    id: "123445",
    role: "admin",
};
const secret = "123456789";

const token = jwt.sign({ username: rows.username }, secret, { expiresIn: 60 });