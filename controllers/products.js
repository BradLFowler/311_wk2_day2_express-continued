const products = require("../data/products")

const showAllProducts = (req, res) => {
    res.json(products)
}

const showOneProduct = (req, res) => {
    const correctProduct = products.find((product) => product._id == req.params.id)
    res.json(correctProduct)
}

const addProduct = (req, res) => {
    let counter = products.length
    products.push({
        _id: ++counter,
        body: req.body,
        postID: 1
    })
    res.json(products[products.length - 1])
}

module.exports = {
    showAllProducts,
    showOneProduct,
    addProduct
}