//This here was alex's idea for a sign in so users can save their own insults and have their
//own library. I also need to come up with a way to generate a new page instead of coming up with
// a whole new seperate page

const mongoose = require('mongoose')
const{Schema,model} = require('mongoose')

const signInSchema = new Schema ({
    Username:{type:String},
    Password:{type:Number}
})

const SignIn = model('signin', signInSchema)
module.exports = signIn