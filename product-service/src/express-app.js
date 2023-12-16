const express = require('express');
const cors  = require('cors');
const {productController} = require('./api');

module.exports = async (app) => {
    app.use(express.json());
    app.use(cors());
    productController(app)
}