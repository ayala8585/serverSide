const mongoose = require('mongoose');

//what do we need it for?
const roleSchema = new mongoose.Schema({
  institutionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Institution",
    required,
  },
  contactId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Contact",
    required,
  },
  role:{
      //do here an enum
  }
});

module.exports = mongoose.model('Role', roleSchema);