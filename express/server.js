import express from 'express'
import cors from 'cors'
import { apiRoutes } from './routes/apiRoutes.js'

const PORT = 8005

const app = express()

app.use(cors())

app.use('/api', apiRoutes)

app.use((req, res, next) => {
  res.status(404).json({
    message: 'Endpoint not found. Please check the API documentation.',
  })
})

app.listen(PORT, () =>
  console.log(`Server running with success in port ${PORT}`),
)
