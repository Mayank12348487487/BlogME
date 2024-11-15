const express = require("express");
const { route } = require("./post");
const router = express.Router();
const userController = require("../controllers/user");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware");


router
.route("/signup")
.get(userController.renderSignupForm)
.post(wrapAsync(userController.signup));


router
.route("/login")
.get(userController.renderLoginForm)
.post(saveRedirectUrl,passport.authenticate("local",{failureFlash:true,failureRedirect:"/login"}),wrapAsync(userController.login));

router
.route("/logout")
.get(userController.logout);

module.exports = router;