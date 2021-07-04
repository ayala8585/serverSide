const mongoose = require('mongoose');
import isEmail from 'validator/lib/isEmail'
const address = require('./address')

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
    address: address,
    email: [{
        type: String,
        isEmail,
        required
    }],
    phoneNumber: [{
        type: String,
        required,
        minLength:7,
        maxLength:10
    }]
})

module.exports = mongoose.model('Institution', institutionSchema);