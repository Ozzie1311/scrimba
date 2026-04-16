export const makeResponse = (res, status, data) => {
  res.setHeader('Content-Type', 'application/json')
  res.statusCode = status
  res.end(JSON.stringify(data))
}
