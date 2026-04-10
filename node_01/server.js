import http from 'node:http'
import { getDataFromDB } from './database/db.js'
import { makeResponse } from './utils/makeResponse.js'
import { filterData } from './utils/filterData.js'
import { filterByQuery } from './utils/filterByQuery.js'
const PORT = 8000

const server = http.createServer(async (req, res) => {
  const destinations = await getDataFromDB()

  const urlObj = new URL(req.url, `http://${req.headers.host}`)
  const queryObj = Object.fromEntries(urlObj.searchParams)
  console.log(urlObj.pathname)

  if (urlObj.pathname === '/api/' && req.method === 'GET') {
    let filteredData = filterByQuery(destinations, queryObj)
    makeResponse(res, 200, filteredData)
  } else if (req.url === '/api' && req.method === 'GET') {
    makeResponse(res, 200, destinations)
  } else if (req.url.startsWith('/api/continent') && req.method === 'GET') {
    const continent = req.url.split('/').pop()
    const filteredData = filterData(destinations, 'continent', continent)
    makeResponse(res, 200, filteredData)
  } else if (req.url.startsWith('/api/country') && req.method === 'GET') {
    const country = req.url.split('/').pop()
    const filteredData = filterData(destinations, 'country', country)
    makeResponse(res, 200, filteredData)
  } else {
    makeResponse(res, 404, {
      error: 'Not found',
      message: 'Unable to reach route',
    })
  }
})

server.listen(PORT, () => console.log(`Server running in port ${PORT}`))
