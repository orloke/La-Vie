const Pacientes = require('./Pacientes')
const Psicologos = require('./Psicologos')
const PacientesPsicologos = require('./PacientesPsicologos')

Pacientes.belongsToMany(Psicologos,{
    foreignKey: 'idpaciente',
    through: PacientesPsicologos
})

Psicologos.belongsToMany(Pacientes,{
    foreignKey: 'idpsicologo',
    through: PacientesPsicologos
})

module.exports = {
    Pacientes,
    Psicologos,
    PacientesPsicologos
}