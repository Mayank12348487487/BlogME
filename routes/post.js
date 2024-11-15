const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const {validatePost, isLoggedIn,saveRedirectUrl} = require("../middleware");
const postController = require("../controllers/post");
const multer = require("multer");
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage });


router
  .route("/myposts")
  .get(isLoggedIn, wrapAsync(postController.myPosts));
router
.route("/")
.get(wrapAsync(postController.allpost))
.post(isLoggedIn,upload.single("post[image]"),validatePost,wrapAsync(postController.createPost));

router
.route("/new")
.get(isLoggedIn,postController.renderNewFormPost);



router
.route("/:id")
.get(wrapAsync(postController.particularpost))
.put(isLoggedIn,upload.single("post[image]"),validatePost,wrapAsync(postController.editPost))
.delete(isLoggedIn,wrapAsync(postController.deletePost));

router
.route("/:id/edit")
.get(isLoggedIn,wrapAsync(postController.renderEditForm));

router
.route("/categories/:categories")
.get(wrapAsync(postController.listByCategory));

// router.post('/posts/:id/likes', isLoggedIn, wrapAsync(postController.likePost));

router 
.route("/:id/likes")
.post(saveRedirectUrl,isLoggedIn,  wrapAsync(postController.likePost));

router.route("/:id/analytics")
  .get(isLoggedIn, wrapAsync(postController.analytics));

module.exports = router