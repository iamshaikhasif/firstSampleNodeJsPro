const express = require("express");
const path = require("path");
const hbs = require("hbs");
require("./db/conn.js");
const contactDb = require("./models/contactModel");
const async = require("hbs/lib/async");

const app = express();
const port = process.env.PORT || 3000;

const staticPath = path.join(__dirname, "../public");
const template = path.join(__dirname, "../template/views");
const common = path.join(__dirname, "../template/common");


app.use("/css", express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use("/js", express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));
app.use("/jq", express.static(path.join(__dirname, "../node_modules/jquery/dist")));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(staticPath));
app.set("view engine", "hbs");
app.set("views", template);
hbs.registerPartials(common);

app.get("/", (req, res) => {
    res.render("index");
})

app.post("/contact", async (req, res) => {
    try {
        // res.send(req.body);
        const data = new contactDb(req.body);
        await data.save();
        res.status(201).render("index");

    } catch (error) {
        res.status(500).send(error);
    }
})



app.listen(port, () => {
    console.log(`Server start ${port}`);
})