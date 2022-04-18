const express = require('express')
const contactsRout = express.Router()
const controller = require('../controllers/contacts')

contactsRout.get("/contacts", controller.showAllContacts)
contactsRout.get("/contacts/:id", controller.showOneContact)
contactsRout.post("/contacts", controller.addContact)

module.exports = contactsRout