const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const ParticipantModel = require('./models/Participant')

const app =express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/participant");


app.post('/register', (req,res)=>{
    ParticipantModel.create(req.body)
    .then(participants => res.json(participants))
    .catch(err => res.json(err))
})

app.listen(3001, ()=>{
    console.log("server is running")
})