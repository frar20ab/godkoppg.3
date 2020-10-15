const User = require("../model/user");

let User1 = new User("Frederik")

function userController(req, res) {
    res.end(JSON.stringify(User1))
}


module.exports = userController