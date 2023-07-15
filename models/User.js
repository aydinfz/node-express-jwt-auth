const mongoose = require("mongoose");
const { isEmail } = require("validator");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please enter a valid email"],
    unique: true,
    lowercase: true,
    validate: [isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please enter a valid password"],
    minlength: [6, "Minimum password length is 6 characters"],
  },
});

userSchema.pre("save", function (next) {
  console.log("user about to be created & saved", this);
  next();
});

userSchema.post("save", function (doc, next) {
  console.log("new user was created & saved", doc);
  next();
});

const User = mongoose.model("user", userSchema);

module.exports = User;
