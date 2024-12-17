const { model, Schema, Types } = require("mongoose");
const Recipes = require("./Recipes");

const CategoriesSchema = new Schema({
  title: {
    type: String,
  },
  image: {
    type: String,
  },
});

module.exports = model("Categories", CategoriesSchema);
