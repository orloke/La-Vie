const Pacientes = require("./Pacientes");
const Psicologos = require("./Psicologos");
const Atendimentos = require("./Atendimentos");

Psicologos.hasMany(Atendimentos, {
    foreignKey: 'id_psicologo'
  })
Atendimentos.belongsTo(Psicologos, {
    foreignKey: 'id_psicologo'
  })

Pacientes.hasMany(Atendimentos, {
    foreignKey: 'id_paciente'
  })
Atendimentos.belongsTo(Pacientes, {
    foreignKey: 'id_paciente'
  })


module.exports = {
	Pacientes,
	Psicologos,
	Atendimentos,
};
