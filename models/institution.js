const mongoose = require("mongoose");
const address = require("./address");

import isEmail from "validator/lib/isEmail";

const institutionSchema = new mongoose.Schema({
  institutionSymbol: {
    type: Number,
    required,
    unique,
  },
  password: {
    type: String,
    required,
  },
  name: {
    type: String,
    required,
  },
  address: address,
  email: [
    {
      type: String,
      isEmail,
      required,
    },
  ],
  phoneNumber: [
    {
      type: String,
      required,
      minLength: 7,
      maxLength: 10,
    },
  ],
  managerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Contact",
    required,
  },
});

module.exports = mongoose.model("Institution", institutionSchema);
