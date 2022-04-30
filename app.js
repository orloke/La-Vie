const express = require('express')
const routes = require('./src/routes')
const db = require('./src/database')
const handleError = require('./src/middelwares/handleError')

const app = express()
db.hasConnection()
app.use(express.json())
app.use(routes)
app.use(handleError)


app.listen(3000,()=> console.log('Tá rodando no 12 '))