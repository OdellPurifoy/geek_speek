const express = require('express')
const router = express.Router()
const { getPosts, createPost, updatePost, deletePost } = require('../controllers/postController')
const { protect } = require('../middleware/authMiddleware')

// Gets and creates a post using the same route
router.route('/').get(protect, getPosts).post(createPost)  

// Updates and deletes a post using the same route structure
router.route('/:id').delete(deletePost).put(updatePost)

module.exports = router