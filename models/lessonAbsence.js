const mongoose = require('mongoose');
const profession = require('./profession')

const lessonAbsenceSchema = new mongoose.Schema({
    grade: {
        type: Number,
        required
    },
    gradeNumber: {
        type: Number,
        required
    },
    profession:profession,
    date:{
        type:Date,
        required
    },
    from:{
        type:String,
        required
    },
    to:{
        type:String,
        required
    }
})

module.exports = mongoose.model('LessonAbsence', lessonAbsenceSchema);