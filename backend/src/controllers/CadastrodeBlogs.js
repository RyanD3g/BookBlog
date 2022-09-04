const post = require('../database/models/post.model');

const Criar_Blog = async (req, res)=>{
    const postPosted = await post.create(req.body);
    try {
        res.json({postPosted});
    } catch (error) {
        res.json({Error: "Unable to create your post :("});
    }
}

module.exports = Criar_Blog;
