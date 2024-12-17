const Categories = require("../../models/Categories");
const Recipes = require("../../models/Recipes");

exports.getRecipes = async (req, res) => {
  const recipes = await Recipes.find()
    .populate("ingredients")
    .populate("category");
  return res.json(recipes);
};

exports.getRecipe = async (req, res) => {
  const recipe = await Recipes.findById(req.params.id);
  res.json(recipe);
};

exports.addIngredient = async (req, res) => {
  const { recipeId, ingredientId } = req.params;
  const recipe = await Recipes.findById(recipeId);
  const updatedRecipe = await recipe.updateOne({
    $push: { ingredients: ingredientId },
  });
  res.status(200).json(updatedRecipe);
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
    if (req.file) {
      req.body.image = `http://${req.get("host")}/media/${req.file.filename}`;
    }
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
    if (req.file) {
      req.body.image = `http://${req.get("host")}/media/${req.file.filename}`;
    }

    const newRecipe = await Recipes.create(req.body);

    // const foundCategory = Categories.findById(req.body.category)
    await Categories.findByIdAndUpdate(req.body.category, {
      $push: { recipes: newRecipe._id },
    });

    const newRecipe = await Recipes.create(req.body).populate;

    return res.status(201).json(newRecipe);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
