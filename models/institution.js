const mongoose = require("mongoose");
const address = require("./address");

import isEmail from "validator/lib/isEmail";

const institutionSchema = new mongoose.Schema({
  institutionSymbol: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  address: address,
  email: [
    {
      type: String,
      isEmail,
      required: true,
    },
  ],
  phoneNumber: [
    {
      type: String,
      required: true,
      minLength: 7,
      maxLength: 10,
    },
  ],
  managerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Contact",
    required: true,
  },
  requirements: {
    experience: {
      type: Number,
    },
    certificate: {
      type: Boolean,
    },
    minAge: {
      type: Number,
    },
    gender: {
      type: "MALE" | "FEMALE",
    },
    BJGraduate: {
      type: Boolean,
    },
  },
});

module.exports = mongoose.model("Institution", institutionSchema);
