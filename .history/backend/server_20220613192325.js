const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config({ path: '.env' })
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

// Function call connects the DB
connectDB()
 
const app = express()

// Middleware for parsing request body data
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/posts', require('./routes/postRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

//Overwrites the default express error handler
app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))