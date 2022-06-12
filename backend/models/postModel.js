const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Please add a body']
    },
},
    {
        timestamps: true
    }
) 

module.exports = mongoose.model('Post', postSchema)