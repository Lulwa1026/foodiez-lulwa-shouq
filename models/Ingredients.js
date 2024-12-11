const { model, Schema } = require("mongoose");

const IngredientsSchema = new Schema({
  title: {
    type: String,
  },
  ingredients: {
    type: String,
  },
  instructions: {
    type: String,
  },
});

module.exports = model("Ingredients", IngredientsSchema);
