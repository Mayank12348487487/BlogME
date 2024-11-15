const ExpressError = require("./utils/ExpressError");
const {postSchema} = require("./schema");
const postListing = require("./models/post");


module.exports.isLoggedIn = (req, res, next) => {
    if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl;
        req.flash("error","Please Login First");
        return res.redirect("/login");
    }
    next();
}

module.exports.saveRedirectUrl = (req, res, next) => {
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
       
    }
    next();
}
module.exports.validatePost = (req,res,next)=>{
    let {error} =postSchema.validate(req.body);
    if(error){
        let msg = error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,msg);
    }
    else{
        next();
    }
}