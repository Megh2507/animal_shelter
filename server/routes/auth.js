const router = require("express").Router();
const User = require("../models/User");


//REGISTER
router.post("/giveaway", async (req, res) => {
    try {

        //create new user
        const newUser = new User({
            pet_type: req.body.pet_type,
            breed: req.body.breed,
            username: req.body.username,
            email: req.body.email,
            phone_no: req.body.phone_no,
        });

        //save user and respond
        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err)
    }
});

//adobption form and show all pets page needs a get request
router.get('/allpets', function (req, res) {
    let users = User.find({}, function (err, users) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(users);
        }
    });
});
module.exports = router;