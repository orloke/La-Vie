const express = require('express')

const pacientesController = require('../controllers/pacientesController')
const createPacientes = require('../validation/createPacientes')
const informacoesController = require('../controllers/informacoesController')
const atendimentosController = require('../controllers/atendimentosController')
const psicologosController = require('../controllers/psicologosController')
const psicologoValidate = require('../validation/createPsicologos')
const loginController = require ('../controllers/loginController');
const authMiddleware = require ('../middelwares/auth');

const routes = express.Router()

// Rotas de login 

routes.post("/login", loginController.login);

//Rotas autenticadas
//routes.use(authMiddleware);

// Rotas dos pacientes

routes.get('/pacientes',pacientesController.listar)
routes.post('/pacientes',createPacientes, pacientesController.cadastrar)
routes.put('/pacientes/:id',createPacientes, pacientesController.alterar)
routes.delete('/pacientes/:id', pacientesController.deletar)

// Rotas dos psicologos

routes.get('/psicologos', psicologosController.listar);
routes.get('/psicologos/:id_psicologo', psicologosController.listarPorID);
routes.post('/psicologos', psicologoValidate, psicologosController.cadastrar);
routes.put('/psicologos/:id_psicologo',psicologoValidate,psicologosController.atualizar);
routes.delete('/psicologos/:id_psicologo', psicologosController.deletar);

// Rotas do dashboard

routes.get('/dashboard/numero-pacientes', informacoesController.numeroPacientes)
routes.get('/dashboard/numero-atendimentos', informacoesController.numeroAtendimentos)
routes.get('/dashboard/numero-psicologos', informacoesController.numeroPsicologos)
routes.get('/dashboard/media-atendimentos', informacoesController.mediaAtendimentos)

// Rotas dos Atendimentos

routes.get('/atendimentos',  authMiddleware, atendimentosController.listarAtendimentos)
routes.get('atendimentos/:id', authMiddleware, atendimentosController.buscarAtendimento)
routes.post('/atendimentos/', authMiddleware, atendimentosController.cadastrarAtendimentos)

module.exports = routes