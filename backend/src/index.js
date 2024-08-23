import express from 'express'
import { router } from './routes/router.js'

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(router)

app.get('/', (req, res) => {
  res.json({
    message: 'Service is running.',
  })
})

app.listen(3333)
