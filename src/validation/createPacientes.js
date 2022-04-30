const {validate, Joi} = require('express-validation')

module.exports = validate({
    body: Joi.object({
        nome: Joi.string().required(),
        telefone : Joi.number().integer().required(),
        cpf: Joi.number().integer().required(),
        idade: Joi.string().required(),
        email: Joi.string().email().required()

    })
})