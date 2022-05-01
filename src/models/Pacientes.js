const db = require('../database')
const { DataTypes }  = require('sequelize')

const Pacientes = db.define('Pacientes',{
    ID_PACIENTE:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    NOME:{
        type: DataTypes.STRING
    },
    DATA_NASCIMENTO:{
        type: DataTypes.DATE,
    },
    EMAIL:{
        type: DataTypes.STRING,
    },

},{
    tableName: 'pacientes',
    timestamps: false
}
)

module.exports = Pacientes