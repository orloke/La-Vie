const {Pacientes} = require('../models/')
const {helperDate} = require('../helper')

const pacientesController = {
    async listar(req,res){
        try{
            const {id} = req.query

            let filter = {}

            if(id){
                Object.assign(filter,{
                    where:{
                        id_paciente:id
                    }
                })
            }

            const listaPacientes = await Pacientes.findAll(filter)

            if(id && listaPacientes.length==0){
                return res.status(404).json('Id não encontrado!')
            }

            res.status(200).json(listaPacientes)

        }catch (error) {
            res.status(400).send('Ocorreu algum erro. Entre em contato com o administrador do sistema');
        }
    },
    async cadastrar(req,res){
        try {
        const {nome, email, data_nascimento} = req.body
        const newDate = helperDate.convertDate(data_nascimento)        
        const novoPaciente = await Pacientes.create({nome, email, data_nascimento:newDate})
        res.status(201).json(novoPaciente)

        } catch (error) {
            console.log(error);
            res.status(400).send('Ocorreu algum erro. Entre em contato com o administrador do sistema');
        }

    },
    async alterar(req,res){
        try {
            const {id} = req.params
            const {nome, email, data_nascimento} = req.body
            const newDate = helperDate.convertDate(data_nascimento)  
        
            const procurarPaciente = await Pacientes.update({nome, email, data_nascimento: newDate},{
                where:{
                    ID_PACIENTE: id,
                }
            })

            if(!procurarPaciente[0]){
                return res.send('Id não encontrado!')
            }

            const alterarPaciente = await Pacientes.findByPk(id)
            res.json(alterarPaciente)
            
        } catch (error) {
            console.log(error);
            res.status(400).json("Houve algum erro não foi possível alterar o cliente")
        }

    },
    async deletar(req,res){
        
        try {
            const {id} = req.params
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
            console.log(error);
            res.status(400).json("Houve algum erro. Veja se o paciente possui atendimento marcado. Contate o administrador do sistema!")
        }
    }
}

module.exports = pacientesController