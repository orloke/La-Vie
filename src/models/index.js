const Pacientes = require("./Pacientes");
const Psicologos = require("./Psicologos");
const Atendimentos = require("./Atendimentos");

Psicologos.hasMany(Atendimentos, {
    foreignKey: 'ID_PSICOLOGO'
  })
Atendimentos.belongsTo(Psicologos, {
    foreignKey: 'ID_PSICOLOGO'
  })

Pacientes.hasMany(Atendimentos, {
    foreignKey: 'ID_PACIENTE'
  })
Atendimentos.belongsTo(Pacientes, {
    foreignKey: 'ID_PACIENTE'
  })


module.exports = {
	Pacientes,
	Psicologos,
	Atendimentos,
};
