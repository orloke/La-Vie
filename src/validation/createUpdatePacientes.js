const {validate, Joi} = require('express-validation')

module.exports = validate({
    params: Joi.object({
        id: Joi.number().number()
    }),
    body: Joi.object({
        nome: Joi.string().required(),
        email : Joi.string().email().required(),
        data_nascimento: Joi.date().required(),      
    })
})