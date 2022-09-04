const post = require('../database/models/post.model');

const PegarPosts = async (req, res)=>{
    const myPosts = await post.find({});
    try {
        res.json(myPosts)
    } catch (error) {
        res.json({Error: "there are no posts here :/", E: error})
    }
}

module.exports = PegarPosts;
