const mongoose = require('mongoose');
import isEmail from 'validator/lib/isEmail'
const contact = require('./contact')

const institutionSchema = new mongoose.Schema({
    institutionSymbol: {
        type: Number,
        required,
        unique
    },
    password: {
        type: String,
        required
    },
    name: {
        type: String,
        required
    },
    address: contact,
    email: {
        type: String,
        isEmail,
        required
    },
    phoneNumber: {
        type: String,
        required
    }
})

module.exports = mongoose.model('Institution', institutionSchema);