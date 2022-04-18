const express = require('express')
const productsRout = express.Router()
const controller = require('../controllers/products')

productsRout.get("/products", controller.showAllProducts)
productsRout.get("/products/:id", controller.showOneProduct)
productsRout.post("/products", controller.addProduct)

module.exports = productsRout