const db = require('../db/index.js')
const signIn = require('../Models/Signin.js')

//users to seed
const signInSeed = [
    {name:"Kenal",},
    {name:"Weily",},
    {name:"Kwok",},
    {name:"Jordan"},
    {name:"Ebony"},
]

//insert all insults from array 
signIn.insertMany(signInSeed,
    (error,response) => {
        if (error) {
            console.log(error);
        }else {
            console.log(response);
        }
        db.close()
    })
module.exports = signIn