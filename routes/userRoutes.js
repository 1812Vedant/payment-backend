const express = require("express");
const Router = express.Router();
const { createUser, getAllUsers } = require("../controller/userController");
const handleCors = require("../utils/handleCors");

Router.route("/").post(handleCors, createUser).get(handleCors, getAllUsers);

module.exports = Router;
