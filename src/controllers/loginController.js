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

// const { Psicologos } = require("../models");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const secret = require("../config/userToken");

// const LoginController = {
//   async login(req, res) {
//     try {
//       const { email, senha } = req.body;
//       const userLogon = await Psicologos.findOne({ where: {email} });

//       if (!userLogon || !bcrypt.compareSync(senha, userLogon.senha)) {
//         return res
//           .status(401)
//           .json("E-mail ou senha inválida, verifique e tente novamente");
//       }

//       const token = await jwt.sign(
//         {
//           id: userLogon.id_psicologo,
//           nome: userLogon.nome,
//           email: userLogon.email,
//         },
//         secret.key
//       );

//       return res.json(token);

//     } catch (error) {
//       console.log("DEU RUIM NO LOGIN");
//       console.error(error);
//       return res.status(500).json("Erro ao executar login");
//     }
//   },
// };

// module.exports = LoginController;
