const express = require('express')
const dotenv = require('dotenv').config({ path: '.env' })
const { errorHandler } = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000

const app = express()

// Middleware for parsing request body data
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/posts', require('./routes/postRoutes'))

//Overwrites the default express error handler
app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))