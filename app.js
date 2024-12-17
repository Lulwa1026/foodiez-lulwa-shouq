require("dotenv").config();

const express = require("express");
const connectDB = require("./database");
const passport = require("passport");
const app = express();
const PORT = 8000;

const { localStrategy, jwtStrategy } = require("./passport");
const recipesRoutes = require("./apis/recipes/recipes.routes");
const categariesRoutes = require("./apis/categories/categaries.routes");
const ingredientsRoutes = require("./apis/ingredients/ingredients.routes");
const usersRouter = require("./apis/users/users.routes");

app.use(express.json());
app.use(passport.initialize());
passport.use(localStrategy);
passport.use(jwtStrategy);

app.use("/categaries", categariesRoutes);
app.use("/recipes", recipesRoutes);
app.use("/ingredients", ingredientsRoutes);
app.use("/api/users", usersRouter);

connectDB();

app.listen(PORT, () => {
  console.log(`The application is running on localhost:${PORT}`);
});
