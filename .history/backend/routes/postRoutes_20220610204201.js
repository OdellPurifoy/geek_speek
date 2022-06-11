const express = require('express')
const router = express.Router()

// Gets all posts
router.get('/', (req, res) => {
    res.status(200).json({ message : 'Get posts'})
})

// Creates a post
router.post('/', (req, res) => {
    res.status(200).json({ message : 'Create a post'})
})

router.put('/:id', (req, res) => {
    res.status(200).json({ message : `Update a post ${req.params.id}`})
})

router.delete('/:id', (req, res) => {
    res.status(200).json({ message : `Delete a post ${req.params.id}`})})

module.exports = router