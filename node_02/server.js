/*
Challenge: 
1. Initialise a nodejs project:
	Name: “from-the-other-side”.
    Description: “A platform for sharing ghostly encounters”.

2. Enable modular js (in package.json).

hint.md for help
*/

import http from 'node:http'

const PORT = 8001

const server = http.createServer(async (req, res) => {
  res.end('<html><h1>Starting with Node</h1></html>')
})

server.listen(PORT, () => console.log(`Server running in port ${PORT}`))
