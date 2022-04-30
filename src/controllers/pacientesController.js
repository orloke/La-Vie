const {Pacientes} = require('../models/')
const {convertData} = require('../helper')

const pacientesController = {
    async listar(req,res){
        const listaPacientes = await Pacientes.findAll()
        res.json(listaPacientes)

    },
    async cadastrar(req,res){
        const {nome, telefone, cpf, idade, email} = req.body

        const novoPaciente = await Pacientes.create({nome, telefone, cpf, idade:novaIdade, email})

        res.json(novoPaciente)
    },
    async alterar(req,res){
        const {id} = req.params
        const {nome, telefone, cpf, idade, email} = req.body
        const alterarPaciente = await Pacientes.update({nome, telefone, cpf, idade, email},{
            where:{
                id,
            }
        })
        res.json(alterarPaciente)
    }
}

module.exports = pacientesController