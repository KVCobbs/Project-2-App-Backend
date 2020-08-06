
const Insults = require("../Models/Insults.js")


//Index which will get all insults
const index = async (request,response) => {
    try {
    const allInsults = await Insults.find({})
    console.log(allInsults);
    response.status(200).json(allInsults)
    
    }
    catch(error){
        response.status(400).send(error)
    }
}

//Create - Make a new insult
const create = async (request, response ) => {
    try {
        const newInsults = await Insults.create(request.body)
        response.status(200).json(newInsults)
    }
    catch(error){
        response.status(400).send(error)
    }
}

//update - updates an insult
const update = async(request, response) => {
    try{
        const updatedInsults = await Insults.findByIdAndUpdate(request.params.id, request.body,
        {new:true})
        response.status(200).json(updatedInsults)
    }
    catch(error){
            response.status(400).send(error)
    }
}

//destroy- deletes a insult
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

//something

