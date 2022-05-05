const {Atendimentos, Psicologos, Pacientes} = require('../models/')

const informacoesController = {
    async numeroPacientes(req, res){
        const totalPacientes = await Pacientes.count({
            where:{
                status: 1
            }
        })
        res.json(totalPacientes)
    },
    async numeroAtendimentos(req, res){
        const totalAtendimentos = await Atendimentos.count()
        res.json(totalAtendimentos)
    },
    async numeroPsicologos(req, res){
        const totalPsicologos = await Psicologos.count({
            where:{
                status: 1
            }
        })
        res.json(totalPsicologos)
    },
    async mediaAtendimentos(req, res){
        const totalAtendimentos = await Atendimentos.count()
        const totalPsicologos = await Psicologos.count({
            where:{
                status: 1
            }
        })
        res.json(totalAtendimentos/totalPsicologos)
    }
}

module.exports = informacoesController