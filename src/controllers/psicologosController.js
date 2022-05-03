const {Psicologos} = require('../models/')

const psicologosController = {
    async listar(req,res){
        const listaPsicologos = await Psicologos.findAll()
        res.json(listaPsicologos)

    },
    async cadastrar(req,res){
        const {nome, email, senha, apresentacao} = req.body

        const novoPsicologos = await Psicologos.create({nome, email, senha, apresentacao})

        res.json(novoPsicologos)
    },
}

module.exports = psicologosController