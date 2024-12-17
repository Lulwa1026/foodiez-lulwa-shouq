const express = require("express");
const {
  getRecipes,
  getRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe,
  addIngredientToRecipe,
} = require("./recipes.controllers");
const passport = require("passport");

const router = express.Router();

router.get("/", getRecipes); //Get all recipes
router.get("/:id", getRecipe); //Get recipe by id
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  createRecipe
); //add recipe
router.put(
  "/:id",
  passport.authenticate("local", { session: false }),
  updateRecipe
); //Edit recipe
router.delete("/:id", deleteRecipe); //Delete recipe
router.post("/:recipeId/add/:ingredientId", addIngredientToRecipe);

module.exports = router;
