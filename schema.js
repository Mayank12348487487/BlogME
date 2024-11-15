
const Joi = require("joi");


module.exports.postSchema = Joi.object({
    post:Joi.object({
        title:Joi.string().required(),
        info:Joi.string().required(),
        image:Joi.string().allow("",null),
        created_at:Joi.date().allow("",null),
        categories:Joi.string().required(),
    }).required(),
});