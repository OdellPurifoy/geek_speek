const express = require('express')
const router = express.Router()
const { getPosts, createPost, updatePost, deletePost } = require('../controllers/postController')

// Gets and creates a post using the same route
router.route('/').get(getPosts).post(createPost)

// Updates a post
router.put('/:id', updatePost)

// Deletes a post
router.delete('/:id', deletePost)

module.exports = router