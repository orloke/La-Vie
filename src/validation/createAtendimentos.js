const { validate, Joi } = require("express-validation");

module.exports = validate({
	body: Joi.object({
		id_paciente: Joi.number().integer().required(),
		data_atendimento: Joi.date().iso().required(),
		observacoes: Joi.string().required(),
	}),
});
