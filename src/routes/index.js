const express = require('express')
const pacientesController = require('../controllers/pacientesController')
const psicologosController = require('../controllers/psicologosController')
const createPacientes = require('../validation/createPacientes')

const routes = express.Router()

routes.get('/pacientes',pacientesController.listar)
routes.post('/pacientes',createPacientes, pacientesController.cadastrar)
routes.put('/pacientes/:id',createPacientes, pacientesController.alterar)
routes.delete('/pacientes/:id', pacientesController.deletar)


module.exports = routes