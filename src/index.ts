import express from 'express'
import { MongoConnection } from './dataBase/MongoConnection'
import { URLController } from './URLController/URLController'

const api = express()
const database = new MongoConnection()
const urlController = new URLController()

database.connect()
api.use(express.json())
api.post('/shorten', urlController.shorten)
api.get('/:hash', urlController.redirect)

api.listen(5500, () => console.log("Start PORT"))