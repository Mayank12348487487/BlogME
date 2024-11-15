const postListing = require("../models/post");



module.exports.allpost = async(req,res)=>{
  
    const allpost =  await postListing.find({});
  
     res.render("post/allpost.ejs",{allpost});
 
 };

 module.exports.renderNewFormPost =(req,res)=>{
    res.render("post/newform.ejs");
} 

module.exports.particularpost = async (req, res) => {
    let { id } = req.params;
    let post = await postListing.findById(id)
        .populate({
            path: 'comments',
            populate: {
                path: 'owner', // Populate the owner for each comment
                select: 'username' // Select only the username field
            }
        })
        .populate('owner');
  
    if (!post) {
        req.flash("error", "Post Not Found || Post has been deleted by the owner");
        return res.redirect("/posts");
    }

    res.render("post/particularpost.ejs", { post });
};


module.exports.createPost = async(req,res,next)=>{
    let url = req.file.path;
    let filename = req.file.filename;
  
    const newpost =new postListing(req.body.post);
    newpost.owner = req.user._id
    newpost.image ={url, filename};
   await newpost.save();
   req.flash("success","Post is now public to everyone ");
   res.redirect("/posts")
};

module.exports.renderEditForm =async(req,res)=>{
    let {id} = req.params;
    let post  = await postListing.findById(id);
    res.render("post/editform.ejs",{post})
};

module.exports.editPost = async(req,res)=>{
    let {id} = req.params;
   let post  = await postListing.findByIdAndUpdate(id,{...req.body.post});
   if(typeof req.file !== "undefined"){
       let url = req.file.path;
       let filename = req.file.filename;
       post.image ={url, filename};
       await post.save();
   }
    req.flash("success","Post Updated Successfully");
    res.redirect(`/posts/${id}`);
};

module.exports.deletePost =async(req,res)=>{
    let {id} = req.params;
    await postListing.findByIdAndDelete(id);
    req.flash("success","Post Deleted Successfully");
    res.redirect("/posts/myPosts");
};

module.exports.listByCategory = async (req, res) => {
    try {
        // Query posts by category
        const allpost = await postListing.find({ categories: req.params.categories });
        
        // Pass 'allpost' to the EJS template
        res.render("post/allpost.ejs", { allpost });
    } catch (err) {
        console.error(err);
        
        req.flash("error", "Could not find posts for this category.");
        res.redirect("/posts");
    }
};

module.exports.myPosts = async (req, res) => {
    const posts = await postListing.find({ owner: req.user._id }); // Assuming posts have an 'author' field referencing the User model
    res.render("post/mypost.ejs", { posts }); // Render the template showing user's posts
};

module.exports.likePost = async (req, res) => {
    try {
        const post = await postListing.findById(req.params.id);
        
        // Check if the post exists
        if (!post) {
            req.flash('error', 'Post not found');
            return res.redirect('/posts');
        }

        const userId = req.user._id;
        const likedIndex = post.likes.indexOf(userId);

        // Toggle like
        if (likedIndex === -1) {
            // Add like if not already liked
            post.likes.push(userId);
        } else {
            // Remove like if already liked
            post.likes.splice(likedIndex, 1);
        }

        await post.save();
        res.redirect(`/posts/${post._id}`);
    } catch (error) {
        console.error(error);
        req.flash('error', 'Something went wrong while liking the post');
        res.redirect('/posts');
    }
};

module.exports.analytics = async (req, res) => {
    try {
        const postId = req.params.id;
        const post = await postListing.findById(postId)
            .populate('likes') // Assuming likes is an array of user IDs
            .populate({
                path: 'comments', // Assuming comments is an array of comment IDs
                populate: { path: 'owner', select: 'username' } // Assuming each comment references a user
            });

        if (!post) {
            req.flash('error', 'Post not found');
            return res.redirect('/posts');
        }

        const totalLikes = post.likes.length;
        const totalComments = post.comments.length;

        res.render('post/analytics.ejs', { post, totalLikes, totalComments });
    } catch (error) {
        console.error(error);
        req.flash('error', 'Could not retrieve analytics');
        res.redirect('/posts');
    }
};
