const express = require('express');
const router = express.Router();
const passport = require('passport');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const { ensureAuthenticated } = require('../config/auth');
const Controller = require("../controllers/Controller");


// Welcome Page
router.get('/', (req, res) => res.redirect('/'));

// Login Page
router.get('/login', (req, res) => res.redirect('/login'));

// Register Page
router.get('/register', (req, res) => res.redirect('/register'));

// Register
router.post('/register', (req, res) => {
  const { name, email, password, password2 } = req.body;
  let errors = [];

  if (!name || !email || !password || !password2) {
    errors.push({ msg: 'Please enter all fields' });
    // res.json({ error: 'Please enter all fields'});
    // res.redirect('/register');
  }

  if (password != password2) {
    errors.push({ msg: 'Passwords do not match' });
  }

  if (password.length < 6) {
    errors.push({ msg: 'Password must be at least 6 characters' });
  }

  if (errors.length > 0) {
    res.redirect('/register');
  } else {
    User.findOne({ email: email }).then(user => {
      if (user) {
        errors.push({ msg: 'Email already exists' });
        res.redirect('/register');
      } else {
        const newUser = new User({
          name,
          email,
          password
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => {
                req.flash(
                  'success_msg',
                  'You are now registered and can log in'
                );
                res.redirect('/profile');
              })
              .catch(err => console.log(err));
          });
        });
      }
    });
  }
});

// Logout
router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success_msg', 'You are logged out');
  res.redirect('/');
});

// Login
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/profile',
    failureRedirect: '/login',
    failureFlash: true
  })(req, res, next);
});

// profile
router.get('/profile', ensureAuthenticated, (req, res) =>
  res.redirect('/profile', {
    user: req.user
  })
);

// Profile
// router.get('/profile', ensureAuthenticated, (req, res) =>
//   res.redirect('/profile', {
//     user: req.user
//   })
// );

// // Profile
// router.get('/Profile', ensureAuthenticated, (req, res) => {
//   const user = req.body;
//   res.json(user);
// });

// post new user
// router
//   .route("/api/user/create")
//   .post(Controller.createUser)

// find existed user
router
  .route("/api/user/find")
  .post(Controller.findUser);

// post new pack
router
  .route("/api/pack/create")
  .post(Controller.createPack)

// find all packs
router
  .route("/api/pack/find")
  .get(Controller.findPacks);

// carrier pick a pack
router
  .route("/api/pack/pick/:packId")
  .put(Controller.updatePack);

// carrier find all available packs
router
  .route("/api/pack/find/unpicked")
  .get(Controller.findUnpicked);


module.exports = router;
