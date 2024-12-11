require("dotenv").config();

const express = require("express");
const connectDB = require("./database");

const recipeRoutes = require("./apis/recipes/recipes.routes");
const categaryRoutes = require("./apis/categaries/categaries.routes");
const ingredientRoutes = require("./apis/ingredients/ingredients.routes");
const PORT = 8000;

const app = express();

app.use(express.json());

app.use("/categaries", categaryRoutes);
app.use("/recipes", recipeRoutes);
app.use("/ingredients", ingredientRoutes);

connectDB();

app.listen(PORT, () => {
  console.log(`The application is running on localhost:${PORT}`);
});
