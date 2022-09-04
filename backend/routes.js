const { Router } = require('express');
const routes = Router();
const CadastrodeBlogs = require('./src/controllers/CadastrodeBlogs');
const PegarPosts = require('./src/controllers/PegarPosts');

routes.post('/CreateBlog', CadastrodeBlogs);
routes.get('/posts', PegarPosts);

module.exports = routes;
