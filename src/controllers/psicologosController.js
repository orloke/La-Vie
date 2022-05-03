const {Psicologos} = require('../models/')

const psicologosController = {
    async listar(req,res){
        const listaPsicologos = await Psicologos.findAll()
        res.json(listaPsicologos)

    },
    async cadastrar(req,res){
        const {nome, telefone, cpf, registro, email, senha} = req.body

        const novoPsicologos = await Psicologos.create({nome, telefone, cpf, registro, email, senha})

        res.json(novoPsicologos)
    },
}

module.exports = psicologosController