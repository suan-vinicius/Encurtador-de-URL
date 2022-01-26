import express from 'express'
import { MongoConnection } from './dataBase/MongoConnection'
import { URLController } from './URLController/URLController'

const api = express()
api.use(express.json())

const database = new MongoConnection()
database.connect()

const urlController = new URLController()
api.post('/shorten', urlController.shorten)
api.get('/:hash', urlController.redirect)

api.listen(5500, () => console.log("Start PORT"))