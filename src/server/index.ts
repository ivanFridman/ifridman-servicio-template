import express from 'express'
import routes from '../routes/index'

const server = express()
server.use(express.json())

server.get('/', (req: any, res: any) => res.send('Hello World!'))
server.use('', routes)

export default server
