const { model, Schema } = require("mongoose");

const CategoriesSchema = new Schema({
  img: String,
  title: String,
});

module.exports = model("Categories", CategoriesSchema);