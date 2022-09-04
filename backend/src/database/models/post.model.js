const mongoose = require ('mongoose');

const postSchema = new mongoose.Schema({
    user:{
        type: String,
        require: true,
    },
    book:{
        type: String,
        require: true
    },
    message:{
        type: String,
        require: true
    }
})

const model = mongoose.model('Post', postSchema);

module.exports = model;
