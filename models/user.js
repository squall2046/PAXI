const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String },
  phone: { type: String },
  address: { type: String },
  idNum: { type: String },
  ssn: { type: String },
  image: { type: String },
  date: { type: Date, default: Date.now },
  pack: [{ type: Schema.Types.ObjectId, ref: "pack" }]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
