// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const userSchema = new Schema({
//   email: { type: String, required: true },
//   password: { type: String, required: true },
//   // password2: { type: String, required: true },
//   name: { type: String, required: true },
//   phone: { type: String },
//   address: { type: String },
//   dl: { type: String },
//   portrait: { type: String },
//   date: { type: Date, default: Date.now },
//   pack: [{ type: Schema.Types.ObjectId, ref: "pack" }]
// });

// const User = mongoose.model("User", userSchema);

// module.exports = User;

/////////////////////////////////////////////////////////////

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
