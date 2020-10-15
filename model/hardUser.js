//model - harduser = user array

const User = require("../model/user");

let user1 = new User("Frederik", "Arvedsen", "21", "fa@gmail.com", "12345678")

function hardUser(req, res) {
    res.end(JSON.stringify(User1))
}


module.exports = hardUser

