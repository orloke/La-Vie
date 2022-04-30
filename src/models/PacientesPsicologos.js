const db = require('../database')
const { DataTypes }  = require('sequelize')
const Psicologos = require('./Psicologos')
const Pacientes = require('./Pacientes')

const Atendimentos = db.define('Atendimentos',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    idpsicologo:{
        type: DataTypes.STRING,
        references:{
            model: Psicologos,
            key: 'id'
        }
    },
    idcliente:{
        type: DataTypes.INTEGER,
        references:{
            model: Pacientes,
            key: 'id'
        }
    },
    data:{
        type: DataTypes.DATE,
    },

},{
    tableName: 'atendimentos',
    timestamps: false
}
)

module.exports = Atendimentos