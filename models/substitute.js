const mongoose = require("mongoose");

const substituteSchema = new mongoose.Schema({
  contactId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Contact",
    required: true,
    unique: true,
  },
  seniority: {
    type: Number,
    required: true,
  },
  isBjGraduate: {
    type: Boolean,
    required: true,
  },
  teachingCertificatePath: {
    type: String,
  },
  professions: [
    // {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Profession",
    // },
  ],
  institutions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Institution",
  }],
});

module.exports = mongoose.model("Substitute", substituteSchema);
