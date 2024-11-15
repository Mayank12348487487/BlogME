const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync");
const {isLoggedIn} = require("../middleware");

const commentController = require("../controllers/comments");

router.post("/",isLoggedIn,wrapAsync(commentController.createComment));
router.delete("/:commentId", isLoggedIn, wrapAsync(commentController.deleteComment));

   
module.exports = router;