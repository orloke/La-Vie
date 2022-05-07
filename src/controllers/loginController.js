const jwt = require("jsonwebtoken");
const bcrypt = require ('bcryptjs');
const secret = require("../config/secret");
const { Psicologos } = require("../models/");

const LoginController = {

  async login(req, res) {

    const { email, password } = req.body;
    try {
          const user = await Psicologos.findOne({ where: { email } });

          if (!user && !checkPassword(password)) {
            return res
              .status(401)
              .json({
                message: "E-mail ou senha inválido, verifique e tente novamente”",
              });
          }

          const token = jwt.sign ({
              id: user.id_psicologo,
              email: user.email,
              nome: user.nome
          }, secret.key
          )

          return res.status(200).json(token) 


    } catch (error) {
      return res
        .status(400)
        .send(
          "Ocorreu algum erro. Entre em contato com o administrador do sistema"
        );
    }
  },

  checkPassword(password) {
    return bcrypt.compare(password, this.password);
  },
};

module.exports = LoginController;
