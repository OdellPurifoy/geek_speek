const express = require('express')
const router = express.Router()
const { getPosts, createPost, updatePost, deletePost } = require('../controllers/postController')

// Gets all posts
router.get('/', getPosts)

// Creates a post
router.post('/', createPost)

// Updates a post
router.put('/:id', updatePost)

// Deletes a post
router.delete('/:id', deletePost)

module.exports = router