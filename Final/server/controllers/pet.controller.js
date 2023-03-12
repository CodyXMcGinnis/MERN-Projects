const Pet = require("../models/pets.model");

const createPet = (req, res) => {
    Pet.create(req.body)
        .then((newPet) => {
            res.json({ newPet });
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
};

const displayAllPets = (req, res) => {
    Pet.find()
        .then((allPets) => {
            res.json(allPets);
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
};

const displayPet = (req, res) => {
    Pet.findOne({ _id: req.params.id })
        .then((queriedPet) => {
            res.json(queriedPet);
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
};

const updatePet = (req, res) => {
    Pet.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
    })
        .then((updatedPet) => {
            res.json({ updatedPet });
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
};

const deletePet = (req, res) => {
    Pet.deleteOne({ _id: req.params.id })
        .then((deletedResponse) => {
            res.json({ deletedResponse });
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
};

module.exports = {
    createPet,
    displayPet,
    displayAllPets,
    updatePet,
    deletePet,
};