const mongoose = require('mongoose') 
//const {Schema,model} = require('mongoose')
const {Schema,model} = mongoose

const firstInsultSchema = new Schema (
    {
        name: String,
    }
)


/* My goal here in the insult generator was two words that would be put together but do I really
need another schema for that? Will ask later but for now it's throwaway code. 
const secondInsultSchema = new Schema ({
    name:{type:String},
})
*/

const Insult = model('insult', firstInsultSchema)
module.exports = Insult

