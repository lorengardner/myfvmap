const http = require("http")
const express = require('express')
const app = express()
const port = 8000;

app.get("/", (req, res) => {
    res.sendFile("index-maplibre.html", {root: "."})
})

// app.get("/factoryview/", (req, res) => {
//     res.sendFile("factoryview.html", {root: "."})
// })

http.createServer(app).listen(8000)
