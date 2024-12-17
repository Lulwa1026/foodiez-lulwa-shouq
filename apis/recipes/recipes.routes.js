const express = require("express");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: "./media",
  filename: (req, file, cb) => {
    cb(null, `${+new Date()}${file.originalname}`);
  },
});

const upload = multer({
  storage,
});

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
router.post("/", upload.single("image"), createRecipe); //add recipe
router.post("/:recipeId/add/:ingredientId", addIngredient);
router.put("/:id", upload.single("image"), updateRecipe); //Edit recipe
router.delete("/:id", deleteRecipe);

module.exports = router;
