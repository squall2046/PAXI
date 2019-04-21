const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const packSchema = new Schema({
  title: { type: String },
  content: { type: String },
  packid: [{ type: Schema.Types.ObjectId, ref: "Pack" }]
});

const Message = mongoose.model("Message", packSchema);

module.exports = Message;
