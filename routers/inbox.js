const express = require("express");
const router = express.Router();

//login page
router.get("/", (req, res) => {
    res.render("inbox", {
        title: "Inbox page"
    })
})
module.exports = router