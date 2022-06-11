const express = require('express')
const dotenv = require('dotenv').config({ path: '.env' })
const port = process.env.PORT || 5000

const app = express()

app.get('/api/posts', (req, res) => {
    res.json({ message : 'Get posts'})
})

app.listen(port, () => console.log(`Server started on port ${port}`))