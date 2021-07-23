const Pet = require("../models/pet.model");

//Eport an object that is full of methods
module.exports = {
  //long-form - key: value formay
  create: function (req, res) {
    console.log("create method executed")

    Pet.create(req.body)
    .then((pet) => {
      //Newly created DB instance
      res.json(pet);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
  },
  //Shorthand key value pair, key name will be the name of the function and value will be the function. 
  getAll(req,res) {
    console.log("getAll method executed");

    Pet.find()
    .then((pets) => {
      //newly created DB model instance
      res.json(pets)
    })
    .catch((err) => {
      res.status(400).json(err);
    });
  },
  getOne(req,res) {
    console.log("getOne method Executed", "url params", req.params);

    Pet.findById(req.params.id)
    .then((pet) => {
      res.json(pet)
    })
    .catch((err) => {
      res.status(400).json(err);
    });
  },

  delete(req, res) {
    console.log("delete method executed","url params", req.params);

    Pet.findByIdAndDelete(req.params.id)
      .then((pet) => {
        res.json(pet);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  update(req, res) {
    console.log("update method executed", "url params:", req.params); 

    Pet.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true,
    })
    .then((updatedPet) => {
      res.json(updatedPet);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
  },
};
