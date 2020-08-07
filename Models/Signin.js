//This here was alex's idea for a sign in so users can save their own insults and have their
//own library. I also need to come up with a way to generate a new page instead of coming up with
// a whole new seperate page

const mongoose = require('mongoose')
const{Schema,model} = mongoose

const signInSchema = new Schema ({
    name: String,
    insult:{type:Schema.Types.ObjectId,ref:'insults'}
})

const signIn = model('signin', signInSchema)
module.exports = signIn

