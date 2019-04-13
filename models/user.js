const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  fullName: { type: String, required: true },
  idNum: { type: String, required: true },
  ssn: { type: String, required: true },
  address: { type: String, required: true },
  image: { type: String, required: true },
  pack: [{
    type: Schema.Types.ObjectId,
    ref: "pack"
  }],
  date: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
