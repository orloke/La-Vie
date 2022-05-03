const Pacientes = require('./Pacientes')
const Psicologos = require('./Psicologos')
const Atendimentos = require('./Atendimentos')

Pacientes.belongsToMany(Psicologos,{
    foreignKey: 'id_paciente',
    through: Atendimentos
})

Psicologos.belongsToMany(Pacientes,{
    foreignKey: 'id_psicologo',
    through: Atendimentos
})

module.exports = {
    Pacientes,
    Psicologos,
    Atendimentos
}