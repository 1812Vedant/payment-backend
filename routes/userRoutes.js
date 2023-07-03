const express = require("express");
const Router = express.Router();
const { createUser, getAllUsers } = require("../controller/userController");

Router.route("/").post(createUser).get(getAllUsers);

module.exports = Router;
