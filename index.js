const http = require("http")
const express = require()
const app = express()
const port = 8000;

app.get("/", (req, res) => {
    res.sendFile("index.html", {root: "."})
})

http.createServer(app).listen(3000)
