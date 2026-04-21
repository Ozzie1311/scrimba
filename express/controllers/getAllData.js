import { queryFunction } from '../utils/queryFunction.js'

export const getAllData = (req, res) => {
  const data = queryFunction(req, res)
  res.json(data)
}
