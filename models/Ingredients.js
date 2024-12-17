const { model, Schema } = require("mongoose");

const IngredientsSchema = new Schema({
  title: {
    type: String,
  },
  amount: {
    type: String,
  },
});

module.exports = model("Ingredients", IngredientsSchema);
