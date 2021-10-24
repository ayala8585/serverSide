const mongoose = require('mongoose');

import address from "./address";
import isEmail from 'validator/lib/isEmail';

const contactSchema = new mongoose.Schema({
    personId: {
        type: String,
        required,
        unique
    },
    password: {
        type: String,
        required
    },
    firstName: {
        type: String,
        required
    },
    lastName: {
        type: String,
        required
    },
    email: {
        type: String,
        isEmail,
        required
    },
    phoneNumber: {
        type: String,
        required
    },
    birthDate:{
        type:Date,
        required
    },
    gender:{
        type:Boolean,
        required
    },
    address:address
})

module.exports = mongoose.model('Contact', contactSchema);