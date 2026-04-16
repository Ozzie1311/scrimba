import fs from 'node:fs/promises'
import path from 'node:path'
import { getData } from './getData.js'

export const addNewSighting = async (payload) => {
  try {
    const data = await getData()
    data.push(payload)
    const jsonPath = path.join('data', 'data.json')
    await fs.writeFile(jsonPath, JSON.stringify(data, null, 2), 'utf-8')
  } catch (err) {
    throw new Error('Failed to complete operation')
  }
}
