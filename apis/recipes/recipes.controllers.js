const Recipes = require("../../models/Recipes");

exports.getRecipes = async (req, res) => {
  const recipes = await Recipes.find();
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
  const { editRecipe } = req.body;
  let recipe = await Recipes.findById(req.params.id);

  try {
    if (recipe) {
      let coverImage = req.file?.filename
        ? req.file?.filename
        : recipe.coverImage;
      await Recipes.findByIdAndUpdate(
        req.params.id,
        { ...req.body, coverImage },
        { new: true }
      );
      res.json({ editRecipe });
    }
  } catch (err) {
    return res.status(404).json({ message: err });
  }
};

exports.createRecipe = async (req, res) => {
  try {
    const newRecipe = await Recipes.create(req.body);
    return res.status(201).json(newRecipe);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
module.exports = {
  getRecipes,
  getRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe,
};
