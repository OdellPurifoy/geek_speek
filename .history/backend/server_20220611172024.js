const express = require('express')
const dotenv = require('dotenv').config({ path: '.env' })
const port = process.env.PORT || 5000

const app = express()

// Middleware for parsing request body data
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/posts', require('./routes/postRoutes'))

app.listen(port, () => console.log(`Server started on port ${port}`))