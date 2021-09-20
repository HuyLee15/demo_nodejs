const experss = require("express");
const router = experss.Router();
const authController = require("../controllers/authController");
router.route("/login").post(authController.login);
module.exports = router;