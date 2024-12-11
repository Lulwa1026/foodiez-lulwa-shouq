const mongoose = require("mongoose");
const Categories = require("./Categories");

const recipeSchema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    ingredients: {
      type: Array,
      ref: Categories,
    },
    instructions: {
      type: String,
    },
    time: {
      type: String,
    },
    coverImage: {
      type: String,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Recipes", recipeSchema);
