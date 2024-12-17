const Recipes = require("../../models/Recipes");

exports.getRecipes = async (req, res) => {
  const recipes = await Recipes.find().populate("ingrediets");
  return res.json(recipes);
};

exports.getRecipe = async (req, res) => {
  const recipe = await Recipes.findById(req.params.id);
  res.json(recipe);
};

exports.deleteRecipe = async (req, res) => {
  try {
    await Recipes.deleteOne({ _id: req.params.id });
    res.status(204).end();
  } catch (err) {
    return res.status(404).json({ message: "error" });
  }
};
exports.updateRecipe = async (req, res) => {
  const { recipeId } = req.body;
  const recipe = await Recipes.findById(req.params.id).populate("creator");

  const { user } = req;
  if (user.id !== recipe.creator.id) {
    return res.status(403).json("Sign in to get the best experience!");
  }
  await recipe.updateOne(req.body);
  const updateRecipe = await Recipes.findById(recipeId);
  res.status(200).json(updateRecipe);
};

exports.createRecipe = async (req, res) => {
  const { user } = req;
  if (user) {
    req.body.creator = user.id;
  } else {
    res.status(401).json("Please Login!");
  }

  const newRecipe = await Recipes.create(req.body);
  return res.status(201).json(newRecipe);
};

exports.addIngredientToRecipe = async (req, res) => {
  const { recipeId, ingredientId } = req.params;
  const recipe = await Recipes.findById(recipeId);
  const updateRecipe = await recipe.updateOne({
    $push: { ingredients: ingredientId },
  });
  res.status(200).json(updateRecipe);
};
