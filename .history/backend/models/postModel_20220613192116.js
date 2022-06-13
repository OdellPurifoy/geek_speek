const mongoose = require('mongoose')

const postSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId
        },
        text: { 
            type: String, 
            required: [true, 'Please add a body']
        },
    },
    { 
        timestamps: true, 
    }
) 

module.exports = mongoose.model('Post', postSchema)