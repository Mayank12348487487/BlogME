const Comment = require("../models/comments");
const postListing = require("../models/post");


module.exports.createComment = async (req, res) => {
    try {
        // Fetch the post by its ID
        let post = await postListing.findById(req.params.id).populate("comments"); // Populate comments if needed
        
        // Check if the post exists
        if (!post) {
            req.flash("error", "Post not found");
            return res.redirect("/posts");
        }

        // Create a new comment
        let newComment = new Comment(req.body.comment);
        newComment.owner = req.user._id;
        newComment.post = req.params.id; // Use req.params.id for the post ID

        // Save the new comment
        await newComment.save();

        // Add the comment ID to the post's comments array
        post.comments.push(newComment._id);

        // Save the updated post
        await post.save();

        req.flash("success", "Comment added successfully");
        res.redirect(`/posts/${post._id}`); // Redirect to the specific post
    } catch (error) {
        console.error(error); // Log the error for debugging
        req.flash("error", "Something went wrong while adding the comment");
        res.redirect(`/posts/${req.params.id}`); // Redirect to the specific post
    }
};


module.exports.deleteComment = async (req, res) => {
    let {id,commentId} = req.params;
    await postListing.findByIdAndUpdate(id,{ $pull: { comments: commentId } });
    await Comment.findByIdAndDelete(commentId);
    req.flash("success", "Comment deleted successfully");
    res.redirect(`/posts/${id}`)
};

