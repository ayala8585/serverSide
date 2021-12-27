const mongoose = require("mongoose");

const address = require("./address");
const isEmail = require("validator/lib/isEmail");

const contactSchema = new mongoose.Schema({
  personId: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    isEmail,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  birthDate: {
    type: Date,
    // required: true,
  },
  gender: {
    type: Boolean,
    required: true,
  },
  roles: [
    {
      type: String//"TEACHER" | "SUBSTITUTE" | "MANAGER",
    },
  ],
  address: address,
});

module.exports = mongoose.model("Contact", contactSchema);
