require("dotenv").config();

const express = require("express");
const connectDB = require("./database");

const { localStrategy, jwtStrategy } = require("./passport");
const recipeRoutes = require("./apis/recipes/recipes.routes");
const categaryRoutes = require("./apis/categories/categaries.routes");
const ingredientRoutes = require("./apis/ingredients/ingredients.routes");
const PORT = 8000;

const app = express();

app.use(express.json());
app.use(passport.initialize());
passport.use(localStrategy);
passport.use(jwtStrategy);

app.use("/categaries", categaryRoutes);
app.use("/recipes", recipeRoutes);
app.use("/ingredients", ingredientRoutes);
app.use("/api/users", usersRouter);

connectDB();

app.listen(PORT, () => {
  console.log(`The application is running on localhost:${PORT}`);
});
