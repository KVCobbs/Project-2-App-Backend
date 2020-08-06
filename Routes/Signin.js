
const express = require('express')
const signInRouter = express.Router()
const{index,create,update,destroy,} = require('../Controllers/Signin.js')

//all insults
signInRouter.get("/",index);

//create new insults
signInRouter.post("/",create);



module.exports = signInRouter

