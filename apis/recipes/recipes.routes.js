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
  addIngredientToRecipe,
  addIngredient,
} = require("./recipes.controllers");
const passport = require("passport");

const router = express.Router();

router.get("/", getRecipes); //Get all recipes
router.get("/:id", getRecipe); //Get recipe by id
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  upload.single("image"),
  createRecipe
); //add recipe
router.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  upload.single("image"),
  updateRecipe
); //Edit recipe
router.delete("/:id", deleteRecipe); //Delete recipe
router.post("/:recipeId/add/:ingredientId", addIngredientToRecipe);
// router.post("/:recipeId/add/:ingredientId", addIngredient);

module.exports = router;
