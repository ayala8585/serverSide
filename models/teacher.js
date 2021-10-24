const mongoose = require("mongoose");

const teacherSchema = mongoose.Schema({
  contacId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Contact",
    required,
    unique,
  },
  institutions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Institution",
    required,
  }],
});

module.exports = mongoose.model("Teacher", teacherSchema);