// Package brought in to help with async/Promise error handling
const asyncHandler = require('express-async-handler')

const Post = require('../models/postModel')

// @desc Gets all posts
// @route GET /api/posts
// @access Private
const getPosts = asyncHandler(async (req, res) => {
    const posts = await Post.find()

    res.status(200).json(posts)
})

// @desc Create a post 
// @route POST /api/posts
// @access Private
const createPost = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Missing a text or title value')
    }

    const post = await Post.create({
        text: req.body.text
    })

    res.status(200).json(post)
})

// @desc Updates a post
// @route PUT /api/posts/:id
// @access Private
const updatePost = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id)

    if(!post) {
        res.status(400)
        throw new Error('Post not found')
    }

    // Tries to find and update the post - if it doesn't exist it'll create a new one.
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true } )

    res.status(200).json(updatePost)
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