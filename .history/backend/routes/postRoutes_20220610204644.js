const express = require('express')
const router = express.Router()
const { getPosts } = require('../controllers/postController')

// Gets all posts
router.get('/', getPosts)

// Creates a post
router.post('/', (req, res) => {
    res.status(200).json({ message : 'Create a post'})
})

// Updates a post
router.put('/:id', (req, res) => { 
    res.status(200).json({ message : `Update a post ${req.params.id}`})
})

// Deletes a post
router.delete('/:id', (req, res) => {
    res.status(200).json({ message : `Delete a post ${req.params.id}`})})

module.exports = router