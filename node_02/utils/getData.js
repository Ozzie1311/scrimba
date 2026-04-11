import path from 'node:path'
import fs from 'node:fs/promises'

export async function getData() {
  const pathD = path.join('data', 'data.json')
  const data = await fs.readFile(pathD, 'utf-8')
  const parsedData = JSON.parse(data)
  return parsedData
}
