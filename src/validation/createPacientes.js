const {validate, Joi} = require('express-validation')

module.exports = validate({
    body: Joi.object({
        NOME: Joi.string().required(),
        EMAIL : Joi.string().required(),
        DATA_NASCIMENTO: Joi.string()
    })
})