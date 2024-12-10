const express = require("express");
const {
  getRecipes,
  getRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe,
} = require("./recipes.controllers");

const router = express.Router();

router.get("/", getRecipes); //Get all recipes
router.get("/:id", getRecipe); //Get recipe by id
router.post("/", createRecipe); //add recipe
router.put("/:id", updateRecipe); //Edit recipe
router.delete("/:id", deleteRecipe); //Delete recipe

module.exports = router;
