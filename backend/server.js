import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'
import productRoutes from './routes/productRoutes.js'
import connectDB from './config/db.js'

dotenv.config()
connectDB()

const PORT = process.env.PORT || 4500

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res)=> res.send('This API is running'))

app.use('/api/users', userRoutes)
app.use('/api/products', productRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
})

//express() creates the app
//app.use(cors()) enables cross-origin access for frontend
//app.use(express.json()) parses incoming JSON requests
//app.get('/', ...) adds a test route
//PORT is taken from .env or defaults to 4500