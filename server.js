console.log("Hello world");

const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.render("app")
})

app.listen(3000);