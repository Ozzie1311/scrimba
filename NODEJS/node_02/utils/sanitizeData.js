import sanitize from 'sanitize-html'

export const sanitizeInput = (data) => {
  const sanitizedData = {}

  for (const [key, value] of Object.entries(data)) {
    if (typeof value === 'string') {
      sanitizedData[key] = sanitize(value, {
        allowedTags: ['b'],
        allowedAttributes: {},
      })
    } else {
      sanitizedData[key] = value
    }
  }

  return sanitizedData
}
