const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  picture: String,
  userId: String,
});

module.exports = mongoose.model("User", UserSchema);
