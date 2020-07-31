const mongoose = require('mongoose')
const Schema = mongoose.Schema 
const {Schema,model} = require('mongoose')

const firstInsultSchema = new Schema (
    {
        name: {type:String},
    }
)
const secondInsultSchema = new Schema ({
    name:{type:String},
})

const Insult = model('insultSchema', insultSchema)
module.exports = Insults