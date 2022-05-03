const { Pacientes, Psicologos, Atendimentos } = require("../models/");
const { helperDate } = require("../helper");

const atendimentosController = {
	async listarAtendimentos(req, res) {
		try {
			let listaDeAtendimentos = await Atendimentos.findAll({
				include: [Pacientes, Psicologos],
			});
			res.status(200).json(listaDeAtendimentos);

		} catch (error) {
			console.error("Erro ao buscar a lista de atendimentos, tente novamente.");
		}
	},


	async buscarAtendimento(req, res) {
		try {
			const { id } = req.params;
			const buscaDeAtendimento = await Atendimentos.findByPk(id, {
				include: [Pacientes, Psicologos],
			});

			if (buscaDeAtendimento == null) {
				res.status(404).json("Id nao encontrado!");
			} else {
				res.status(200).json(buscaDeAtendimento);
			}
		} catch (error) {
			console.log("Id nao encontrado!");
			res.status(404);
		}
	},

	async cadastrarAtendimentos(req, res) {
		const { id_psicologo, id_paciente, data_atendimento, observacoes } =
			req.body;
		const newDate = helperDate.convertDate(data_atendimento);

		const novoAtendimento = await Atendimentos.create({
			id_psicologo,
			id_paciente,
			data_atendimento: newDate,
			observacoes,
		});

		res.status(201).json(novoAtendimento);
	},
};

module.exports = atendimentosController;
