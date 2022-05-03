const {Atendimentos, Psicologos, Pacientes} = require('../models/')

const informacoesController = {
    async numeroPacientes(req, res){
        const totalPacientes = await Pacientes.count()
        res.json(totalPacientes)
    },
    async numeroAtendimentos(req, res){
        const totalAtendimentos = await Atendimentos.count()
        res.json(totalAtendimentos)
    },
    async numeroPsicologos(req, res){
        const totalPsicologos = await Psicologos.count()
        res.json(totalPsicologos)
    },
    async mediaAtendimentos(req, res){
        const totalAtendimentos = await Atendimentos.count()
        const totalPsicologos = await Psicologos.count()
        res.json(totalAtendimentos/totalPsicologos)
    }
}

module.exports = informacoesController