const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Contact',
        required,
        unique
    }
})

module.exports = mongoose.model('Role', roleSchema);