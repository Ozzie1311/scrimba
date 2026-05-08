import { startups } from '../data/data.js'

const errorMsg = {
  message:
    "Search field not allowed. Please use only 'country', 'continent', 'industry'",
}

export const getDataByPathParams = (req, res) => {
  const { field, field_name } = req.params
  const allowedFields = ['country', 'continent', 'industry']

  let filteredData

  if (
    field === allowedFields[0] ||
    field === allowedFields[1] ||
    field === allowedFields[2]
  ) {
    filteredData = startups.filter((s) => {
      return !field_name || s[field].toLowerCase() === field_name.toLowerCase()
    })
  } else {
    res.json(errorMsg)
  }

  res.json(filteredData)
}
