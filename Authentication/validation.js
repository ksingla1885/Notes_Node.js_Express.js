// VALIDATION
const Joi = require('@hapi/joi');   // ✅ use 'joi', not '@hapi/joi'

// Register validation
const registerValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().min(6).max(255).required().email(),
        password: Joi.string().min(6).max(1024).required()
    });
    return schema.validate(data);
}

// Login validation
const loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().min(6).max(255).required().email(),
        password: Joi.string().min(6).max(1024).required()
    });
    return schema.validate(data);
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
