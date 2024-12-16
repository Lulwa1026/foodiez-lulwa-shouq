const { model, Schema } = require("mongoose");

const CategoriesSchema = new Schema({
  img: String,
  title: String,
  recipes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Recipes",
    },
  ],
});

module.exports = model("Categories", CategoriesSchema);
