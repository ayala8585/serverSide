const mongoose = require('mongoose');
const profession = require('./profession')

const lessonAbsenceSchema = new mongoose.Schema({
  teacherId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teacher",
    required,
  },
  instiitution: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Institution",
    required,
  },
  grade: {
    type: Number,
    required,
  },
  gradeNumber: {
    type: Number,
    required,
  },
  profession: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Profession",
    required,
  },
  date: {
    type: Date,
    required,
  },
  from: {
    type: String,
    required,
  },
  to: {
    type: String,
    required,
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

module.exports = mongoose.model('LessonAbsence', lessonAbsenceSchema);