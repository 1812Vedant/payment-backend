const mongoose = require("mongoose");
const emailvalidator = require("email-validator");

//UserSchema.path('email') is instanceof mongoose.SchemaType =true
//SchemaType is just configuration object
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "email is compulsory "],
    unique: [true, "this email is already has been used"],
    validate: {
      validator: (email) => emailvalidator.validate(email),
      message: ({ email }) => `${email} is not valid email`,
    },
  },
  password: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 10,
  },
});

const UserModel = mongoose.model("UserModel", UserSchema);

module.exports = UserModel;
