const express = require("express");
const Router = express.Router();
const {
  createUser,
  getAllUsers,
  loginUser,
} = require("../controller/userController");
const handleCors = require("../utils/handleCors");

Router.route("/").post(handleCors, createUser).get(handleCors, getAllUsers);
Router.route("/create").post(handleCors, loginUser);

module.exports = Router;
