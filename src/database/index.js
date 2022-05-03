const sequelize = require('sequelize')

const DB_NAME = 'lavie'
const DB_USER = 'root'
const DB_PASS = 'danilo080590'
const DB_CONFIG = {
    dialect: 'mysql',
    host: 'lavie-db.cnmu2vzs9qad.sa-east-1.rds.amazonaws.com',
    port: '3306'
}

let db = {}

try {
    db = new sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG)
    console.log('Sequelize funcionando');
} catch (error) {
    console.error('Deu o seguinte erro: ', error);
}

async function hasConnection() {
    try {
        await db.authenticate()
        console.log('Conectado!');
    } catch (error) {
        console.error('Erro no hasConnection: '+ error);
    }
    
}

Object.assign(db,{
    hasConnection
})

module.exports = db