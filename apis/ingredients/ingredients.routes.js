const express = require("express");
const router = express.Router();
const {
  getController,
  newIngredientController,
  deleteIngredientController,
  updateIngredientController,
} = require("./ingredients.controllers");
router.get("/", getController);
router.post("/", newIngredientController);
router.delete("/:ingredientId", deleteIngredientController);
router.put("/:ingredientId", updateIngredientController);

module.exports = router;
