import dotenv from 'dotenv'
import server from './server/index'
import { environment } from './configuration/environment'
dotenv.config()

const PORT = environment.port

server.listen(PORT, () => console.log(`Server listening at http://localhost:${PORT}`))
