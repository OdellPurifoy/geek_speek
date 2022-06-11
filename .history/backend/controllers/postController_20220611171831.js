// @desc Gets all posts
// @route GET /api/posts
// @access Private
const getPosts = (req, res) => {
    res.status(200).json({ message : 'Get posts'})
}

// @desc Create a post 
// @route POST /api/posts
// @access Private
const createPost = (req, res) => {
    console.log(req.body)
    res.status(200).json({ message : 'Create a post'})
}

// @desc Updates a post
// @route PUT /api/posts/:id
// @access Private
const updatePost = (req, res) => {
    res.status(200).json({ message : `Update a post ${req.params.id}`})
}

// @desc Delete a post
// @route DELETE /api/posts/:id
// @access Private
const deletePost = (req, res) => {
    res.status(200).json({ message : `Delete a post ${req.params.id}`})
}

module.exports = {
    getPosts,
    createPost,
    updatePost,
    deletePost,
}