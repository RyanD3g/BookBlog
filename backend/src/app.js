const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('../routes');
const dotenv = require('dotenv');
dotenv.config();
const db = require('../src/database/connect');
db();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors())
app.use(routes);


module.exports = app;
