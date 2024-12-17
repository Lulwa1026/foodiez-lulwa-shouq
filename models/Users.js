const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
  },
  typ: {
    type: String,
    default: "USER",
  },
  password: { type: String },
  myRecipe: [{ type: Schema.Types.ObjectId, ref: "Recipe" }],
  favouriteRecipe: [
    {
      type: Schema.Types.ObjectId,
      ref: "Recipe",
    },
  ],
});
module.exports = model("User", UserSchema);
