const Signin = require("../Models/Signin.js")


//Index which will get all insults
const index = async (request,response) => {
    try {
    const allsignin = await signin.find({})
    console.log(allSignin);
    response.status(200).json(allSignin)
    
    }
    catch(error){
        response.status(400).send(error)
    }
}

//Create - Make a new insult
const create = async (request, response ) => {
    try {
        const createsignin = await signin.create(request.body)
        response.status(200).json(newSignin)
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