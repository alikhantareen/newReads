const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const News = new mongoose.Schema(
  {
    title: String,
    description: String,
    image: String,
    writer: String,
    category: String,
    readTime: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("News", News);