const mongoose = require("mongoose");

const substituteSchema = new mongoose.Schema({
  contacId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Contact",
    required,
    unique,
  },
  seniority: {
    type: Number,
    required,
  },
  isBjGraduate: {
    type: Boolean,
    required,
  },
  teachingCertificatePath: {
    type: String,
  },
  professions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Profession",
    },
  ],
});

module.exports = mongoose.model("Substitute", substituteSchema);
