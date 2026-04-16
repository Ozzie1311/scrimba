import { sendResponse } from '../utils/sendResponse.js'
import { getData } from '../utils/getData.js'
import { parseJSONBody } from '../utils/parseJSONBody.js'
import { addNewSighting } from '../utils/addNewSighting.js'
import { sanitizeInput } from '../utils/sanitizeData.js'
import { sightingEvents } from '../events/sightingEvents.js'
import { stories } from '../data/stories.js'

export const getHandler = async (res) => {
  const data = await getData()
  const strData = JSON.stringify(data)
  sendResponse(res, 200, 'application/json', strData)
}

export const handlePost = async (req, res) => {
  console.log('POST received')
  try {
    const rawBody = await parseJSONBody(req)
    const sanitizedBody = sanitizeInput(rawBody)
    await addNewSighting(sanitizedBody)
    sightingEvents.emit('sighting-added', sanitizedBody)
    sendResponse(res, 200, 'application/json', JSON.stringify(sanitizedBody))
  } catch (err) {
    sendResponse(res, 404, 'application/json', JSON.stringify({ error: err }))
  }
}

export async function handleNews(req, res) {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/event-stream')
  res.setHeader('Cache-control', 'no-cache')
  res.setHeader('Connection', 'keep-alive')

  setInterval(() => {
    let randomIndex = Math.floor(Math.random() * stories.length)

    res.write(
      `data: ${JSON.stringify({
        event: 'news-update',
        story: stories[randomIndex],
      })}\n\n`,
    )
  }, 3000)
}
