const express = require('express')
const commentsRout = express.Router()
const controller = require('../controllers/comments')

commentsRout.get('/comments', controller.showAllcomments)
commentsRout.get('/comments/:id', controller.showOneComment)
commentsRout.post("/comments", controller.addComment)

module.exports = commentsRout