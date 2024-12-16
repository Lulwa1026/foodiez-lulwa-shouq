const express = require("express");
const {
  getRecipes,
  getRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe,
  addIngredient,
} = require("./recipes.controllers");

const router = express.Router();

router.get("/", getRecipes); //Get all recipes
router.get("/:id", getRecipe); //Get recipe by id
router.post("/", createRecipe); //add recipe
router.post("/:recipeId/add/:ingredientId", addIngredient);
router.put("/:id", updateRecipe); //Edit recipe
router.delete("/:id", deleteRecipe);

module.exports = router;
