const mongoose = require("mongoose")
const Club = require("../models/club")

//GET all clubs
const getAllClubs = async (req, res) => {
    const clubs = await Club.find({}).sort({createdAt: -1})
    
    res.status(200).json(clubs)
}


//GET a single club
const getOneClub = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No Club Found"})
    }

    const club = await Club.findById(id)

    if(!club) {
        res.status(404).json({error: "Club does not exist"})
    }

    res.status(200).json(club)
}



//Create a club
const createClub = async (req, res) => {
    const {name, division, country} = req.body

    const emptyFields = []


    if(!name) {
        emptyFields.push("name")
    }

    if(!country) {
        emptyFields.push("country")
    }

    if(!division) {
        emptyFields.push("division")
    }

    if (emptyFields.length > 0) {
        return res.status(400).json({error: "Please fill in all the reqiured fields", emptyFields})
    }


    try {
        const club = await Club.create({name, division, country})
        res.status(200).json(club)
    }

    catch (err) {
        res.status(400).json({error: err.message})
    }
}




//DELETE a club
const deleteClub = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Club does not exist"})
    }

    const club = await Club.findOneAndDelete({_id: id})

    if(!club){
        return res.status(400).json({error: "Club does not exist"})
    }

    res.status(200).json(club)
}



//Update a club
const updateClub = async (req, res) => {
    const { id } = req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Club does not exist"})
    }

    const club = await Club.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    res.status(200).json(club)
}




module.exports = {
    createClub,
    getAllClubs,
    getOneClub,
    deleteClub,
    updateClub
}