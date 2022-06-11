// Package brought in to help with async/Promise error handling
const asyncHandler = require('express-async-handler')

// @desc Gets all posts
// @route GET /api/posts
// @access Private
const getPosts = asyncHandler(async (req, res) => {
    res.status(200).json({ message : 'Get posts'})
})

// @desc Create a post 
// @route POST /api/posts
// @access Private
const createPost = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text value')
    }
    res.status(200).json({ message: 'Create a post'})
})

// @desc Updates a post
// @route PUT /api/posts/:id
// @access Private
const updatePost = asyncHandler(async (req, res) => {
    res.status(200).json({ message : `Update a post ${req.params.id}`})
})

// @desc Delete a post
// @route DELETE /api/posts/:id
// @access Private
const deletePost = asyncHandler(async (req, res) => {
    res.status(200).json({ message : `Delete a post ${req.params.id}`})
})

module.exports = {
    getPosts,
    createPost,
    updatePost,
    deletePost,
}