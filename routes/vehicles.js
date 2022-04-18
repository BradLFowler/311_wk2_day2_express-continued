const express = require('express')
const vehiclesRout = express.Router()
const controller = require('../controllers/vehicles')

vehiclesRout.get("/vehicles", controller.showAllVehicles)
vehiclesRout.get("/vehicles/:id", controller.showOneVehicle)
vehiclesRout.post("/vehicles", controller.addVehicle)

module.exports = vehiclesRout