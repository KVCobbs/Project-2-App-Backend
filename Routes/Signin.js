
const express = require('express')
const signInRouter = express.Router()
const{index,create} = require('../Controllers/Signin.js')

//all insults
signInRouter.get("/",index);

//create new insults
signInRouter.post("/",create);



module.exports = signInRouter

