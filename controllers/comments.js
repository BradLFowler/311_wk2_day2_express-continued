const comments = require('../data/comments')

const showAllcomments = (req, res) => {
    res.json(comments)
}

const showOneComment = (req, res) => {
    const correctComment = comments.find((comment) => comment._id == req.params.id)
    res.json(correctComment)
}

const addComment = (req, res) => {
    let counter = comments.length
    comments.push({
        _id: ++counter,
        body: req.body,
        postID: 1
    })
    res.json(comments[comments.length - 1])
}

module.exports = {
    showAllcomments,
    showOneComment,
    addComment
}