// @desc Register new user
// @route POST /api/users
// @access Public
const registerUser = (req, res) => {
    res.json({message: 'Register User'})
}

// @desc Authenticate a user
// @route POST /api/users/login
// @access Public
const loginUser = (req, res) => {
    res.json({message: 'Login User'})
}

// @desc Get User data
// @route GET /api/users/me
// @access Private
const getMe = (req, res) => {
    res.json({message: 'User data display'})
}

module.exports = { 
    registerUser,
    loginUser,
    getMe,
}