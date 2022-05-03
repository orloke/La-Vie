const express = require('express')
const pacientesController = require('../controllers/pacientesController')
const createPacientes = require('../validation/createPacientes')
const createPsicologos = require('../validation/createPsicologos')
const informacoesController = require('../controllers/informacoesController')
const atendimentosController = require('../controllers/atendimentosController')
const psicologosController = require('../controllers/psicologosController')
const routes = express.Router()

// Rotas dos pacientes

routes.get('/pacientes',pacientesController.listar)
routes.post('/pacientes',createPacientes, pacientesController.cadastrar)
routes.put('/pacientes/:id',createPacientes, pacientesController.alterar)
routes.delete('/pacientes/:id', pacientesController.deletar)

// Rotas temporaria dos pacientes

routes.get('/psicologos', psicologosController.listar)
routes.post('/psicologos', createPsicologos, psicologosController.cadastrar)

// Rotas do dashboard

routes.get('/dashboard/numero-pacientes', informacoesController.numeroPacientes)
routes.get('/dashboard/numero-atendimentos', informacoesController.numeroAtendimentos)
routes.get('/dashboard/numero-psicologos', informacoesController.numeroPsicologos)
routes.get('/dashboard/media-atendimentos', informacoesController.mediaAtendimentos)

// Rotas dos Atendimentos

routes.get('/atendimentos', atendimentosController.listarAtendimentos)
routes.get('atendimentos/:id', atendimentosController.buscarAtendimento)
routes.post('/atendimentos/', atendimentosController.cadastrarAtendimentos)

module.exports = routes