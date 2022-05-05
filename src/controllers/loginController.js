const  { Psicologos } = require("../models/");

const LoginController = {

    async login(req, res) {
        const { email,senha } = req.body;

        try {
          
            const user = await Psicologos.findOne({where: {email,senha}});

          if (!user) {
            return res.status(401).json({ message: 'E-mail ou senha inválido, verifique e tente novamente'})
          }
          
          return res.status(200).json({user})

        } catch (error) {
          return  res.status(400).send('Ocorreu algum erro. Entre em contato com o administrador do sistema');
        }
      },


} 

module.exports = LoginController;