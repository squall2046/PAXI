const db = require("../models");

// Defining methods for the booksController
module.exports = {

  createPack: function (req, res) {
    console.log(req.body)
    db.Pack.create(req.body)
      .then(dbModel => { res.json(dbModel) })
      .catch(err => res.status(422).json(err));
  },

  findPacks: function (req, res) {
    db.Pack.find()
      .sort({ date: -1 })
      .then(dbModel => { res.json(dbModel), console.log("find all from mongo", "dbModel") })
      .catch(err => res.status(422).json(err));
  },

  updatePack: function (req, res) {
    console.log("req.params.packId", req.params.packId)
    db.Pack.findOneAndUpdate({ _id: req.params.packId }, { isPicked: true })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findUnpicked: function (req, res) {
    db.Pack.find({ isPicked: false })
      .sort({ date: -1 })
      .then(dbModel => { res.json(dbModel); console.log("find unpicked from mongo", "dbModel") })
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
