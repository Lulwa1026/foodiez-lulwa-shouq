require("dotenv").config();

const express = require("express");

const connectDB = require("./database");
const booksRoutes = require("./apis/recipes/recipes.routes");
// const authRoutes = require("./apis/auth/auth.routers");

const PORT = 8000;

const app = express();

app.use(express.json());

// app.use("/media", express.static(path.join(__dirname, "media")));
app.use("/recipes", recipeRoutes);
// app.use("/auth", authRoutes);

connectDB();
app.listen(PORT, () => {
  console.log(`The application is running on localhost:${PORT}`);
});
