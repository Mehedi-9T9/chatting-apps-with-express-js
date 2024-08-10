const createError = require("http-errors");

const pageNotFound = (req, res, next) => {
    next(createError("404", "Your content was not found"))
}

const handleError = (error, req, res, next) => {
    res.render("error", {
        title: "Error Page"
    })
}
module.exports = {
    pageNotFound,
    handleError
}
// function notFoundHandler(req, res, next) {
//     next(createError(404, "Your requested content was not found!"));
//   }
