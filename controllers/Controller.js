const db = require("../models");

// Defining methods for the booksController
module.exports = {

  createPack: function (req, res) {
    // console.log(req.body)
    db.Pack.collection.insertMany([{
      title: req.body.title,
      from: req.body.from,
      to: req.body.to,
      size: req.body.size,
      weight: req.body.weight,
      image: req.body.image,
      description: req.body.description,
      receiver: req.body.receiver,
      fee: req.body.fee,
    }])
      .then(dbModel => { res.json(dbModel)})
      .catch(err => res.status(422).json(err));
  },

  findPacks: function (req, res) {
    db.Pack.find()
      // .sort({ date: -1 })
      .then(dbModel => { res.json(dbModel), console.log("find from mongo",dbModel) })
      .catch(err => res.status(422).json(err));
  },

  // findById: function (req, res) {
  //   db.Book
  //     .findById(req.params.id)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // create: function (req, res) {
  //   db.Book
  //     .create(req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // update: function (req, res) {
  //   db.Book
  //     .findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // remove: function (req, res) {
  //   db.Book
  //     .findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },


};
