
const { model, Schema, Types } = require("mongoose");
const recipeSchema = new Schema({
  title: {
    type: String,
  },
  image: {
    type: String,

// const mongoose = require("mongoose");
// const Categories = require("./Categories");

// const recipeSchema = mongoose.Schema(
//   {
//     title: {
//       type: String,
//     },
//     ingredients: {
//       type: Array,
//       ref: Categories,
//     },
//     instructions: {
//       type: String,
//     },
//     time: {
//       type: String,
//     },
//     coverImage: {
//       type: String,
//     },
//     createdBy: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//     },
//   },
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
