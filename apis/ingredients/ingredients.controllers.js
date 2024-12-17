const Ingredients = require("../../models/Ingredients");

exports.getController = async (req, res) => {
  try {
    const ingredients = await Ingredients.find();
    res.json(ingredients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.newIngredientController = async (req, res) => {
  try {
    // req.body.map(async(ingredient) =>  await Ingredients.create(ingredient) )
    const newIngredients = await Ingredients.create(req.body);
    res.status(201).json(newIngredients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteIngredientController = async (req, res) => {
  const { ingredientId } = req.params;
  try {
    const foundIngredient = await Ingredients.findById(ingredientId);
    if (foundIngredient) {
      await foundIngredient.deleteOne();
      res.status(204).json();
    } else {
      res.status(404).json({ message: "not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateIngredientController = async (req, res) => {
  const { ingredientId } = req.params;
  try {
    const foundIngredient = await Ingredients.findById(ingredientId);
    if (foundIngredient) {
      await foundIngredient.updateOne(req.body);
      res.status(200).json({ message: "ingredient Updated Successfully" });
    } else {
      res.status(404).json({ message: "ingredient not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
