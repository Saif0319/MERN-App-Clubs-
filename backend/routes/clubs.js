const express = require("express")
const Club = require("../models/club")
const { createClub, getAllClubs, getOneClub, deleteClub, updateClub } = require("../controllers/clubController")

const router = express.Router()

//GET all clubs
router.get("/", getAllClubs)


//GET a single club
router.get("/:id", getOneClub)


//Create a club
router.post("/", createClub)


//DELETE a club
router.delete("/:id", deleteClub)


//Update a club
router.patch("/:id", updateClub)



module.exports = router