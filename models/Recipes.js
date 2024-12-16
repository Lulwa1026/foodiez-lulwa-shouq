const { model, Schema } = require("mongoose");

const RecipeSchema = new Schema(
  {
    title: {
      type: String,
    },
    ingredients: [
      {
        type: Schema.Types.ObjectId,

        ref: "Ingredients",
      },
    ],
    instructions: {
      type: String,
    },
    time: {
      type: String,
    },
    coverImage: {
      type: String,
    },
    // createdBy: {
    //   type: Schema.Types.ObjectId,
    //   ref: "User",
    // },
  }
  //   { timestamps: true }
);

module.exports = model("Recipes", RecipeSchema);
