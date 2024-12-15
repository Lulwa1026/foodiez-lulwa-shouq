const { model, Schema, Types } = require("mongoose");
const recipeSchema = new Schema({
  title: {
    type: String,
  },
  image: {
    type: String,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Categories",
  },
  ingredients: [
    {
      type: Schema.Types.ObjectId,
      ref: "Ingredients",
    },
  ],
});

module.exports = model("Recipes", recipeSchema);
