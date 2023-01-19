const express = require("express");
const app = express();
const bodyparser = require("body-parser");
//require('dotenv').config();

const port = 3000;

app.set('view engine', 'ejs');
//app.set('view', './view');

app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/", (req, res) => {
    res.render("index")
})

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
})