const express = require('express')
const router = express.Router()

router.get('/api/posts', (req, res) => {
    res.status(200).json({ message : 'Get posts'})
})

module.exports = router