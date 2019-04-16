const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const db = require("../models/index");

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
      .then(dbModel => { res.json(dbModel); console.log("find all from mongo", "dbModel") })
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

  findUser: function (req, res) {
    db.User.find({ _id: req.params.id })
      .then(dbModel => { res.json(dbModel); console.log("find user", "dbModel") })
      .catch(err => res.status(422).json(err));
  },

  ///////////////////////////////////
  // app.post("/post/:id", (req, res) => {
  //   db.Note.create(req.body)
  //     .then(function (dbNote) {
  //       console.log("== dbNote", dbNote)
  // 找到父级对象的子数组,push进去即可
  //       return db.New.findOneAndUpdate({ _id: req.params.id }, { $push: { note: dbNote._id } }, { new: true });
  //     })
  //     .then(function (dbNew) {
  //       console.log("=====", dbNew)
  //       res.json(dbNew);
  //     })
  //     .catch((err) => {
  //       res.json(err);
  //     })
  // });

  // app.get("/note/:id", (req, res) => {
  //   db.New.findOne({ _id: req.params.id })
  //     .populate("note")
  // 读取父级对象是,如果不populate只能得到id
  //     .then(function (dbNote) {
  //       console.log("dbNote:", dbNote)
  //       // console.log("noteObject.theNews.note.note:", noteObject.theNews.note.note)
  //       res.json(dbNote);
  //     })
  //     .catch((err) => {
  //       res.json(err);
  //     });
  // });
  //////////////////////////////////////////


  // createUser: function (req, res) {
  //   console.log(req.body)
  //   const { name, email, password, password2 } = req.body;
  //   console.log({ name, email, password, password2 })

  //   let errors = [];

  //   if (!name || !email || !password || !password2) {
  //     errors.push({ msg: 'Please enter all fields' });
  //   }

  //   if (password != password2) {
  //     errors.push({ msg: 'Passwords do not match' });
  //   }

  //   if (password.length < 6) {
  //     errors.push({ msg: 'Password must be at least 6 characters' });
  //   }

  //   if (errors.length > 0) {
  //     res.send(
  //       errors,
  //       name,
  //       email,
  //       password,
  //       password2
  //     );
  //   } else {
  //     db.User.findOne({ email: email })
  //       .then(user => {
  //         if (user) {
  //           errors.push({ msg: 'Email already exists' });
  //           res.send({
  //             errors,
  //             name,
  //             email,
  //             password,
  //             password2
  //           });
  //         } else {
  //           const newUser = new db.User({
  //             name,
  //             email,
  //             password
  //           });

  //           bcrypt.genSalt(10, (err, salt) => {
  //             bcrypt.hash(newUser.password, salt, (err, hash) => {
  //               if (err) throw err;
  //               newUser.password = hash;
  //               // db.User.create(newUser)
  //               newUser
  //                 .save()
  //                 .then(user => {
  //                   req.flash(
  //                     'success_msg',
  //                     'You are now registered and can log in'
  //                   );
  //                   res.redirect('/login');
  //                 })
  //                 .catch(err => console.log(err));
  //             });
  //           });
  //         }
  //       });
  //   };
  // },

  // createUser: function (req, res) {
  //   // console.log(req.body)
  //   db.User.create(req.body)
  //     .then(user => {
  //       res.redirect('/login');
  //       // res.json(user);
  //       console.log("response from mongo:", user)
  //     })
  //     .catch(err => console.log(err));
  // },

  findUser: function (req, res) {
    console.log("login infor", req.body)
    db.User.findOne({ email: req.body.email })
      .then(dbModel => {
        console.log("then:", dbModel);
        // ?????????????????????
        // ?????????????????????
        // ?????????????????????
        // ?????????????????????
        //how to load this user to profile page
      })

    // .catch(err => res.status(422).json(err));
  },


};
