const getPosts = (req, res) => {
    res.status(200).json({ message : 'Get posts'})
}

module.exports = {
    getPosts,
}