const express = require('express')
const pacientesController = require('../controllers/pacientesController')
const createPacientes = require('../validation/createPacientes')
const informacoesController = require('../controllers/informacoesController')
const atendimentosController = require('../controllers/atendimentosController')

const routes = express.Router()

routes.get('/pacientes',pacientesController.listar)
routes.post('/pacientes',createPacientes, pacientesController.cadastrar)
routes.put('/pacientes/:id',createPacientes, pacientesController.alterar)
routes.delete('/pacientes/:id', pacientesController.deletar)

// Rota do dashboard

routes.get('/dashboard/numero-pacientes', informacoesController.numeroPacientes)
routes.get('/dashboard/numero-atendimentos', informacoesController.numeroAtendimentos)
routes.get('/dashboard/numero-psicologos', informacoesController.numeroPsicologos)
routes.get('/dashboard/media-atendimentos', informacoesController.mediaAtendimentos)

// Rota dos Atendimentos

routes.get('/atendimentos', atendimentosController.listarAtendimentos)
routes.get('atendimentos/:id', atendimentosController.buscarAtendimento)
routes.post('/atendimentos/', atendimentosController.cadastrarAtendimentos)



module.exports = routes