const {Pacientes} = require('../models/')
const {helperDate} = require('../helper')

const pacientesController = {
    async listar(req,res){
        const listaPacientes = await Pacientes.findAll()
        res.json(listaPacientes)

    },
    async cadastrar(req,res){
        const {NOME, EMAIL, DATA_NASCIMENTO} = req.body
        const newDate = helperDate.convertDate(DATA_NASCIMENTO)
        try {
            const novoPaciente = await Pacientes.create({NOME, EMAIL, DATA_NASCIMENTO:newDate})
            res.json(novoPaciente)
        } catch (error) {
            res.send('Veja se o email está no formato "algumacoisa@email.com"\nData deve estar no formato DD/MM/AAAA');
        }

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