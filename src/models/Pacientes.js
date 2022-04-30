const db = require('../database')
const { DataTypes }  = require('sequelize')

const Pacientes = db.define('Pacientes',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome:{
        type: DataTypes.STRING
    },
    telefone:{
        type: DataTypes.INTEGER,
    },
    cpf:{
        type: DataTypes.INTEGER,
    },
    nascimento:{
        type: DataTypes.INTEGER,
    },
    email:{
        type: DataTypes.STRING,
    },

},{
    tableName: 'pacientes',
    timestamps: false
}
)

module.exports = Pacientes