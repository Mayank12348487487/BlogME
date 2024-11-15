const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    text: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        default: new Date(),
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: "Post",
    },
});
let commentSection = mongoose.model("Comment", commentSchema);
module.exports = commentSection;