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

module.exports = {
    index,
    seed
}

