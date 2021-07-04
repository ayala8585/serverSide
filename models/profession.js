const mongoose = require('mongoose');

const professionSchema = new mongoose.Schema({

    name: {
        type: String,
        required,
        unique
    }
})

module.exports = mongoose.model('Profession', professionSchema);