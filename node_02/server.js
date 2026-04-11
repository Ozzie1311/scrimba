import http from 'node:http'
import { serveStatic } from './utils/serveStatic.js'
import { getData } from './utils/getData.js'
const PORT = 8001

const __dirname = import.meta.dirname

const cards = await getData()
console.log(cards)

const server = http.createServer(async (req, res) => {
  await serveStatic(req, res, __dirname)
})

server.listen(PORT, () => console.log(`Server running in port ${PORT}`))
