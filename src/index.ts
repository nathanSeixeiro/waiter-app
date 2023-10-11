import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'

import { router } from './router'

dotenv.config()

mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    const app = express()
    const port = process.env.PORT || 3001

    app.use(express.json())
    app.use(router)

    app.listen(port, () => {
      console.log(`💻 Server is running on ${port} \n`)
    })
  })
  .catch(() => console.log('❗error connect'))
