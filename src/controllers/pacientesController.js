const {Pacientes} = require('../models/')
const {helperDate} = require('../helper')

const pacientesController = {
    async listar(req,res){
        const {id} = req.query

        let filter = {}

        if(id){
            Object.assign(filter,{
                where:{
                    ID_PACIENTE:id
                }
            })
        }

        const listaPacientes = await Pacientes.findAll(filter)
        if(id && listaPacientes.length==0){
            return res.status(404).json('Id não encontrado!')
        }
        res.status(200).json(listaPacientes)

    },
    async cadastrar(req,res){
        const {nome, email, data_nascimento} = req.body
        const newDate = helperDate.convertDate(data_nascimento)
        try {
            const novoPaciente = await Pacientes.create({nome, email, data_nascimento:newDate})
            res.status(201).json(novoPaciente)
        } catch (error) {
            res.status(400).send('Veja se o email está no formato "algumacoisa@email.com"\nData deve estar no formato DD/MM/AAAA');
        }

    },
    async alterar(req,res){
        const {id} = req.params
        const {nome, email, data_nascimento} = req.body
        try {
            await Pacientes.update({nome, email, data_nascimento},{
                where:{
                    ID_PACIENTE: id,
                }
            })
            const alterarPaciente = await Pacientes.findByPk(id)
            res.json(alterarPaciente)
            
        } catch (error) {
            res.status(400).json("Houve algum erro não foi possível alterar o cliente")
        }

    },
    async deletar(req,res){
        const {id} = req.params
        try {
            const deletarPaciente = await Pacientes.destroy({
                where:{
                    ID_PACIENTE: id,
                }
            })
            if(deletarPaciente){
                return res.status(204).send()
            }

            res.status(404).json('Id não encontrado')
            
            
        } catch (error) {
            res.status(400).json("Houve algum erro. Contate o administrador do sistema!")
        }
    }
}

module.exports = pacientesController