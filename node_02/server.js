import http from 'node:http'
import fs from "node:fs/promises"
import { serveStatic } from './utils/serveStatic.js' 


const PORT = 8001

const __dirname = import.meta.dirname


const server = http.createServer(async (req, res) => {
    await serveStatic(req, res, __dirname)
})

server.listen(PORT, () => console.log(`Server running in port ${PORT}`))
 