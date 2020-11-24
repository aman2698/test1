const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  message: String,
});

module.exports = mongoose.model("Contact", ContactSchema);
