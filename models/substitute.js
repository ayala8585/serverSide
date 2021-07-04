const mongoose = require('mongoose');

const substituteSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Contact',
        required,
        unique
    },
    seniority: {
        type: Number,
        required
    },
    isBjGraduate: {
        type: Boolean,
        required
    },
    teachingCertificatePath: {
        type: String
    }
})

module.exports = mongoose.model('Substitute', substituteSchema);