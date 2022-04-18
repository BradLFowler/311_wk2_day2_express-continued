const vehicles = require('../data/vehicles')

const showAllVehicles = (req, res) => {
    res.json(vehicles)
}

const showOneVehicle = (req, res) => {
    const correctVehicle = vehicles.find((vehicle) => vehicle._id == req.params.id)
    res.json(correctVehicle)
}

const addVehicle = (req, res) => {
    let counter = vehicles.length
    vehicles.push({
        _id: ++counter,
        body: req.body,
        postID: 1
    })
    res.json(vehicles[vehicles.length - 1])
}

module.exports = {
    showAllVehicles,
    showOneVehicle,
    addVehicle
}