const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
  },
  password: { type: string },
  myRecipe: [{ type: Schema.Types.ObjectId, ref: "Recipe" }],
  favouriteRecipe: [
    {
      type: Schema.Types.ObjectId,
      ref: "Recipe",
    },
  ],
});
module.exports = model("User", UserSchema);
