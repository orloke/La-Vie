const express = require('express')
const pacientesController = require('../controllers/pacientesController')
const psicologosController = require('../controllers/psicologosController')
const createPacientes = require('../validation/createPacientes')

const routes = express.Router()

routes.get('/pacientes',pacientesController.listar)
routes.post('/pacientes',createPacientes, pacientesController.cadastrar)
routes.put('/pacientes/:id', pacientesController.alterar)

routes.get('/psicologos', psicologosController.listar)
routes.post('/psicologos', psicologosController.cadastrar)

module.exports = routes