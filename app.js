if(process.env.NODE_ENV != "production"){
    require("dotenv").config();
}
const express =require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");
const ExpressError = require("./utils/ExpressError.js");
const postRouter = require("./routes/post");
const userRouter = require("./routes/user");
const commentRouter = require("./routes/comments");


const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const passport = require("passport");
const localStrategy = require("passport-local");
const User = require("./models/user.js");
const Comment = require("./models/comments.js");


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname,"/public")));

// const Mongo_Url = "mongodb://127.0.0.1:27017/postwebsite"
const db_url = process.env.ATLAS_DB_URL

main()
.then(()=>{
    console.log("Connection Established")
})
.catch((err)=>{
    console.log(err);
})
async function main() {
    await mongoose.connect(db_url);
}

const store = MongoStore.create({
    mongoUrl: db_url,
    crypto: {
        secret: process.env.SECRET,
    },
    touchAfter: 24 * 3600,
});

store.on("error", function (e) {
    console.log("SESSION STORE ERROR", e);
})
const sessionOptions = {
    store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 7* 24 * 60 * 60 * 1000,
        maxAge: 7* 24 * 60 * 60 * 1000,
    }
}



app.use(session(sessionOptions));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.signedIn = req.flash("signedIn")
    res.locals.currUser = req.user;
 
    next();
})

app.use("/posts",postRouter);
app.use("/posts/:id/comments",commentRouter);

app.use("/",userRouter);












app.all("*",(req,res,next)=>{
    next(new ExpressError(404,"Page Not Found"))
})
// MiddleWares 
app.use((err,req,res,next)=>{
    let {statusCode=500,message="Something Went Wrong !!"} = err;
    res.status(statusCode).render("post/error.ejs",{message});
});
app.listen(3000,()=>{
    console.log(`App is listening to the port ${3000}`);

});