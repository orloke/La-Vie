const db = require("../database")
const { DataTypes } = require("sequelize")
const Psicologos = require("./Psicologos")
const Pacientes = require("./Pacientes")

const Atendimentos = db.define("Atendimentos", {
		id_atendimento: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		id_psicologo: {
			type: DataTypes.STRING,
			references: {
				model: Psicologos,
				key: "id",
			},
		},
		id_paciente: {
			type: DataTypes.INTEGER,
			references: {
				model: Pacientes,
				key: "id",
			},
		},
		data_atendimento: {
			type: DataTypes.DATE,
		},
		observacoes: {
			type: DataTypes.STRING,
		},
	},
	{
		tableName: "atendimentos",
		timestamps: false,
	}
)

module.exports = Atendimentos