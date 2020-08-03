
const express = require('express')
const InsultsRouter = express.Router()
const{index,create,update,destroy,} = require('../Controllers/Insults.js')

//all insults
InsultsRouter.get("/",index);

//create new insults
InsultsRouter.post("/",create);

//update an insult
InsultsRouter.put("/:id",update);

//destroy an insult
InsultsRouter.put("/:id",destroy);


module.exports = InsultsRouter
