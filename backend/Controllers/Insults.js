/*
This is code that I had when I was trying to seed my database but looking at it I might not need it at all

const Insults = require('../Models/Insults.js')
const data = require('../db/seed.js')

//Index handler
const index = async (req,res) => {
    res.json(await Insults.find({}))
}

//Seed route
const seed = async(req,res) => {
    res.json(await Insults.create(data))
}

// I have to finish writing routes DX 

module.exports = {
    index,
    seed
}
*/

const Insults = require("../Models/Insults.js")
//const { findByIdAndUpdate } = require("../Models/gifs.js")

//Index which will get all gifs
const index = async (request,response) => {
    try {
    const allInsults = await Insults.find({})
    response.status(200).json(allInsults)
    }
    catch(error){
        response.status(400).send(error)
    }
}


//Create - Make a new gif
const create = async (request, response ) => {
    try {
        const newInsults = await Insults.create(request.body)
        response.status(200).json(newInsults)
    }
    catch(error){
        response.status(400).send(error)
    }
}

//update - updates a gif
const update = async(request, response) => {
    try{
        const updatedInsults = await Insults.create
        findByIdAndUpdate(request.params.id, request.body,
        {new:true})
        response.status(200).json(updatedInsults)
    }
    catch(error){
            response.status(400).send(error)
    }
}

//destroy- deletes a gif
const destroy = async(request,response) => {
    try{
            const deletedInsults = await Insults. 
            findByIdAndDelete(request.params.id);
            response.status(200).json(deletedInsults);
    }
    catch(error){
        response.status(400).send(error)
    }
}

//Seed route
const seed = async(request,response) => {
    response.json(await Insults.create(data))
}

//exporting more than one thing. You just make it an object. 

module.exports = {
    index,
    create,
    update,
    destroy,
    seed,
}
