const mongoose = require("mongoose");

const substituteSchema = new mongoose.Schema({
  contacId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Contact",
    required: true,
    unique,
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
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Profession",
    },
  ],
});

module.exports = mongoose.model("Substitute", substituteSchema);
