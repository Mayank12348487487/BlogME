const mongoose = require("mongoose");   
const initData = require("./data.js");
const postListing = require("../models/post.js");
const Mongo_Url = "mongodb://127.0.0.1:27017/postwebsite";


main()
.then(()=>{
    console.log("Connection Established")
})
.catch((err)=>{
    console.log(err);
})
async function main() {
    await mongoose.connect(Mongo_Url);
}

const initDB = async()=>{
    await postListing.deleteMany({});
   initData.data = initData.data.map((obj)=>({...obj,owner:"66e40ffb812e2e24a7d5dd93"}))
    await postListing.insertMany(initData.data);
    console.log("Data was intialized")
};

initDB();