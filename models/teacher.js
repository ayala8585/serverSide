const mongoose = require("mongoose");

const teacherSchema = mongoose.Schema({
  contacId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Contact",
    required: true,
    unique: true,
  },
  institutions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Institution",
      required: true,
    },
  ],
});

module.exports = mongoose.model("Teacher", teacherSchema);
