const db = require('../database')
const { DataTypes }  = require('sequelize')

const Pacientes = db.define('Pacientes',{
    id_paciente:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome:{
        type: DataTypes.STRING
    },
    data_nascimento:{
        type: DataTypes.DATE,
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