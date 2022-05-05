const jwt = require('jsonwebtoken');
const auth = require('../config/userToken');
const  { Psicologos } = require("../models/");

const LoginController = {

    async login(req, res) {
      const { email, password } = req.body;
        try {
          
          const user = await Psicologos.findOne({where: {email}});



          if (!user && !checkPassword(password)) {
            return res.status(401).json({ message: 'E-mail ou senha inválido, verifique e tente novamente”'})
          }
          const {id ,name } = user;

          return res.status(200).json({ token: jwt.sign({id},auth.secret, {expiresIn:auth.expiresIn})

          })

        } catch (error) {
          return  res.status(400).send('Ocorreu algum erro. Entre em contato com o administrador do sistema');
        }
      },

      checkPassword(password){
        return bcrypt.compare(password, Psicologos.password)
      }
} 

module.exports = LoginController;