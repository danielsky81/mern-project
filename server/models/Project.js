const mongoose = require('mongoose');

const PorjectSchema = new mongoose.Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  status: {
    type: String,
    enum: ['Not Started', 'In Porgress', 'Completed']
  },
  clinetId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client'
  },
})

module.exports = mongoose.model('Porject', PorjectSchema);