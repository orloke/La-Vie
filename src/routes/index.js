const express = require('express');

const psicologosController = require('../controllers/psicologosController');
const psicologoValidate = require('../validation/createPsicologos');

const routes = express.Router();

// Rotas Psicologos
routes.get('/psicologos', psicologosController.listar);
routes.get('/psicologos/:id_psicologo', psicologosController.listarPorID);
routes.post('/psicologos', psicologoValidate, psicologosController.cadastrar);
routes.put(
    '/psicologos/:id_psicologo',
    psicologoValidate,
    psicologosController.atualizar
);
routes.delete('/psicologos/:id_psicologo', psicologosController.deletar);

module.exports = routes;
