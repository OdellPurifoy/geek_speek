const express = require('express')
const router = express.Router()
const { getPosts, createPost, updatePost, deletePost } = require('../controllers/postController')

// Gets and creates a post using the same route
router.route('/').get(getPosts).post(createPost)

// Updates and deletes a post using the same route structure
router.route('/:id').delete(deletePost).put(updatePost)

module.exports = router