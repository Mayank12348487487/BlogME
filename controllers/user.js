const User = require("../models/user");
const saveRedirectUrl = require("../middleware");



module.exports.renderSignupForm = (req,res)=>{
    res.render("users/signup.ejs");
}
module.exports.signup = async(req,res)=>{
    try{
    const {username,email,password} = req.body;
    const newUser = new User({username,email});
    const registeredUser = await User.register(newUser,password);
   
     req.login(registeredUser,(err)=>{
        if(err){
            return next(err);}
            req.flash('signedIn',`Enjoy your Account has been Created`); 
            res.redirect("/posts");

     })
    }catch(e){
        req.flash("error",e.message);
        res.redirect("/signup");
    }
}

module.exports.renderLoginForm = (req,res)=>{
    res.render("users/login.ejs");
}
module.exports.login = async(req,res)=>{
    
    req.flash("success","Welcome Back .....");
   
    let redirectUrl = res.locals.redirectUrl || "/posts";
     res.redirect(redirectUrl);
 }

 module.exports.logout = (req,res)=>{
    req.logout((err)=>{
        if(err){
            return next(err)
        }
        req.flash("success","You are now logged out");
        res.redirect("/posts");
    });
   
}