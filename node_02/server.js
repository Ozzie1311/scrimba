import http from 'node:http'
import { serveStatic } from './utils/serveStatic.js'
import { getHandler, handlePost } from './handlers/routeHandlers.js'
const PORT = 8001

const __dirname = import.meta.dirname



const server = http.createServer(async (req, res) => {
  if (req.url === "/api") {
    if (req.method === "GET") {
      return await getHandler(res)
    } else if (req.method === "POST") {
      handlePost(req)
    }
  } else if (!req.url.startsWith("/api")) {
    return await serveStatic(req, res, __dirname)
  }
})

server.listen(PORT, () => console.log(`Server running in port ${PORT}`))
