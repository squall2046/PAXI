const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
// Load User model
const User = require('../models/user');

// // Register
// router.post('/register', (req, res) => {
//   const { name, email, password, password2 } = req.body;
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
//     res.render('register', {
//       errors,
//       name,
//       email,
//       password,
//       password2
//     });
//   } else {
//     User.findOne({ email: email }).then(user => {
//       if (user) {
//         errors.push({ msg: 'Email already exists' });
//         res.render('register', {
//           errors,
//           name,
//           email,
//           password,
//           password2
//         });
//       } else {
//         const newUser = new User({
//           name,
//           email,
//           password
//         });

//         bcrypt.genSalt(10, (err, salt) => {
//           bcrypt.hash(newUser.password, salt, (err, hash) => {
//             if (err) throw err;
//             newUser.password = hash;
//             newUser
//               .save()
//               .then(user => {
//                 req.flash(
//                   'success_msg',
//                   'You are now registered and can log in'
//                 );
//                 res.redirect('/profile');
//               })
//               .catch(err => console.log(err));
//           });
//         });
//       }
//     });
//   }
// });



// // post new user
// router
//   .route("/api/user/create")
//   .post(Controller.createUser)

// // find existed user
// router
//   .route("/api/user/find")
//   .post(Controller.findUser);

// // post new pack
// router
//   .route("/api/pack/create")
//   .post(Controller.createPack)

// // find all packs
// router
//   .route("/api/pack/find")
//   .get(Controller.findPacks);

// // carrier pick a pack
// router
//   .route("/api/pack/pick/:packId")
//   .put(Controller.updatePack);

// // carrier find all available packs
// router
//   .route("/api/pack/find/unpicked")
//   .get(Controller.findUnpicked);



module.exports = router;
