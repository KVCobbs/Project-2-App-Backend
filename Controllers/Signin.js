const db = require("../db/")
const Signins = require("../Models/Signin.js")


//Index which will get all insults
const index = async (request,response) => {
    try {
    const allsignIn = await Signins.find({})
    console.log(allsignIn);
    response.status(200).json(allsignIn)
    
    }
    catch(error){
        response.status(400).send(error)
    }
}

//Create - Make a new insult
const create = async (request, response ) => {
    try {
        const createsignIn = await Signins.create(request.body)
        response.status(200).json(createsignIn)
    }
    catch(error){
        response.status(400).send(error)
    }
}

//exporting more than one thing. You just make it an object. 

module.exports = {
    index,
    create,
}