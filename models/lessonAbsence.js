const mongoose = require("mongoose");

const lessonAbsenceSchema = new mongoose.Schema({
  teacherId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teacher",
    required: true,
  },
  instiitution: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Institution",
    required: true,
  },
  grade: {
    type: Number,
    required: true,
  },
  gradeNumber: {
    type: Number,
    required: true,
  },
  profession: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Profession",
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  substituteSuggestion: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Substitiute",
    },
  ],
  actualSubstitute: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Substitiute",
  },
});

module.exports = mongoose.model("LessonAbsence", lessonAbsenceSchema);
