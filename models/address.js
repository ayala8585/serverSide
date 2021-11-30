const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    city: {
        type: String,
        required
    },
    Street: {
        type: String,
        required
    },
    number: {
        type: Number,
        required
    }
})

module.exports = mongoose.model('Address', addressSchema);