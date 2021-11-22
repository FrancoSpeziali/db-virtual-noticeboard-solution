const { Schema, model } = require("mongoose");

const NoticeSchema = new Schema({
  text: String,
  author: String,
  date: Date,
});

const Notice = model("notices", NoticeSchema);

module.exports = Notice;
