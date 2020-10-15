const express = require("express")
const server = express()
const port = 3000

let userController = require("../Controller/userController")

server.get("/", userController)

server.listen(port, () => {
    console.log("server-applikation lytter på http://localhost:p${ort}")
})