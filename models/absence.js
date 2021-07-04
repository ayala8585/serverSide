const mongoose = require('mongoose');
const lesson = require('./lessonAbsence')

const absenceSchema = new mongoose.Schema({
    teacherId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher',
        required
    },
    institutionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Institution',
        required
    },
    lessons:[lesson],
    optionalSubstitutes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Substitute',
        required
    }],
    substitute:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Substitute'
    }
})

module.exports = mongoose.model('Absence', absenceSchema);