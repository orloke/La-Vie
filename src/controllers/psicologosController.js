const { Psicologos } = require('../models');
const bcrypt = require('bcryptjs');

const psicologosController = {
    listar: async (req, res) => {
        const listaPsicologos = await Psicologos.findAll({
            where: {
                status: 1,
            },
        });

        res.json(listaPsicologos);
    },

    listarPorID: async (req, res) => {
        const { id_psicologo } = req.params;
        try {
            let filter = {
                attributes: ['id_psicologo', 'nome', 'email', 'apresentacao'],
            };

            const listaPsicologos = await Psicologos.findOne({
                where: {
                    status: 1,
                    id_psicologo,
                },
                filter,
            });

            if (listaPsicologos) {
                return res.status(200).json(listaPsicologos);
            }
            res.status(404).json('Id não encontrado!');
        } catch (erros) {
            res.status(500).json('Ocorreu algum problema!');
        }
    },

    atualizar: async (req, res) => {
        const { id_psicologo } = req.params;
        const { nome, email, senha, apresentacao } = req.body;

        const novaSenha = bcrypt.hashSync(senha, 10);

        try {
            await Psicologos.update(
                {
                    nome,
                    email,
                    senha: novaSenha,
                    apresentacao,
                },
                {
                    where: {
                        id_psicologo,
                        status: 1,
                    },
                }
            );

            const psicologoAtualizado = await Psicologos.findByPk(id_psicologo);
            res.status(200).json(psicologoAtualizado);
        } catch (error) {
            return res.status(400).json('Ocorreu algum erro!');
        }
    },

    deletar: async (req, res) => {
        const { id_psicologo } = req.params;
        try {
            const deletaPsic = await Psicologos.findOne({
                where: {
                    status: 1,
                    id_psicologo,
                },
            });

            if (deletaPsic) {
                await Psicologos.update(
                    { status: 0 },
                    {
                        where: {
                            id_psicologo,
                        },
                    }
                );
                return res.status(204).send();
            }
            return res.status(404).json('Id não encontrado!');
        } catch (error) {
            res.status(500).json('Ocorreu algum problema!');
        }
    },
};

module.exports = psicologosController;
