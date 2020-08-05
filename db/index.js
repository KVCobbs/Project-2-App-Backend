const mongoose = require('mongoose')

let MONGODB_URI = process.env.PROD_MONGODB || process.env.MONGOD_URI || 'mongodb://localhost:27017/insultLibrary'

mongoose
.connect(MONGODB_URI,{useUnifiedTopology:true, useNewURLParser:true})
.catch(e => {
    console.error('Connection error:'.e.message)
})

const db = mongoose.connection

//error messages if mongoose is not connecting 
db.on('error',(err) => console.log(err.messages + "\nIs Mongod running!?"))
db.on('connected', () => console.log("Yes we're connected"));
db.on("disconnected", () => console.log("Nope no connection. "));

module.exports = db 

