const contacts = require("../data/contacts")

const showAllContacts = (req, res) => {
    res.json(contacts)
}

const showOneContact = (req, res) => {
    const correctContact = contacts.find((contact) => contact._id == req.params.id)
    res.json(correctContact)
}

const addContact = (req, res) => {
    let counter = contacts.length
    contacts.push({
        _id: ++counter,
        body: req.body,
        postID: 1
    })
    res.json(contacts[contacts.length - 1])
}

module.exports = {
    showAllContacts,
    showOneContact,
    addContact
}