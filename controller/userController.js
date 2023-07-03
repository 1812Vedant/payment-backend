const User = require("../model/User");
const asyncHandler = require("../utils/asyncHandler");

const createUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.create({ email, password });

  return res.status(202).json({
    user,
  });
});

const loginUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.find({ email });

  if (user) {
    return req.status(202).json({
      data: user,
      status: "success",
    });
  } else {
    next(new Error("User does not exist please signup first"));
  }
});

const getAllUsers = asyncHandler(async (req, res, next) => {
  const users = await User.find({});

  return res.status(202).json({
    users,
    total: users.length,
  });
});

module.exports = { createUser, getAllUsers };
