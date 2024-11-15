const mongoose = require("mongoose");
const commentSection = require("./comments");
const Schema= mongoose.Schema;
const postSchema= new Schema({
    title:{
        type:String,
        required:true,
    },
    image:{
        url:String,
        filename:String,
    },  
    info:{
        type:String,
        required:true,
    },
  created_at:{
    type: Date,
    default: new Date(),
  },
  categories:{

    type: String,
    enum: ["technology", "fashion", "food", "travel", "lifestyle", "stocks", "finance", "crypto", "startup", "business","world","fitness","weather","games","science"],
  },
owner:{
    type:Schema.Types.ObjectId,
    ref:"User",
},
comments: [{ // Change this to an array of comment IDs
  type: Schema.Types.ObjectId,
  ref: "Comment",
}],
likes: [{ 
  type: Schema.Types.ObjectId, 
  ref: "User" // Store user IDs who liked the post
}],

    
});
// Middle ware to associate comments with post
postSchema.post("findOneAndDelete", async (post) => {
  if (post) {
      await commentSection.deleteMany({ _id: { $in: post.comments } });
  }
});

let postListing = mongoose.model("Post",postSchema);
module.exports = postListing; 