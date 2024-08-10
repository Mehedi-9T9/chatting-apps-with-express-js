const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser");

const path = require("path");
const app = express();
const port = process.env.PORT || 5000
require('dotenv').config()

const { pageNotFound, handleError } = require("./middlewares/errorHandle");
const loginRouter = require('./routers/login');
const usersRouter = require('./routers/users');
const inboxRouter = require('./routers/inbox');






//Database Connection
mongoose.connect(process.env.Database_URL).then(() => console.log('database connection successfull'))
    .catch((err) => console.log(err))


// request parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




// set view engine
app.set("view engine", "ejs");

// set static folder
app.use(express.static(path.join(__dirname, "public")));

// parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));


//Routing
app.use("/", loginRouter)
app.use("/users", usersRouter)
app.use("/inbox", inboxRouter)
// app.use("/", (req, res) => {
//     res.render("login")
// })


//pageNotFound
app.use(pageNotFound)

//common error
app.use(handleError)



app.listen(port, () => {
    console.log('the server is running');
})