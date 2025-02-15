const mongoose = require('mongoose')

const ParticipantSchema =new mongoose.Schema({
    name : String,
    email : String,
    password : String
})

const ParticipantModel =mongoose.model('participants', ParticipantSchema)
module.exports = ParticipantModel